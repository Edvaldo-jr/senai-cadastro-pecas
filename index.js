let nome = "Peças";
let quantidade = 10;
let peso = 100;

if (quantidade >10) {
console.log ("Caixa sem capacidade.");
}

else if (quantidade <=10){
console.log ("Correto " + quantidade + " peças.");
}

if (nome.length >=3) {
console.log("Caracteres correto.");
}

else if (nome.length <3) {
console.log("O nome da peça tem que ter mais de 03 caracteres.");
}

if (peso >=100) {
console.log ("Correto peso de "+ peso +"g.");    
}

else if (peso <100) {
console.log ("Erro a peça deve ter um peso superior ou igual a 100g.");
}