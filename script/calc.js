import { matrixExtractor } from "./main.js";

export function det(order, m){
    if(order >= 1 && order <= 4 && m.length != 0){
        if(order === 1) return m[0][0];

        if(order === 2){
            const mainDiag = m[0][0] * m[1][1];
            const secDiag = -1*(m[0][1] * m[1][0]);

            return mainDiag+secDiag;
        }

        if(order === 3){
            let cofactorMatrix = [];
            for(let i = 0; i < order-1; i++){
                cofactorMatrix[i] = new Array(order-1).fill(0);
            }
            let detSum = 0;
            let cfLine = 0;
            let cfRow = 0;
            let row = 1;

            for(let i = 0; i < order; i++){
                for(let mLine = 0; mLine < order; mLine++){
                    for(let mRow = 0; mRow < order; mRow++){
                        if(mLine != i && mRow != i){
                            cofactorMatrix[cfLine][cfRow] = m[mLine][mRow];
                            cfRow++;
                        }
                    }
                    cfRow = 0;
                    if(mLine != i) cfLine++;
                }
                detSum += Math.pow(-1, 1+row)* m[0][row-1] * det(order-1, cofactorMatrix);
                row++;
                cfLine = 0;
            }
            return detSum;
        }

        if(order === 4){
          let cofactorMatrix = [];
            for(let i = 0; i < order-1; i++){
                cofactorMatrix[i] = new Array(order-1).fill(0);
            }
            let detSum = 0;
            let cfLine = 0;
            let cfRow = 0;
            let row = 1;

            for(let i = 0; i < order; i++){
                for(let mLine = 0; mLine < order; mLine++){
                    for(let mRow = 0; mRow < order; mRow++){
                        if(mLine != i && mRow != i){
                            cofactorMatrix[cfLine][cfRow] = m[mLine][mRow];
                            cfRow++;
                        }
                    }
                    cfRow = 0;
                    if(mLine != i) cfLine++;
                }
                detSum += Math.pow(-1, 1+row)* m[0][row-1] * det(order-1, cofactorMatrix);
                row++;
                cfLine = 0;
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

