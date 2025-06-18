// Objeto que armazena a ordem das matrizes
let mat = {
    A: 0,
    B: 0,
    C: 0,
    D: 0
}

// Objeto que armazena um array contendo todos os elementos da matriz digitada pelo usuário
let matArr = {
    Am: [],
    Bm: [],
    Cm: [],
    Dm: []
}
function remove(){
    const order = parseInt(document.getElementById("matrixOrder").value);
    const matrix = [1, 2, 3, 4];
    for(let i = 0; i < 4; i++){
        
    }
    
}

function createScalar(){
    const div = document.getElementById("scalar");

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "a11");
    input.setAttribute("id", "a11");

    div.style.display = 'block';
    div.appendChild(input);
}
function create2x2(){
    const div = document.getElementById("matrixAuto2x2");
    const order = parseInt(document.getElementById("matrixOrder").value);
    const label = document.createElement("label");
    label.setAttribute("for", "fill");
    div.appendChild(label);
    console.log(`Order vale: ${order + 1}`);
    for(let line = 1; line < order + 1; line++){
        for(let col = 1; col < order + 1; col++){
            const input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("name", `a${line}${col}`);
            input.setAttribute("id", `a${line}${col}`);
            label.appendChild(input);
            console.log(`Criado input referente a posição ${line} ${col}`);
        }
    }
    div.style.display = 'block';
}
function create3x3(){

}
function create4x4(){

}
function save(){
    const order = document.getElementById("matrixOrder").value;
    const matrixNameValue = document.getElementById("matrixName").value;
    mat[matrixNameValue] = order;

    console.log(`Matriz ${matrixNameValue} agora possui ordem ${order}`); 
    if(order == 1){
        createScalar();
    } else if(order == 2){
        create2x2();
    } else if(order == 3){
        create3x3();
    } else if(order == 4){
        create4x4();
    }

}

function getMatrix(){
    const inputs = document.querySelectorAll(".matrixAutoCommon input");
    const matrixName = document.getElementById("matrixName");
    let selected = matrixName.options[matrixName.selectedIndex];

    // Seleciona o nome do atributo que define a matriz escolhida para ser o objeto alvo a ser embutido o array de elementos
    let matrixArrayId = selected.getAttribute("matrixArray");
    let matrixValues = [];
    let elemento;
    let valor;

    for(i = 0; i < inputs.length; i++){
        elemento = inputs[i];
        valor = parseFloat(elemento.value) || 0;
        matrixValues.push(valor);
    }
    // matArr, o objeto que armazena os elementos da matriz é atualizado usando este comando
    matArr[matrixArrayId] = matrixValues;
}

// Código para passar para o próximo input ao apertar 'enter'

const container = document.querySelector('.matrixAutoCommon');

container.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        const inputs = container.querySelectorAll('input');
        const index = Array.from(inputs).indexOf(e.target);
        if (index > -1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    }
});






