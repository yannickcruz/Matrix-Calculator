// Objeto que armazena a ordem das matrizes
let mat = {
    A: 0,
    B: 0,
    C: 0,
    D: 0
}

// Objeto que armazena arrays contendo todos os elementos da matriz digitada pelo usuário
let matArr = {
    Am: [],
    Bm: [],
    Cm: [],
    Dm: []
}

// Matrix value quantifier: contabiliza quantas matrizes tiveram valores salvos para criar as opções de cálculos
function matValueQtr(reset){
    const calcsDiv = document.querySelector(".calcs");
    //const oneMatrix = document.querySelectorAll(".oneMatrix");
    const singleMatrix = document.getElementById("singleMatrix");
    const multiEnable = document.getElementById("multiEnable");
    const firstSelect = document.getElementById("singleOps");
    const secSelect = document.getElementById("multiOps");
    let value = 0;

    // Esconder a div "calcs" caso não tenha matrizes com valores salvos
    if(reset === true){
        let verify = 0;
        let size = 0;
        for(let key in matArr){
            size++;
            if(matArr[key].length == 0){
                verify++;
            }
        }
        if(verify == size) calcsDiv.style.display = "none";
    }

    // Deixa a div "calcs" visível caso uma matriz seja criada
    for(let key in matArr){
        if(matArr[key].length != 0){
            value++;
            calcsDiv.style.display = "flex";
        }
    }

    for(let key in mat){
        if(mat[key] != 0){
            for(let i = 0; i < firstSelect.length; i++){
                if(key == firstSelect[i].value){
                    firstSelect[i].disabled = false;
                    secSelect[i].disabled = false;
                }
            }
        } else{
            for(let i = 0; i < firstSelect.length; i++){
                if(key == firstSelect[i].value){
                    firstSelect[i].disabled = true;
                    secSelect[i].disabled = true;
                }
            }
        }
    }

}

function multiMatrixCalcEnable(){
    const select = document.getElementById("chooseCalc");
    const multiMatrix = select.querySelectorAll("option.multiMatrix");
    const multiEnable = document.getElementById("multiEnable");
    const singleMatrix = document.getElementById("singleMatrix");
    const selectedOption = Array.from(multiMatrix).some(option => option.selected);

        if(selectedOption){
            multiEnable.style.display = "flex";
            singleMatrix.style.display = "flex";

        } else{
            singleMatrix.style.display = "none";
            multiEnable.style.display = "none";
        }

}


function localStorage(){
    
}

//Função que mostra o display a matriz criada
function display_create(order, action){
    // A entrada 'order' significa a ordem da matriz para fins de identificação da matriz criada

    // A entrada action pode variar entre 0, 1, 2 e numeros diferentes de 0, 1, 2
    // Action valendo 0 a mensagem exibe matriz excluida
    // Action valendo 1 a mensagem exibe matriz criada
    // Action valendo 2 a mensagem exibe matriz resetada
    // Action valendo outro valor, como -1 por exemplo, não será exibida nenhuma mensagem

    // Para o pleno funcionamento da função, deve-se colocar tanto order, quanto action na chamada da função como 0
    // caso a exclusão seja requerida

    // Variável que pega o elemento 'p' da div display
    const p = document.getElementById("displayText");
    if(action === 1){
        if(order === 1){
            p.innerHTML = "Escalar criado";
        }
        p.innerHTML = `Matriz ${order}x${order} criada`;
    } else if(order === 0 && action === 0){
        p.innerHTML = "Matriz excluída"
    } if(action === 2){
        p.innerHTML = "Matriz resetada"
    }
       
}



// Seleciona o botão de salvar os elementos da matriz
const saveMatrix = document.getElementById("saveMatrix");
function removeMatrix(action){
    const select = document.getElementById("matrixOrder");
    const div = document.querySelectorAll(".matrixAutoCommon");
    div.forEach(div => div.innerHTML = '');
    saveMatrix.style.display = 'none';
    select.disabled = false;
    display_create(0,action);
}

function resetMatrix(){
    //Seleciona o valor do nome da matriz
    const matrixNameValue = document.getElementById("matrixName").value
    // Seleciona o Select responsável por alternar os nomes das matrizes
    const matrixName = document.getElementById("matrixName");
    // Pega o indice atual do nome da matriz
    let selected = matrixName.options[matrixName.selectedIndex];

    // Seleciona o nome do atributo que define a matriz escolhida para ser o objeto alvo a ser embutido o array de elementos
    let matrixArrayId = selected.getAttribute("matrixArray");
    // Esta ação zera os valores salvos da matriz selecionada
    matArr[matrixArrayId] = [];
    // Zera a ordem da matriz
    mat[matrixNameValue] = 0;
    // Completa a ação removendo os inputs da matriz
    removeMatrix(2);
    matValueQtr(true);
}
function createScalar(){
    const div = document.getElementById("scalar");
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "a11");
    input.setAttribute("id", "a11");

    div.style.display = 'block';
    div.appendChild(input);
    saveMatrix.style.display = 'block';
    display_create(1, 1);
}
function create2x2(){
    const div = document.getElementById("matrixAuto2x2");
    const order = parseInt(document.getElementById("matrixOrder").value);
    const label = document.createElement("label");
    label.setAttribute("for", "fill");
    div.appendChild(label);
    //console.log(`Order vale: ${order + 1}`);
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
    saveMatrix.style.display = 'block';
    display_create(order, 1);
}
function create3x3(){
    const div = document.getElementById("matrixAuto3x3");
    const order = parseInt(document.getElementById("matrixOrder").value);
    const label = document.createElement("label");
    label.setAttribute("for", "fill");
    div.appendChild(label);
    //console.log(`Order vale: ${order + 1}`);
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
    saveMatrix.style.display = 'block';
    display_create(order, 1);
}
function create4x4(){
    // Variavel div pega a div especifica para a matriz selecionada
    const div = document.getElementById("matrixAuto4x4");
    const order = parseInt(document.getElementById("matrixOrder").value);
    const label = document.createElement("label");
    label.setAttribute("for", "fill");
    div.appendChild(label);
    //console.log(`Order vale: ${order + 1}`);
    // Laços de repetição para criar os inputs na organização correta da matriz
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
    // Torna a div selecionada visível
    div.style.display = 'block';
    // Faz com que o botão de salvar a matriz fique visível
    saveMatrix.style.display = 'block';
    display_create(order, 1);
}
function generateMatrix(){
    // Remover matriz caso exista uma para evitar conflitos
    removeMatrix(0);
    // Variavel que seleciona o Select responsável por variar a ordem da matriz
    const select = document.getElementById("matrixOrder");
    // Pega o valor da ordem selecionada
    const order = document.getElementById("matrixOrder").value;
    if(order == 1){
        createScalar();
    } else if(order == 2){
        create2x2();
    } else if(order == 3){
        create3x3();
    } else if(order == 4){
        create4x4();
    }
    select.disabled = true;
}

function save(){
    // 'order' pega o valor da ordem da matriz no select de id "matrixOrder"
    const order = document.getElementById("matrixOrder").value;

    // Esta variável pega o valor atual do nome da matriz selecionada
    const matrixNameValue = document.getElementById("matrixName").value;

    // O valor que corresponde ao nome da matriz é identificado dentro do objeto mat, e recebe a ordem da matriz
    mat[matrixNameValue] = order;

    console.log(`Matriz ${matrixNameValue} agora possui ordem ${order}`); 
    //console.log(matArr.Am);
    generateMatrix();

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

    // Exibe mensagem no display que a matriz foi salva
    document.getElementById("displayText").innerHTML = "Matriz salva";
    matValueQtr();
}

// Código para passar para o próximo input ao apertar 'enter'

function next(container){
    container.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        e.preventDefault();
        const inputs = container.querySelectorAll('input');
        const index = Array.from(inputs).indexOf(e.target);
        if (index > -1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    }
});
}

next(document.getElementById("matrixAuto2x2"));
next(document.getElementById("matrixAuto3x3"));
next(document.getElementById("matrixAuto4x4"));

function matrixSlider(){
    //Seleciona o nome da matriz
    const matrixNameValue = document.getElementById("matrixName").value;

    
    
    //Seleciona o 'Select' que contém a escolha da ordem da matriz
    const select = document.getElementById("matrixOrder");

    //Pega a ordem da matriz previamente salvo
    const matrixOrder = mat[matrixNameValue];
    console.log(`Order vale: ${matrixOrder}`);

    //Variável para armazenar os valores dos inputs das matrizes, caso estejam salvos
    let matrixValues = [];

    //Seleciona o Select que alterna as matrizes
    const matrixName = document.getElementById("matrixName");

    //Pega o valor do atributo matrixArray das opções do select 'matrixName'
    let selected = matrixName.options[matrixName.selectedIndex];
    let matrixArrayId = selected.getAttribute("matrixArray");

    if(mat[matrixNameValue] == 0){
        removeMatrix(-1);
        select.disabled = false;
    } else{
        matrixValues = matArr[matrixArrayId];
        console.log(matrixValues);
        document.getElementById("matrixOrder").value = matrixOrder;
        generateMatrix();

        //Seleciona todos os inputs de todas as divs de classe .matrixAutoCommon
        const inputs = document.querySelectorAll(".matrixAutoCommon input");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = matrixValues[i] ?? '';
        }
    }
}






