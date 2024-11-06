
function pegarInformacoes(evento){
    console.log(evento)
    evento.preventDefault();
    
    
    var nome =document.getElementById("nome");
    var tecnologias = document.getElementById("tecnologias");
    var Biografia=document.getElementById("Biografia");
    var usuário = document.getElementById("usuário");
    var imagem=document.getElementById("imagem")


    validaCampor(nome);
    validaCampor(tecnologias);
    validaCampor(Biografia);
    validaCampor(usuário);
    validaCampor(imagem)

    var cometario =`
    <span> ${nome.value} <strong>${tecnologias.value}</strong></span>
    <span>${Biografia.value}</span> <span>${usuário.value}</span>
    <img src="${imagem.value}" alt="">
</div>`;

document.getElementById("comentarios").innerHTML += cometario;

nome.value = "";
tecnologia.value = "";
Biografia.value = "";
usuário.value = "";
imagem.value = "";
document.getElementById("enviar").disabled = true; 

   
}

function validaCampor(){
    if(Element.value === ""){
        Element.style.borderColor = "blue"
    }
}
function verificarDisabled(){
    var nome = document.getElementById("nome").value;
    var tecnologias = document.getElementById("tecnologias").value;
    var Biografia=document.getElementById("Biografia").Value;
    var usuário=document.getElementById("usuário").Value;
    var imagem=document.getElementById("imagem").Value;

    if(nome !== "" && tecnologias !== "" && Biografia !== "" && usuário !=="" && imagem !==""){
        document.getElementById("enviar").disabled = false
    }else{
        document.getElementById("enviar").disabled = true
    }
}

function capturarTecla(evento){
    console.log(evento)
    if(evento.key === "enter"){
        pegarInformacoes(evento)
    }

}
function deletarTarefa(id){
  
}

function render (){

}