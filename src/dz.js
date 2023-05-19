'use strict';
let n = parseInt(prompt("Введите число N:"));
let chislo = 0;
for (let i = 0; i <= n; i++){
  if (i > 0 && i % 5 === 0){
    chislo++;
  }
}
console.log(chislo)
