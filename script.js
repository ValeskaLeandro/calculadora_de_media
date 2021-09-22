
function calcularNotas(){

    var nota1 = Number(document.getElementById("primeiroBimestre").value)
    var nota2 = Number(document.getElementById("segundoBimestre").value)
    var nota3 = Number(document.getElementById("terceiroBimestre").value)
    var nota4 = Number(document.getElementById("quartoBimestre").value)

    var media = ((nota1 + nota2 + nota3 + nota4)/4).toFixed(1)      

    if (nota1 < 0 || nota1 > 10 ||nota2 < 0 || nota2 > 10 || nota2 < 0 || nota3 > 10 || nota3 < 0 || nota4 > 10 ) {
        document.getElementById("resultado").innerText = `Algo está errado. Reveja os valores.`
    }else{

        if (media >= 7) {
            document.getElementById("resultado").innerText = `Parabéns, você foi aprovado com média ${media}. Continue assim!`
        }else {
            document.getElementById("resultado").innerText = `Infelizmente você foi reprovado com média ${media}. Continue tentando!`
        } 
    }

    

}
