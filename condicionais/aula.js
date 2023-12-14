

const numero = 16;


const isNumeroDivisivelPor5 = (numero % 5) === 0;

if (numero ===0) {
    console.log('O n�menro � inv�lido');
} else if (isNumeroDivisivelPor5) {
    console.log('Sim');
} else{
    console.log('N�o');
}
