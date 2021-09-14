document
  .getElementById("botaoEnviar")
  .addEventListener("click", validaFormulario);

document.getElementById("enviarRecado").addEventListener("click", validaRecado);

function validaFormulario() {
  if (
    document.getElementById("nome").value != "" &&
    document.getElementById("email").value != "" &&
    document.getElementById("telefone").value != ""
  ) {
    alert("Prontinho! Você receberá as novidades por email");
  } else {
    alert("Por favor, preencha os campos nome, email e telefone!");
  }
}

function validaRecado() {
  if (document.getElementById("textarea").value != "") {
    alert("Agradecemos seu contato!");
  } else {
    alert("Por favor, preencha o campo de texto para deixar seu recado!");
  }
}
