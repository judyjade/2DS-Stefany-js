// Alguns erros 

let numero = 12 // O JavaScript é sensível ao Caps Lock
//console.log(Numero) // Erro de declaração, variável não declarada]

//console.log(numero // Erro de sintaxe, falta de parenteses

// Tratamento de erros 

//console.error('A lista não está executando a média') //Declara um erro para outro usuário;

const idadeMinima = 18
let idadeCliente = 17

if(idadeCliente >= idadeMinima){
    console.log('Cerveja')
} else{
    console.log('Suco')
}

// Valor Ternário

idadeCliente = 20

// Modo ternário, ______ <= ______ ? ------ : -------
// Modo ternário, ______ == ______ ? ------ : -------
console.log(idadeCliente >= idadeMinima ? "Cerveja" : "Suco")
                    //  => uma função arrow, completamente diferente de maior igual

// Utilizar com cuidado !!!!!!

const nome = 'Stefany' 
const idade = 17
const cidadeNascimento = "Foz do Iguaçu"

const apresentacao = 'Meu nome é ' + nome + ' tenho ' + idade + ' anos e nasci em ' + cidadeNascimento

console.log(apresentacao)

// Template String

const apresentacaoII = `Sou o ${nome} e tenho ${idade} anos de idade. Nasci na cidade de ${cidadeNascimento}`

console.log(apresentacaoII)