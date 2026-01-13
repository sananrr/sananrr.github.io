/**
 * Sanan Rahimli Portfolio Script
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Scroll Reveal Animation ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer now tracks elements in new sections as well
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));


    // --- 2. Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 3. Console Signature ---
    console.log("%c Sanan Rahimli | Cyber Security Researcher", "color: #00ff9d; background: #000; font-size: 18px; padding: 10px;");

    // --- 4. Code Copy Functionality ---
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Find the <code> element inside the sibling <pre> tag
            const code = btn.nextElementSibling.querySelector('code').innerText;
            
            // Write to clipboard
            navigator.clipboard.writeText(code).then(() => {
                // Visual Feedback
                const originalText = btn.innerText;
                btn.innerText = 'Copied!';
                btn.style.borderColor = '#00ff9d';
                btn.style.color = '#00ff9d';

                // Reset after 2 seconds
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.borderColor = '';
                    btn.style.color = '';
                }, 2000);
            });
        });
    });
});