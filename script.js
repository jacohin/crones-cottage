document.addEventListener("DOMContentLoaded", () => {
    // Simple intersection observer for scroll reveals
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: "0px 0px -50px 0px"
    });

    // Target all elements with the scroll-reveal class
    document.querySelectorAll('.scroll-reveal').forEach((el) => {
        observer.observe(el);
    });
});