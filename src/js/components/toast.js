// 모던한 토스트 알림 시스템
export class Toast {
    static show(message, type = 'success', duration = 5000) {
        // 기존 토스트 제거
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }

        // 토스트 컨테이너 생성
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        // 아이콘 선택
        const icons = {
            success: '✅',
            error: '❌',
            warning: '⚠️',
            info: 'ℹ️'
        };
        
        toast.innerHTML = `
            <div class="toast-content">
                <div class="toast-icon">${icons[type] || icons.success}</div>
                <div class="toast-message">${message}</div>
                <button class="toast-close" onclick="this.parentElement.parentElement.remove()">✕</button>
            </div>
        `;

        // 스타일 적용
        this.applyStyles(toast);

        // DOM에 추가
        document.body.appendChild(toast);

        // 애니메이션
        setTimeout(() => toast.classList.add('toast-show'), 10);

        // 자동 제거
        setTimeout(() => {
            if (toast.parentElement) {
                toast.classList.add('toast-hide');
                setTimeout(() => toast.remove(), 300);
            }
        }, duration);

        return toast;
    }

    static applyStyles(toast) {
        // 인라인 스타일로 즉시 적용
        Object.assign(toast.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: '10000',
            minWidth: '320px',
            maxWidth: '500px',
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            transform: 'translateX(100%)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            fontSize: '14px',
            border: '1px solid #e1e5e9'
        });

        const content = toast.querySelector('.toast-content');
        Object.assign(content.style, {
            display: 'flex',
            alignItems: 'flex-start',
            padding: '16px',
            gap: '12px'
        });

        const icon = toast.querySelector('.toast-icon');
        Object.assign(icon.style, {
            fontSize: '20px',
            flexShrink: '0',
            marginTop: '2px'
        });

        const message = toast.querySelector('.toast-message');
        Object.assign(message.style, {
            flex: '1',
            lineHeight: '1.5',
            color: '#333',
            wordBreak: 'keep-all'
        });

        const closeBtn = toast.querySelector('.toast-close');
        Object.assign(closeBtn.style, {
            background: 'none',
            border: 'none',
            fontSize: '18px',
            color: '#999',
            cursor: 'pointer',
            padding: '0',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            transition: 'all 0.2s ease'
        });

        // 성공/오류별 스타일
        if (toast.classList.contains('toast-success')) {
            toast.style.borderLeft = '4px solid #28a745';
            icon.style.color = '#28a745';
        } else if (toast.classList.contains('toast-error')) {
            toast.style.borderLeft = '4px solid #dc3545';
            icon.style.color = '#dc3545';
        }

        // 호버 효과
        closeBtn.addEventListener('mouseenter', () => {
            closeBtn.style.backgroundColor = '#f0f0f0';
            closeBtn.style.color = '#333';
        });
        
        closeBtn.addEventListener('mouseleave', () => {
            closeBtn.style.backgroundColor = 'transparent';
            closeBtn.style.color = '#999';
        });
    }

    static success(message, duration) {
        return this.show(message, 'success', duration);
    }

    static error(message, duration) {
        return this.show(message, 'error', duration);
    }
}

// CSS 클래스 추가
const style = document.createElement('style');
style.textContent = `
    .toast-show {
        transform: translateX(0) !important;
    }
    
    .toast-hide {
        transform: translateX(100%) !important;
        opacity: 0 !important;
    }
    
    @media (max-width: 768px) {
        .toast {
            left: 20px !important;
            right: 20px !important;
            min-width: auto !important;
            max-width: none !important;
        }
    }
`;

if (!document.head.querySelector('style[data-toast-styles]')) {
    style.setAttribute('data-toast-styles', 'true');
    document.head.appendChild(style);
}