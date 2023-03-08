function tabuaDeMultiplicacao(){
    let numero = Number(prompt(`Digite um número para ver sua tabuada do 1 ao 10.`))
    for(i = 1; i <= 10 ; i++) {
        resultado = numero * i
        console.log(`${numero} x ${i} = ${resultado}`)
    }
}

tabuaDeMultiplicacao()


// //Outra maneira
// let numRecebido = Number(prompt('A partir de qual número quer iniciar sua tabuada?'))

// for (let j = numRecebido; j <= 100; j++) {
//     console.log(`Tabuada de ${j}:`)

//     for (let i = 1; i <= 10; i++) {
//         console.log(`${j} x ${i} = ${j*i}`)
//     }
// }
