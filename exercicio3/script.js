const paisesMaisPopulosos = ['China', 'Índia', 'EUA', 'Indonésia', 'Paquistão', 'Brasil']

function rankingArray(array) {
    console.log(array)
    for(let i = 0; i < paisesMaisPopulosos.length; i++){
        console.log(`${i+1} - ${paisesMaisPopulosos[i]}`);
    }
}

rankingArray(paisesMaisPopulosos)
