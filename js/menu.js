// Declaro las constantes
const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')

// Agrega o quita la clase spread, para dar el efecto del despliegue del menu
hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})
//Este codigo permite cerrar el menu (quita la clase spread) al hacer click fuera de la barra de menu
window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != hamburguer){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})