const dates = [
  {
    title: "Jantar fora",
    description: "Escolham um restaurante e aproveitem uma noite especial juntos.",
    image: "assets/images/jantar-fora.jpeg"
  },
  {
    title: "Cafeteria",
    description: "Um café tranquilo com boa conversa e clima leve.",
    image: "assets/images/cafeteria.jpeg"
  },
  {
    title: "Praia",
    description: "Caminhar, relaxar e curtir o som do mar juntos.",
    image: "assets/images/praia.jpeg"
  },
  {
    title: "Sorveteria",
    description: "Um date simples e doce pra aproveitar juntos.",
    image: "assets/images/sorveteria.jpeg"
  },
  {
    title: "Shopping",
    description: "Passear, comer algo e curtir o ambiente juntos.",
    image: "assets/images/shopping.jpeg"
  },
  {
    title: "Cinema",
    description: "Assistir um filme com pipoca e boa companhia.",
    image: "assets/images/cinema.jpeg"
  },
  {
    title: "Passeio ao ar livre",
    description: "Curtir um parque ou caminhar juntos.",
    image: "assets/images/passeio-no-parque.jpeg"
  },
  {
    title: "Feirinha / comida de rua",
    description: "Experimentar comidas diferentes e aproveitar o clima.",
    image: "assets/images/feirinha.jpeg"
  },
  {
    title: "Em casa (livre)",
    description: "Um momento tranquilo sem regras, só curtindo juntos.",
    image: "assets/images/livre.jpeg"
  },
  {
    title: "Cinema em casa",
    description: "Filme, coberta e conforto no seu próprio espaço.",
    image: "assets/images/cinema-em-casa.jpeg"
  },
  {
    title: "Noite de jogos",
    description: "Jogos, risadas e um pouco de competição.",
    image: "assets/images/jogos.jpeg"
  },
  {
    title: "Proibido celular",
    description: "Foco total um no outro, sem distrações.",
    image: "assets/images/proibido-celular.jpeg"
  },
  {
    title: "Viagem",
    description: "Planejar ou fazer uma pequena viagem juntos.",
    image: "assets/images/viajar.jpeg"
  },
  {
    title: "Desenhar",
    description: "Criatividade e diversão juntos, mesmo sem saber desenhar.",
    image: "assets/images/desenhar.jpeg"
  },
  {
    title: "Balada",
    description: "Sair pra dançar e curtir a noite.",
    image: "assets/images/balada.jpeg"
  },
  {
    title: "Cozinhar juntos",
    description: "Preparar algo juntos e aproveitar o processo.",
    image: "assets/images/cozinhar-em-casa.jpeg"
  },
  {
    title: "Fazer sobremesa",
    description: "Criar algo doce e aproveitar depois.",
    image: "assets/images/fazer-sobremesa.jpeg"
  },
  {
    title: "Noite de perguntas / jogos",
    description: "Conversas profundas e conexão.",
    image: "assets/images/noite-de-perguntas.jpeg"
  },
  {
    title: "Maratonar série",
    description: "Escolher uma série e assistir juntos por horas.",
    image: "assets/images/maratonar-serie.jpeg"
  }
];

const img = document.getElementById("card-img");
const title = document.getElementById("card-title");
const text = document.getElementById("card-text");
const button = document.getElementById("btn-randomize");

function gerarDate() {
  const randomIndex = Math.floor(Math.random() * dates.length);
  const date = dates[randomIndex];

  img.src = date.image;
  title.textContent = date.title;
  text.textContent = date.description;
}

function enviarDate() {
  const tituloAtual = title.textContent;
  const descricaoAtual = text.textContent;

  const mensagem = "Date marcado! O sorteado desse mês foi: \n\n" +
    tituloAtual + "\n" +
    descricaoAtual;
  
  const mensagemCodificada = encodeURIComponent(mensagem);

  const numero = "5511999990000";
  const link = `https://wa.me/${numero}?text=${mensagemCodificada}`;

  window.open(link, "_blank");
}

const btnEnviar = document.getElementById("btn-submit");

btnEnviar.addEventListener("click", enviarDate);

button.addEventListener("click", gerarDate);

