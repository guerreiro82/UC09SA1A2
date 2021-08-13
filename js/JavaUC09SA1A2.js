function ValidaFormulario() {
   // alert("Formulário Validado");


    var vResultado = false;
    var vName = document.getElementById("name").value;
    if(vName.length>=10 && vName.length<=80){
        vResultado = true;
    } else{
        vResultado = false;
    }

    var ResultadoFinal = document.getElementById("resultadoFinal");
    ResultadoFinal.innerHTML = vResultado;

}
function GerarJson() {
    alert("Gera Json");
}