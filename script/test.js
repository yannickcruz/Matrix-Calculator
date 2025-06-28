const inputs = [1, 2, 3, 4];
const order = 2;
//let matrix = [];

function matrixExtractor(inputs, order){
    let matrix = [];
    let count = 0;
    let col = 0;
    let col2 = 0;
    count = order;
    for(let i = 0; i < order; i++){
        matrix[i] = [];
        for(let j = count - order; j < count; j++){
            matrix[i][col] = inputs[col2];
            col++;
            col2++;
        }
        col = 0;
        count += order;
    }
    return matrix;
}


//console.log(matrixExtractor());


//Calculo de determinante 2x2
function det2x2(mat){
    let aux1 = mat[0][0] * mat[1][1];
    let aux2 = -1 * (mat[1][0] * mat[0][1]);
    return aux1+aux2;
}
function transposta3x3(mat){
    let transposta = [];
    for(let k = 0; k < 3; k++){
        transposta[k] = [];
    }
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            transposta[j][i] = mat[i][j];

        }
    }
    return transposta;
}

// Calculo de inversa

// let matriz = [20, 9, 3, 5, 11, 2, 4, 9, 10]; // Matriz exemplo (3x3);
let matriz = [[20, 9, 3],[5, 11, 2],[4, 9, 10]];
// 20 9 3
// 5 11 2
// 4 9 10
let ordem = 3; // Ordem 3;
let determinante = 1465;
let cofatores = [];
let tempArray = [];
let aux = 0;

for(let line = 0; line < ordem; line++){
    for(let column = 0; column < ordem; column++){
        let tempLine = 0;
        let tempCol = 0;
        for(let i = 0; i < ordem; i++){
            if(i != line){
                tempArray[tempLine] = [];
                for(let j = 0; j < ordem; j++){
                    if(j != column){
                        tempArray[tempLine][tempCol] = matriz[i][j];
                        tempCol++; 
                    }
                }
                tempLine++;
                tempCol = 0;
            }
        }
        console.log(`tempArray vale: ${tempArray}, line vale: ${line}, column vale: ${column}`);
        cofatores[aux] = det2x2(tempArray);
        aux++;
        tempArray = [];
    }
}
console.log(cofatores);
cofatores = matrixExtractor(cofatores, 3);
console.log(cofatores);
cofatores = transposta3x3(cofatores);
console.log(cofatores);
for(let i = 0; i < ordem; i++){
    for(let j = 0; j < ordem; j++){
        cofatores[i][j] = cofatores[i][j] / determinante;
    }
}
console.log(`Matriz inversa é: ${cofatores}`);

//for(let aux = 0; aux < Math.pow(ordem, 2); aux++)



