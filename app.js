// Constantes para mensagens
let listaDeAmigos = [];

const MENSAGENS = {
  inicial: "Digite o nome dos seus amigos",
  erroNomeVazio: "Por favor, insira um nome válido!",
  erroAmigoExistente: "Este amigo já existe na lista!",
  erroPoucosAmigos: "Adicione pelo menos dois nomes para sortear.",
  amigoSorteado: "O amigo secreto é:",
};

function toggleControles(desabilitar) {
  document.getElementById("amigo").disabled = desabilitar;
  document.querySelector(".button-add").disabled = desabilitar;
  document.querySelector(".button-draw").disabled = desabilitar;
  document.querySelector(".button-restart").disabled = !desabilitar;
}

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  if (campo) {
    campo.innerHTML = texto;
    if ("speechSynthesis" in window) {
      let utterance = new SpeechSynthesisUtterance(texto);
      utterance.lang = "pt-BR";
      utterance.rate = 1.2;
      window.speechSynthesis.speak(utterance);
    } else {
      console.log("WEB Speech API não suportada neste navegador");
    }
  } else {
    console.error("Elemento não encontrado!");
  }
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h2", MENSAGENS.inicial);
}
exibirMensagemInicial();

function limparMensagemErro() {
  exibirTextoNaTela("p", "");
}

function capitalizarPrimeiraLetra(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function adicionarAmigo() {
  let nome = document.getElementById("amigo").value.trim();
  if (nome === "") {
    exibirTextoNaTela("p", MENSAGENS.erroNomeVazio);
    return;
  }
  // Limpa a mensagem de erro se um nome válido for inserido
  limparMensagemErro();
  nome = capitalizarPrimeiraLetra(nome);
  if (listaDeAmigos.includes(nome)) {
    exibirTextoNaTela("p", MENSAGENS.erroAmigoExistente);
    limparCampoInput();
    return;
  }
  listaDeAmigos.push(nome);
  atualizarListaDom();
  limparCampoInput();
}

function atualizarListaDom() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  listaDeAmigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (listaDeAmigos.length < 2) {
    exibirTextoNaTela("p", MENSAGENS.erroPoucosAmigos);
    return;
  }
  const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
  limparMensagemErro();
  exibirTextoNaTela(
    "h2",
    `${MENSAGENS.amigoSorteado} ${listaDeAmigos[indiceSorteado]}`
  );
  toggleControles(true);
}

function reiniciarJogo() {
  listaDeAmigos = [];
  atualizarListaDom();

  limparCampoInput();
  exibirTextoNaTela("h3", "");
  exibirTextoNaTela("p", "");

  toggleControles(false);
  exibirMensagemInicial();
}

function limparCampoInput() {
  document.getElementById("amigo").value = "";
}
