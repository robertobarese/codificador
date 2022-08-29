const entradaTexto = document.querySelector("#entrada-texto")
const codigo = document.querySelector("#saida-codigo")

function codificarTexto() {
    let mensagem = entradaTexto.value;
    let mensagemCodificada = window.btoa(mensagem);
    codigo.value = mensagemCodificada;
}

function decodificar() {
    let decodificarMensagem = entradaTexto.value;
    let textoDecodificado = window.atob(decodificarMensagem);
    codigo.value = textoDecodificado;

}

function copiarTexto() {
    const mensagemCriptografada = document.querySelector("#saida-codigo");
    mensagemCriptografada.select();
    navigator.clipboard.writeText(mensagemCriptografada.value);
    mensagemCriptografada.value = "";
}
