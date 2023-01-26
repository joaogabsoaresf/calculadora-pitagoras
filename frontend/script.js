// Adiciona um event listener para o botão "calcular" que chama a função gerenciador quando clicado
var continuar = document.getElementById("calcular");
continuar.addEventListener("click", gerenciador)

// Adiciona um event listener para o botão "limpar" que chama a função limparDados quando clicado
var limpar = document.getElementById("limpar");
limpar.addEventListener("click", limparDados)

/**
 * A função gerenciador valida a entrada dos dados e envia uma solicitação à API para calcular o valor faltante.
 */
function gerenciador(){
    if (validaEntrada()){
        const data = enviarReq()
    }
}

/**
 * A função validaEntrada verifica se todos os campos estão preenchidos e, se sim, exibe uma mensagem de erro pedindo para preencher apenas dois campos.
 * return {boolean} - Retorna true se a entrada é válida e false se não é válida
 */
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

/**
 * A função limparDados limpa todos os campos de entrada.
 */
function limparDados(){
    var hipotenusa = document.getElementById("hipotenusa").value = null;
    var cateto1 = document.getElementById("cateto1").value = null;
    var cateto2 = document.getElementById("cateto2").value = null;
}

/**
 * A função enviarReq envia uma solicitação POST à API com os valores dos campos de entrada e atualiza o campo faltante com o resultado retornado pela API.
 */
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

/**
 * A função atualizarCampo atualiza o campo faltante.
 */
function atualizarCampo(data){
    console.log(data.side)
    console.log(data.result)
    document.getElementById(data.side).value = data.result
}

