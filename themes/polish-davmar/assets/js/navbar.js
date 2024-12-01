//hamburger menu and darkmode

document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('menu-btn')
    const menu = document.getElementById('menu')
    const darkButton = document.getElementById('dark_button');
    const moon = document.getElementById('moon')
    const sun = document.getElementById('sun')
    const body = document.body;
    const whatsapp = document.getElementById('whatsapp')


    whatsapp.addEventListener('click', function(){
        alert('haha')
    })

    btn.addEventListener('click', navToggle)

    // Toggle Mobile Menu
    function navToggle() {
        btn.classList.toggle('open')
        menu.classList.toggle('flex')
        menu.classList.toggle('hidden')
    }

    darkButton.addEventListener('click', darkToggle)

    // Toggle dark mode
    function darkToggle() {
        body.classList.toggle('dark')
        moon.classList.toggle('fade')
        sun.classList.toggle('fade')
    }
})