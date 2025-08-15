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
    
    if (!validateFormData(formData)) {
        return;
    }
    
    const submitButton = this.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    
    // Show loading state
    setButtonLoading(submitButton, true);
    
    try {
        // Simulate form processing
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Log form data to console for debugging
        console.log('Form submission:', formData);
        
        // Show success message
        alert('제안이 성공적으로 전송되었습니다!\\n\\n문의사항은 previtlab@gmail.com으로 직접 연락 부탁드립니다.');
        
        // Reset form
        this.reset();
        
    } catch (error) {
        console.error('Form submission error:', error);
        alert('전송 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
        setButtonLoading(submitButton, false, originalText);
    }
}

function extractFormData(form) {
    const inputs = form.querySelectorAll('input');
    const data = {};
    
    inputs.forEach(input => {
        const placeholder = input.placeholder;
        if (placeholder) {
            data[placeholder] = input.value.trim();
        }
    });
    
    // Map Korean placeholders to English keys
    return {
        name: data['이름'] || '',
        email: data['이메일'] || '',
        company: data['회사명'] || '',
        phone: data['연락처'] || '',
        proposal: data['제안 사항'] || ''
    };
}

function validateFormData(data) {
    // Required fields validation
    if (!data.name || !data.email || !data.proposal) {
        alert('이름, 이메일, 제안 사항은 필수 입력 항목입니다.');
        return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('올바른 이메일 주소를 입력해주세요.');
        return false;
    }
    
    // Phone number validation (if provided)
    if (data.phone && data.phone.length > 0) {
        const phoneRegex = /^[0-9-+\s()]+$/;
        if (!phoneRegex.test(data.phone)) {
            alert('올바른 연락처 형식을 입력해주세요.');
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
        button.disabled = false;
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
        background: rgba(0, 0, 0, 0.1);
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