// 1. تأثير الـ Sticky Navbar (تغيير الظل عند التمرير)
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 4px 8px rgba(171, 190, 209, 0.4)';
        }
    }
});

// 2. التحقق من إدخال البريد الإلكتروني في الفوتر
const emailInput = document.querySelector('.footer-input-box input');
const submitBtn = document.querySelector('.footer-input-box button');

if (submitBtn && emailInput) {
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const emailValue = emailInput.value.trim();

        // التحقق البسيط من صحة الإيميل
        if (emailValue === '' || !emailValue.includes('@') || !emailValue.includes('.')) {
            alert('الرجاء إدخال بريد إلكتروني صحيح!');
        } else {
            alert('تم الاشتراك في النشرة البريدية بنجاح، شكراً لك!');
            emailInput.value = ''; // تفريغ الخانة بعد الإرسال
        }
    });
}

// 3. التمرير السلس للروابط (Smooth Scrolling)
const allLinks = document.querySelectorAll('a[href^="#"]');
allLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});