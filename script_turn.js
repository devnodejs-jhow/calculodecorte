//Pega os elementos de input para obter valores
const diametro = document.querySelector('#diametro')

const velocidade = document.querySelector('#velocidade')

const rotacao_turn = document.querySelector('#rotacao_turn')

const avanco_turn = document.querySelector('#avanco_turn')

const qtdFacas = document.querySelector('#qtdFacas')

//Pega o array dos inputs para verificar se algum campo esta vazio quando clicar em calcular 
const allInputsRotacao_turn = document.querySelectorAll('.btnOne')

const allInputsAvanco_turn = document.querySelectorAll('.btnTwo')

//Botoes
const calcularRotacao_turn = document.querySelector('#btnOne')

const calcularAvanco_turn = document.querySelector('#btnTwo')

//Pega as divs que vão colocar o resutado das contas
const inserResultadoRotacao_turn = document.querySelector('#textContainer1')

const inserResultadoAvanco_turn = document.querySelector('#textContainer2')
const pi = 3.14159265358979323846

let arrayResult = []

//Evento de clique de calcular rotacao_turn
calcularRotacao_turn.addEventListener('click', () => {
    allInputsRotacao_turn.forEach(element => {
        arrayResult.push(element.value)
    });
    if (arrayResult.includes('')) {

        window.alert("Todos os campos referidos a rotação devem ser preenchidos");
        arrayResult = []
    } else {
        inserResultadoRotacao_turn.textContent = Math.floor(functionCalcularRotacao_turn(Number(velocidade.value), Number(diametro.value)))
        console.log(Number(diametro.value), Number(velocidade.value))
    }

})

//Evento de clique de calcular avanço
calcularAvanco_turn.addEventListener('click', () => {
    allInputsAvanco_turn.forEach(element => {
        arrayResult.push(element.value)
    });
    if (arrayResult.includes('')) {

        window.alert("Todos os campos referentes ao avanço devem ser preenchidos");
        arrayResult = []
    } else {
        inserResultadoAvanco_turn.textContent = Math.floor(functionCalcularAvanco_turn(Number(rotacao_turn.value), Number(avanco_turn.value)))
        console.log(Number(diametro.value), Number(velocidade.value))
    }
})


const functionCalcularRotacao_turn = (vc, diamterTool) => {
    return (vc * 1000) / (diamterTool * pi)
}

const functionCalcularAvanco_turn = (rotacao_turn,avanco_turn) => {
    return avanco_turn/rotacao_turn
}