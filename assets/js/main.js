/* Elementos HTML */
const parent                = document.querySelector(".price-slider");
const rangeS                = parent.querySelectorAll('input[type=range]');
const numberS               = parent.querySelectorAll('input[type=number]');
const btnFiltroMovil        = document.querySelector('#btn-filtro-movil');
const btnFiltroDesktop      = document.querySelector('#btn-filtro-desktop');
const panelFiltroMovil      = document.querySelector('#panel-filtro-movil');
const panelFiltroDesktop    = document.querySelector('#panel-filtro-desktop');

let banderFiltroMovil   = 0;
let banderFiltroDesktop = 0;

const mostrarPanelFiltroMovil = ()=>
{
    if( banderFiltroMovil )
    {
        panelFiltroMovil.classList.add('d-none');
        banderFiltroMovil = 0
    }
    else
    {
        panelFiltroMovil.classList.remove('d-none');
        banderFiltroMovil = 1
    }
}

const mostrarPanelFiltroDesktop = ()=>
{
    if( banderFiltroDesktop )
    {
        panelFiltroDesktop.classList.add('d-none');
        banderFiltroDesktop = 0
    }
    else
    {
        panelFiltroDesktop.classList.remove('d-none');
        banderFiltroDesktop = 1
    }
}

( () => {
    
    btnFiltroMovil.addEventListener('click', mostrarPanelFiltroMovil, false);
    btnFiltroDesktop.addEventListener('click', mostrarPanelFiltroDesktop, false);
    
    /*
        Rango de precios
    */
    rangeS.forEach((el) => {
        el.oninput = () => {
            let slide1 = parseFloat(rangeS[0].value),
                slide2 = parseFloat(rangeS[1].value);
            if (slide1 > slide2)
            {
                [slide1, slide2] = [slide2, slide1];
            }
            numberS[0].value = slide1;
            numberS[1].value = slide2;
        }
    });

    numberS.forEach((el) => {
        el.oninput = () => {
            let number1 = parseFloat(numberS[0].value),
                number2 = parseFloat(numberS[1].value);
            if (number1 > number2)
            {
                let tmp = number1;
                numberS[0].value = number2;
                numberS[1].value = tmp;
            }
            rangeS[0].value = number1;
            rangeS[1].value = number2;
        }
    });

})();