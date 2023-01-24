var continuar = document.getElementById("calcular");
continuar.addEventListener("click", calcular)

var continuar = document.getElementById("limpar");
continuar.addEventListener("click", limparDados)


function validaEntrada(){
    var hipotenusa = document.getElementById("hipotenusa").value;
    var cateto1 = document.getElementById("cateto1").value;
    var cateto2 = document.getElementById("cateto2").value;

    if (hipotenusa.length > 0 && cateto1.length > 0 && cateto2.length > 0){
        alert("Por favor preencha apenas dois campos para calcular o terceiro.")
        return false
    }

    else{
        return true
    }
}

function limparDados(){
    var hipotenusa = document.getElementById("hipotenusa").value = 0;
    var cateto1 = document.getElementById("cateto1").value = 0;
    var cateto2 = document.getElementById("cateto2").value = 0;
}

function calcular(){
    if (validaEntrada()) {
        fetch("http://127.0.0.1:5000/calcula", {
        method: "POST",
        body: JSON.stringify({ 
            hipotenusa: document.getElementById("hipotenusa").value, 
            cateto1: document.getElementById("cateto1").value,
            cateto1: document.getElementById("cateto2").value,        
            })
        })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }
}

