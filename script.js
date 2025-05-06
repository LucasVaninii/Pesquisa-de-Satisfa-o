function pesquisaSatisfacao(){
   
    let nota // guarda as notas
    let conta = 1 // conta de 1 a 6
    let soma = 0

    while(conta <= 10){
        nota = Number(prompt(`Informe a nota ${conta}`))
        soma = soma + nota
        conta++ // conta = conta + 1
    }

    let media = soma / 10

    //mostra o resultado
    alert(`A média das notas é ${media.toFixed(1)}`)
      
}