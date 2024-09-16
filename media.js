document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const navLinks = document.querySelector('.nav-links');
    const headerContainer = document.querySelector('.header-container');
    const optionsContainer = document.querySelector('.options-container');

    // Ensure elements exist before adding event listeners or manipulating them
    if (toggleButton && navLinks) {
        toggleButton.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    function adjustOptionsContainer() {
        // Ensure headerContainer and optionsContainer are not null
        if (headerContainer && optionsContainer) {
            // Get the height of the header
            const headerHeight = headerContainer.offsetHeight;

            // Set the top position of the options container based on header height
            optionsContainer.style.top = `${headerHeight}px`;
        } else {
            console.error('Header container or options container not found');
        }
    }

    // Initial adjustment
    adjustOptionsContainer();

    // Reposition on window resize
    window.addEventListener('resize', adjustOptionsContainer);
});
