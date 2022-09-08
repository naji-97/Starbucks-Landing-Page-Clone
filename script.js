const btn = document.getElementById('menu-btn')
const moblieMenu = document.getElementById('menu')
const body = document.body
function toggleNav(){
btn.classList.toggle('open')
moblieMenu.classList.toggle('open')
body.classList.toggle('no-scroll')
}

btn.addEventListener('click', toggleNav)