var continuar = document.getElementById("calcular");
continuar.addEventListener("click", gerenciador)

var continuar = document.getElementById("limpar");
continuar.addEventListener("click", limparDados)


function gerenciador(){
    if (validaEntrada()){
        const data = enviarReq()
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
        fetch("https://calculadora-pitagoras-backend.herokuapp.com/calcula", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ 
                hipotenusa: parseFloat(document.getElementById("hipotenusa").value), 
                cateto1: parseFloat(document.getElementById("cateto1").value),
                cateto2: parseFloat(document.getElementById("cateto2").value),        
                })
            })
            .then(response => response.json())
            .then(data => 
                {console.log(data);
                atualizarCampo(data);
            })
            .catch(error => console.error(error));
    }
    
}

function atualizarCampo(data){
    console.log(data.side)
    console.log(data.result)
    document.getElementById(data.side).value = data.result
}

