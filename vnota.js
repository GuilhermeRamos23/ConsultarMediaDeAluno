function calcular () {
    var n1 = (Number(document.getElementById('nota1').value))
    var n2 = (Number(document.getElementById('nota2').value))
    var n3=(Number(document.getElementById('nota3').value))
    var n4=(Number(document.getElementById('nota4').value))
    var res = document.getElementById('res')
    var cal= (n1+n2+n3+n4)/4
     if (cal ==0 || cal <5 ){
        res.innerHTML = ` A nota foi <strong>${cal}</strong> e o Aluno foi  REPROVADO!` 
     } else if (cal ==5 || cal <=6){
        res.innerHTML = `A nota foi <strong>${cal}</strong> o aluno em recuperação`
     } else {
        res.innerHTML=`A nota foi <strong>${cal}</strong>Aluno aprovado!! `
     }
}

   