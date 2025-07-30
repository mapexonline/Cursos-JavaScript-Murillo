//Exercicios de Operadores Logicos
//Você tem um produto que custa R$200 e recebeu o desconto de R$40, porem, um valor de imposto foi aplicado em seu produto. Qual o valor final?

let produtoValor = 200;
let desconto = 40;
let imposto = 12;

console.log(produtoValor - desconto + imposto);

//Você vendeu um produto de R$100 e quer ter um lucro de R$30. Calcule o preço.
let produtoValor2 = 100;
let lucrodaLoja = 30;

console.log(produtoValor2 + lucrodaLoja);

//Você tem um orçamento de R$250 e deseja verificar se o custo de um produto. Após aplicar um desconto de
//R$50, está dentro do orçamento

let orçamento = 250;
let desconto2 = 50;
let preçoProduto = 300;

let produtocomDesconto = preçoProduto - desconto2;
let dentroDoOrçamento = produtocomDesconto <= orçamento;

console.log(`Preço com desconto : R$ ${produtocomDesconto}`);
console.log(`Está dentro do Orçamento? ${dentroDoOrçamento}`);

//Exercicio 4
let quantidadeEstoqueString = "20";
let quantidadeMiniEstoque = 20;

//Conversão Explícita de string para number
let quantidadeEstoque = Number(quantidadeEstoqueString);
console.log(quantidadeEstoque);

//Verificação de igualdade Estrita
let suficiente = quantidadeEstoque === quantidadeMiniEstoque; //true

console.log(`A quantidade no estoque é o suficiente ? ${suficiente}`);
