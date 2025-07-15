import { matrixExtractor } from "./main.js";

export function det(order, m){
    if(order >= 1 && order <= 4 && m.length != 0){
        if(order === 1) return m[0][0];

        if(order === 2){
            const mainDiag = m[0][0] * m[1][1];
            const secDiag = -1*(m[0][1] * m[1][0]);

            return mainDiag+secDiag;
        }

        if(order >= 3){
            let detSum = 0;

            for(let col = 0; col < order; col++){
                let cofactorMatrix = [];
                let cfLine = 0;

                for(let mLine = 1; mLine < order; mLine++){
                    let cfRow = 0;
                    cofactorMatrix[cfLine] = [];

                    for(let mRow = 0; mRow < order; mRow++){
                        if(mRow !== col){
                            cofactorMatrix[cfLine][cfRow] = m[mLine][mRow];
                            cfRow++;
                        }
                    }
                    cfLine++;
                }
                detSum += Math.pow(-1, col) * m[0][col] * det(order - 1, cofactorMatrix);
            }
            return detSum;  
        }
    }   
}


export function transposta(m, order){
    let trans = [];
    for(let k = 0; k < order; k++){
        trans[k] = new Array(order).fill(0);
    }
    for(let i = 0; i < order; i++){
        for(let j = 0; j < order; j++){
            trans[j][i] = m[i][j];
        }
    }
    
    return trans;
}

export function inversa(m, order){
    const determinante = det(order, m);
    if(determinante === 0) return 0;
    let cofatores = [];
    let tempArray = [];
    let aux = 0;

    for(let line = 0; line < order; line++){
        for(let column = 0; column < order; column++){
            let tempLine = 0;
            let tempCol = 0;
            for(let i = 0; i < order; i++){
                if(i != line){
                    tempArray[tempLine] = new Array(order-1).fill(0);
                    for(let j = 0; j < order; j++){
                        if(j != column){
                            tempArray[tempLine][tempCol] = m[i][j];
                            tempCol++; 
                        }
                    }
                    tempLine++;
                    tempCol = 0;
                }
            }
            //console.log(`tempArray vale: ${tempArray}, line vale: ${m}, column vale: ${column}`);
            cofatores[aux] = Math.pow(-1, line+1+column+1) * det(order-1, tempArray);
            aux++;
            tempArray = [];
        }
    }
    console.log(cofatores);
    cofatores = matrixExtractor(cofatores, order);
    console.log(cofatores);
    cofatores = transposta(cofatores, order);
    console.log(cofatores);
    for(let i = 0; i < order; i++){
        for(let j = 0; j < order; j++){
            cofatores[i][j] = (cofatores[i][j] / determinante).toFixed(2);
        }
    }
    console.log(`Matriz inversa e: ${cofatores}`);
    return cofatores;
}

