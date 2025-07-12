export function det(order, m){
    if(order >= 1 && order <= 4 && m.length != 0){
        if(order === 1) return m[0];

        if(order === 2){
            const mainDiag = m[0][0] * m[1][1];
            const secDiag = -1*(m[0][1] * m[1][0]);

            return mainDiag+secDiag;
        }

        if(order === 3){
            
        }
    } 

    
}

