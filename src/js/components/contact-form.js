import { Toast } from './toast.js';

// Simple profanity list
const BANNED_WORDS = ['바보', '멍청이', '씨발', '개새끼', '존나']; // Add more as needed

export function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', handleFormSubmit);

    // Add ripple effect to submit button
    const submitButton = contactForm.querySelector('.submit-button');
    if (submitButton) {
        submitButton.addEventListener('click', addRippleEffect);
    }
}

async function handleFormSubmit(e) {
    e.preventDefault();

    const formData = extractFormData(this);

    // 1. Honeypot check (Bot protection)
    if (formData.website) {
        console.warn('Bot detected via honeypot field.');
        return; // Silent fail for bots
    }

    // 2. Format & Profanity Validation
    if (!validateFormData(formData)) {
        return;
    }

    const submitButton = this.querySelector('.submit-button');
    const originalText = submitButton.textContent;

    // Show loading state
    setButtonLoading(submitButton, true);

    try {
        // Formspree 호출
        const response = await fetch('https://formspree.io/f/xvzqqkao', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                company: formData.company,
                phone: formData.phone,
                proposal: formData.proposal
            })
        });

        if (response.ok) {
            Toast.success(
                `제안이 성공적으로 전달되었습니다.\n\n추가 문의사항은 previtlab@gmail.com으로 연락 부탁드립니다.`,
                7000
            );
            this.reset();
        } else {
            const result = await response.json();
            Toast.error(result.error || '전송 중 오류가 발생했습니다.');
        }

    } catch (error) {
        console.error('Form submission error:', error);
        Toast.error('전송 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
        setButtonLoading(submitButton, false, originalText);
    }
}

function extractFormData(form) {
    const inputs = form.querySelectorAll('input, textarea');
    const data = {};

    inputs.forEach(input => {
        const name = input.getAttribute('name');
        const placeholder = input.placeholder;

        if (name === 'website') {
            data.website = input.value;
        } else if (placeholder) {
            data[placeholder] = input.value.trim();
        }
    });

    return {
        website: data.website || '',
        name: data['이름'] || '',
        email: data['이메일'] || '',
        company: data['회사명'] || '',
        phone: data['연락처'] || '',
        proposal: data['제안 사항'] || ''
    };
}

function validateFormData(data) {
    // Required fields check
    if (!data.name || !data.email || !data.proposal) {
        Toast.error('이름, 이메일, 제안 사항은 필수 항목입니다.');
        return false;
    }

    // 1. Profanity Filter check
    const allText = `${data.name} ${data.company} ${data.proposal}`.toLowerCase();
    const hasProfanity = BANNED_WORDS.some(word => allText.includes(word));

    if (hasProfanity) {
        Toast.error('부적절한 표현이 포함되어 있어 전송할 수 없습니다.');
        return false;
    }

    // 2. Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(data.email)) {
        Toast.error('올바른 이메일 형식이 아닙니다.');
        return false;
    }

    // 3. Phone number validation (Numbers and hyphens only)
    if (data.phone) {
        const phoneRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
        const simplePhoneRegex = /^[0-9-]{9,13}$/; // Fallback for various formats

        if (!simplePhoneRegex.test(data.phone.replace(/\s/g, ''))) {
            Toast.error('올바른 연락처 형식을 입력해주세요. (숫자와 - 사용)');
            return false;
        }
    }

    return true;
}

function setButtonLoading(button, isLoading, originalText = '제안 보내기') {
    if (isLoading) {
        button.textContent = '전송 중...';
        button.disabled = true;
    } else {
        button.textContent = originalText;
    }
}

function addRippleEffect(e) {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `;

    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}