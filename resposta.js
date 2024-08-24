let listaDeCompras = ["pão", "leite", "ovos", "queijo", "frutas"];
console.log("Lista inicial:", listaDeCompras);

listaDeCompras.push("café");
console.log("Após adicionar 'café':", listaDeCompras);

listaDeCompras.unshift("manteiga");
console.log("Após adicionar 'manteiga':", listaDeCompras);

let itemRemovido = listaDeCompras.pop();
console.log("Item removido (último):", itemRemovido);
console.log("Após remover o último item:", listaDeCompras);

let primeiroItemRemovido = listaDeCompras.shift();
console.log("Item removido (primeiro):", primeiroItemRemovido);
console.log("Após remover o primeiro item:", listaDeCompras);

listaDeCompras.splice(1, 1, "chocolate");
console.log("Após substituir o segundo item por 'chocolate':", listaDeCompras);

listaDeCompras.splice(2, 1, "biscoitos", "suco");
console.log("Após remover o terceiro item e adicionar 'biscoitos' e 'suco':", listaDeCompras);

let index = listaDeCompras.indexOf("frutas");
if (index !== -1) {

    listaDeCompras.splice(index, 1);
    console.log("Após remover 'frutas':", listaDeCompras);
} else {

    listaDeCompras.push("frutas");
    console.log("Após adicionar 'frutas':", listaDeCompras);
}

console.log("Lista final:", listaDeCompras);
