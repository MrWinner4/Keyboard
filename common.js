/* Menu Button Function */
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('menu-button');
    const box = document.getElementById('animated-panel');

    button.addEventListener('click', function() {
        // Toggle the 'animate' class on each button click
        box.classList.toggle('animate');
    });
    const menuButtons = document.querySelectorAll('.panelBtn');
    menuButtons.forEach(button => {
        button.addEventListener('click', function() {

            const pageId = this.id;

            const targetUrl = `${pageId}.html`;

            window.location.href = targetUrl;
        })
    });
});
