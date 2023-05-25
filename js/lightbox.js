//Declaro las constantes
const imagenes = document.querySelectorAll('.img-galeria') //captura las imagenes en la constatnte
const imagenLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light')
const closeLight = document.querySelector('.close')


imagenes.forEach(imagen => {
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'));
    })
});
//para que al hacer click fuera de la imagen o el equis se cierra
contenedorLight.addEventListener('click',(e)=>{
    if(e.target !== imagenLight){
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('showImage')
        hamburguer.style.opacity = '1'; //para que aparezca el icono del menu, cuando se cierra la imagen
    }
})


const aparecerImagen = (imagen)=>{
    imagenLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenLight.classList.toggle('showImage')
    hamburguer.style.opacity = '0'; //para hacer desaparecer el icono del menu, cuando se habre la imagen
}