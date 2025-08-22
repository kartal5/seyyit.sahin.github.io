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

    // Make project card clickable (Corrected Logic)
    document.querySelectorAll('.card--project-clickable').forEach(card => {
        card.addEventListener('click', function (e) {
            // This condition checks if you clicked on something that ISN'T a link.
            // If true, it proceeds to navigate using the card's main link.
            if (!e.target.closest('a')) {
                const link = card.querySelector('a');
                if (link && link.href) {
                     // Handle special keys for opening in new tab
                    if (e.metaKey || e.ctrlKey) {
                        window.open(link.href, '_blank');
                    } else {
                        window.location.href = link.href;
                    }
                }
            }
        });
    });
});