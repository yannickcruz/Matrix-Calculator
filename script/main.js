let mat = {
    A: 0,
    B: 0,
    C: 0,
    D: 0
}

function save(){
    const order = document.getElementById("matrixOrder").value;
    const matrixName = document.getElementById("matrixName").value;
    mat[matrixName] = order;

    console.log(`Matriz ${matrixName} agora possui ordem ${order}`);

    
}

