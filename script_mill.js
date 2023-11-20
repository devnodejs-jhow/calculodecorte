//Pega os elementos de input para obter valores
const diametro = document.querySelector('#diametro')

const velocidade = document.querySelector('#velocidade')

const rotacao = document.querySelector('#rotacao')

const avanco = document.querySelector('#avanco')

const qtdFacas = document.querySelector('#qtdFacas')

//Pega o array dos inputs para verificar se algum campo esta vazio quando clicar em calcular 
const allInputsRotacao = document.querySelectorAll('.btnOne')

const allInputsAvanco = document.querySelectorAll('.btnTwo')

//Botoes
const calcularRotacao = document.querySelector('#btnOne')

const calcularAvanco = document.querySelector('#btnTwo')

//Pega as divs que vão colocar o resutado das contas
const inserResultadoRotacao = document.querySelector('#textContainer1')

const inserResultadoAvanco = document.querySelector('#textContainer2')
const pi = 3.14159265358979323846

let arrayResult = []

//Evento de clique de calcular rotacao
calcularRotacao.addEventListener('click', () => {
    allInputsRotacao.forEach(element => {
        arrayResult.push(element.value)
    });
    if (arrayResult.includes('')) {

        window.alert("Todos os campos referidos a rotação devem ser preenchidos");
        arrayResult = []
    } else {
        inserResultadoRotacao.textContent = Math.floor(functionCalcularRotacao(Number(velocidade.value), Number(diametro.value)))
        console.log(Number(diametro.value), Number(velocidade.value))
    }

})

//Evento de clique de calcular avanço
calcularAvanco.addEventListener('click', () => {
    allInputsAvanco.forEach(element => {
        arrayResult.push(element.value)
    });
    if (arrayResult.includes('')) {

        window.alert("Todos os campos referentes ao avanço devem ser preenchidos");
        arrayResult = []
    } else {
        inserResultadoAvanco.textContent = Math.floor(functionCalcularAvanco(Number(rotacao.value), Number(avanco.value), Number(qtdFacas.value)))
        console.log(Number(diametro.value), Number(velocidade.value))
    }
})


const functionCalcularRotacao = (vc, diamterTool) => {
    return (vc * 1000) / (diamterTool * pi)
}

const functionCalcularAvanco = (rotacao,avanco,qtdFacas) => {
    return rotacao*avanco*qtdFacas
}