document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe all sections and cards
    const elementsToAnimate = document.querySelectorAll('.section--page, .card--project, .card--work-history, .card--techstack');
    elementsToAnimate.forEach((el, index) => {
        // Add a custom property for staggered delay
        if (el.classList.contains('card--techstack')) {
            el.style.setProperty('--card-index', index);
        }
        observer.observe(el);
    });

    // Make project card clickable
    document.querySelectorAll('.card--project-clickable').forEach(card => {
        card.addEventListener('click', function (e) {
            // Prevents link from firing if another link inside the card is clicked
            if (e.target.closest('a') !== card.querySelector('a')) {
                return;
            }
            const link = card.querySelector('a');
            if (link && link.href) {
                // Handle special keys for opening in new tab
                if (e.metaKey || e.ctrlKey) {
                    window.open(link.href, '_blank');
                } else {
                    window.location.href = link.href;
                }
            }
        });
    });
});