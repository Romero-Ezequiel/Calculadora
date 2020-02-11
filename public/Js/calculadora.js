const botonNumeros = document.getElementsByName('numero');
//console.log(botonNumeros);
const botonOperacion = document.getElementsByName('operacion');
//Le indico el indice 0 porque ahi esta el boton
const botonIgual = document.getElementsByName('igual')[0];
const botonBorrado = document.getElementsByName('borrado')[0];

let resultado = document.getElementById('resultado');
let operacionActual = '';
let operacionAnterior = '';
let operacion = undefined;


botonNumeros.forEach((boton)=>{
    boton.addEventListener('click', ()=>{
        agregarNumero(boton.innerText);
        //alert(boton.innerText);
    });
});

botonOperacion.forEach((boton)=>{
    boton.addEventListener('click', ()=>{
        seleccionarOperacion(boton.innerText);
        //alert(boton.innerText);
    });
});

botonIgual.addEventListener('click', ()=>{
        calcular();
        actualizarDisplay();
});


botonBorrado.addEventListener('click', ()=>{
        clear();
        actualizarDisplay();
});

const seleccionarOperacion = (op) =>{
    if(operacionActual == '') return ;
    if(operacionAnterior !== ''){
        calcular();
    }
    operacion = op.toString();
    operacionAnterior = operacionActual;
    operacionActual = '';
}

const calcular = () =>{
    let calculo;
    const anterior = parseFloat(operacionAnterior);
    const actual = parseFloat(operacionActual);
    if(isNaN(anterior) || isNaN(actual))return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    operacionActual = calculo;
    operacion = undefined;
    operacionAnterior = '';

}

const agregarNumero = (num) =>{
    operacionActual = operacionActual.toString() + num.toString();
    actualizarDisplay();
}

const clear = () =>{
    operacionActual = '';
    operacionAnterior = '';
    operacion = undefined;
}

const actualizarDisplay = () =>{
    resultado.value  = operacionActual;
}

clear();