'use strict'

function BinarioADecimal(num) {
  let binario = 0; 
  
    for (let i = 0; i < num.length; i++) { 
       binario += +num[i] * 2 ** (num.length - 1 - i); 
    }
    return binario;
}


function DecimalABinario(num) {
  // tu codigo aca
  let salidaBinaria = '';
  if (num != 0) {
    let decimal = num;
    while (decimal != 0) {
      salidaBinaria = (decimal % 2) + salidaBinaria;
      decimal = Math.floor(decimal/2);
    }
  } else { salidaBinaria = "0";}
  return salidaBinaria;
}






module.exports = {
  BinarioADecimal,
  DecimalABinario,
}