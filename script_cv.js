document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const sideMenu = document.querySelector('.side-menu');
    const content = document.querySelector('.content');

    menuToggle.addEventListener('click', () => {
        sideMenu.classList.toggle('show');
        content.classList.toggle('show-sidebar');
    });

    // Close the sidebar if a menu item is clicked
    document.querySelectorAll('.side-menu a').forEach(link => {
        link.addEventListener('click', () => {
            sideMenu.classList.remove('show');
            content.classList.remove('show-sidebar');
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.side-menu nav ul li a').forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent default anchor behavior
            event.preventDefault();

            // Hide all cv sections
            document.querySelectorAll('.cv-section').forEach(section => {
                section.style.display = 'none';
            });

            // Show the clicked cv section
            const sectionId = this.getAttribute('href');
            document.querySelector(sectionId).style.display = 'block';
        });
    });
});
