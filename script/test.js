const inputs = [1, 2, 3, 4];
const order = 2;
let matrix = [];

function matrixExtractor(){
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


console.log(matrixExtractor());