// obtener botones del slider
const bPrev = document.querySelector('#bPrev');
const bNext = document.querySelector('#bNext');
//obtener la clase asociada a las imagenes
let items = document.querySelectorAll('#slider-container .item');
//numero de imagenes
const total = items.length;
//numero de la imagen 
let index = 0;

//Da una imagen inicial 
mostrarItem(0);
bPrev.addEventListener('click', e => {
    if(index > 0){
        index--;
        ocultarItems();
        mostrarItem(index);
    }
})

bNext.addEventListener('click', e => {
    if(index < total-1){
        index++;
        ocultarItems();
        mostrarItem(index);
    }
})

function mostrarItem(index){
    items[index].classList.add('item-active');
}
function ocultarItems(){
    items.forEach( item => {
        item.classList.remove('item-active');
    });
}