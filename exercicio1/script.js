function valorCoxinhas() {
    let querCoxinha = prompt(`Você deseja comer mais coxinhas?
    'S' para sim
    'N' para não`).toUpperCase()
    let conta = 0

    while(querCoxinha !== 'S' && querCoxinha !== 'N') {
        querCoxinha = prompt(`Dado inválido. Você deseja comer mais coxinhas?
        'S' para sim
        'N' para não`).toUpperCase() 
    }
    
    while(querCoxinha === 'S'){
        conta += 2.50
        querCoxinha = prompt(`Você deseja comer mais coxinhas?
    'S' para sim
    'N' para não`).toUpperCase()

        while(querCoxinha !== 'S' && querCoxinha !== 'N') {
            querCoxinha = prompt(`Dado inválido. Você deseja comer mais coxinhas?
            'S' para sim
            'N' para não`).toUpperCase() 
        }

    }
    console.log(`Valor total da conta $${conta.toFixed(2)}!`);
}

valorCoxinhas();