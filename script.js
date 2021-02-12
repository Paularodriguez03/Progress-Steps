const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
/*Todas estas constantes son para llamar lementos con clases o id del Html */

let currentActive = 1


next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        next.disabled= true;
    }
    /* si el currentactive es mayor que la cantidad de curculos se activa la parte
    del css que desabilita el boton */

    if(currentActive > 1){
        prev.disabled= false;
    }
    /*si el current Active es mayor a 1 se retira el disable, activando asi el boton prev */
    update() 
})

prev.addEventListener('click', () => {
    currentActive--;

    if(currentActive < circles.length) {
        next.disabled= false;
    }
    /*este es para que se vuelva a activar el boton */
    /* si el currentactive es menor que la cantidad de circulos se activa el boton */


    if(currentActive < 1) {
        prev.disabled= true;
    }
    /*si el current Active es menor a 1 se activa el disable, y se desabilita el boton prev */

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } 
        else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
    /*con esto se activa la barra, entre directa mente a modificar el ancho de los estilos 
    en la clase progess */
    /*al largo de los active-1 se le divide entre la contidad de circulos -1 se multiplica por 100
    y esto es el porcentaje que se mueve la barra al dar click*/

}