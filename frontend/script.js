var continuar = document.getElementById("calcular");
continuar.addEventListener("click", enviarReq)

var continuar = document.getElementById("limpar");
continuar.addEventListener("click", limparDados)


function gerenciador(){
    if (validaEntrada()){
        data = enviarReq()
        if (typeof data == object){
            atualizarCampo(data['side'], data['result'])
        }
    }
}

function validaEntrada(){
    var hipotenusa = document.getElementById("hipotenusa").value;
    var cateto1 = document.getElementById("cateto1").value;
    var cateto2 = document.getElementById("cateto2").value;

    if (hipotenusa.length > 0 && cateto1.length > 0 && cateto2.length > 0){
        
        return alert("Por favor preencha apenas dois campos para calcular o terceiro.")
    }

    else{
        return true
    }
}

function limparDados(){
    var hipotenusa = document.getElementById("hipotenusa").value = null;
    var cateto1 = document.getElementById("cateto1").value = null;
    var cateto2 = document.getElementById("cateto2").value = null;
}

function enviarReq(){
    if (validaEntrada()){
        fetch("http://127.0.0.1:5000/calcula", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ 
                hipotenusa: document.getElementById("hipotenusa").value, 
                cateto1: document.getElementById("cateto1").value,
                cateto1: document.getElementById("cateto2").value,        
                })
            })
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(error => console.error(error));
        
            return data
    }
    
}

function atualizarCampo(campo, valor){
    var cateto2 = document.getElementById(campo).value = valor
}

