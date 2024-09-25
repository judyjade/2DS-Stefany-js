// Funções

let x = 'nada'
console.log(x)

x = 'oi'
imprimeTexto(x)
console.log(x)

//Declarar uma função

//Estrutura  nomeDaFunção (parâmetros) {funcionalidade}
function imprimeTexto(Texto){
    console.log(Texto)
}

imprimeTexto('Sou estudante de Front End')
imprimeTexto('Olá mundo')

function soma(){
    return 2+2
}

imprimeTexto(soma())
//console.log(soma())

//Função com 2 parâmetros 
function somaDeNumeros(numero1, numero2){
    return numero1 + numero2
}

imprimeTexto(somaDeNumeros(10,9))

function divisaoDeNumeros(numero1, numero2){
    return numero1 / numero2
}

imprimeTexto(divisaoDeNumeros(10, 2))
imprimeTexto(divisaoDeNumeros(2, 10))

//Ordem de parâmetros

function apresentacao(nome, idade){
    return `Meu nome é ${nome} e tenho ${idade} anos.`
}

imprimeTexto(apresentacao('Stefany', 17))
imprimeTexto(apresentacao(17, 'Stefany')) //A ordem dos parâmetros é importante

//Parâmetro inicial, para que a função comece com um parâmetro pré-definido
function multiplicacao(n1 = 1, n2 = 1){
    return n1 * n2
}

imprimeTexto(multiplicacao(10, 4))
imprimeTexto(multiplicacao())