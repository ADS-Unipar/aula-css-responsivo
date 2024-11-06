const button = document.querySelector('#toggle-menu')

button.addEventListener('click', ()=>{
    document.body.classList.toggle('menu-open')
})