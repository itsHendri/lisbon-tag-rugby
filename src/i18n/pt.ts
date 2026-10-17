import type { Content } from "./types";

export const pt: Content = {
  meta: {
    title: "Lisbon Tag Rugby — sem tackles, todo o jogo",
    description:
      "O Lisbon Tag Rugby é a casa lisboeta do rugby sem contacto. Três tags, zero dores, todas as quintas-feiras às 18:30, no Parque de Belém.",
  },
  nav: {
    wordmark: "Lisbon Tag",
    sub: "Rugby · Belém",
    instagram: "Instagram",
  },
  hero: {
    kicker: "Belém · Lisboa",
    titleA: "Sem tackles.",
    titleB: "Todo o jogo.",
    sub: "O Lisbon Tag Rugby é a casa lisboeta do rugby sem contacto — uma tripulação que se reúne todas as quintas-feiras, joga a sério e recebe quem aparece.",
    cta: "Descobre o vídeo completo",
    scroll: "Desliza",
  },
  about: {
    kicker: "Quem somos",
    title: "Uma tripulação, não uma liga",
    p1: "O Lisbon Tag Rugby é um clube comunitário que se reúne todas as quintas-feiras em Belém. Não somos uma competição nem uma escola — somos um grupo de pessoas que aparece, aquece, joga tag e fica pelo que vem a seguir.",
    p2: "Não há selecção, não há banco, não há experiência necessária. Jogadores de rugby, de futebol, do escritório, estudantes, curiosos — se sabes a correr, sabes jogar. Todos tocam na bola, todos são bem-vindos.",
    photos: [
      { src: "/media/session-1.jpg", alt: "Partida de rugby sob as luzes", caption: "Noite de sessão" },
      { src: "/media/session-2.jpg", alt: "Duas equipas alinhadas no relvado", caption: "As equipas" },
      { src: "/media/session-3.jpg", alt: "Jogador com a bola a subir o campo", caption: "A corrida" },
    ],
  },
  rules: {
    kicker: "O jogo",
    title: "O que é o tag rugby?",
    intro:
      "O tag é o rugby com o contacto desligado. A mesma bola, as mesmas linhas, os mesmos instintos — só falta o impacto. Aqui está tudo o que precisas de saber antes da tua primeira corrida.",
    cards: [
      {
        title: "É sem contacto",
        body: "Não se pode derrubar, empurrar nem bloquear. A única forma legal de parar o portador da bola é puxar uma das tags da sua faixa.",
      },
      {
        title: "Três tags acabam a jogada",
        body: "Após o primeiro e o segundo tag, o portador continua a correr. O terceiro tag termina a jogada e a bola passa para o outro lado.",
      },
      {
        title: "Coloca-a no chão para marcar",
        body: "Leva a bola além da linha de ensaio e põe-a no chão para um ensaio de cinco pontos. Soma mais dois com um pontapé de transformação bem colocado.",
      },
    ],
    facts: [
      "7 contra 7 — qualquer um joga em qualquer posição",
      "Dois tempos, 30 minutos cada",
      "Só passes para trás",
      "Sem mauls, sem rucks, sem scrums",
      "Duas tags na tua faixa",
    ],
    note: "Seguimos as leis standard do World Tag Rugby. Nunca jogaste um desporto de contacto? Perfeito — o tag foi feito para ti.",
  },
  where: {
    kicker: "Onde jogamos",
    title: "Belém, todas as quintas",
    when: "18:30 – 20:00",
    venue: "Parque de Belém, Lisboa",
    body: "Montamos o campo junto ao parque. Vem um pouco antes do início, junta-te ao aquecimento, e estás dentro — a sessão vai até às 20:00, e depois o grupo costuma seguir em direcção ao fado e ao rio.",
    rain: "A chuva não nos cancela. Se o campo estiver debaixo de água, vê no Instagram antes da deslocação.",
    directions: "Como chegar",
    mapEmbed: "https://www.google.com/maps?q=38.6964753,-9.2022543&z=17&output=embed",
    mapLink:
      "https://www.google.com/maps/place/Lisbon+Tag+Rugby/@38.6964753,-9.2048346,17z/data=!3m1!4b1!4m6!3m5!1s0xd1ecb001c1e2fcd:0x6047bc59476a61d9!8m2!3d38.6964753!4d-9.2022543!16s%2Fg%2F11xffpkvbr?entry=ttu",
  },
  gear: {
    kicker: "O que vestir",
    title: "Veste-te a sério",
    items: [
      {
        name: "Botas",
        body: "O campo é relva, por isso as botas são as tuas amigas — principalmente depois de uma semana de chuva. Seco e firme? Ténis está perfeitamente bem.",
        img: { src: "/media/session-5.jpg", alt: "Botas no relvado" },
      },
      {
        name: "A faixa de tags",
        body: "Duas tags vivem na tua cintura, presas à cordinha do calção. Não tens? Temos de spare — vem como és, nós tratamos do resto.",
        img: { src: "/media/session-4.jpg", alt: "Jogadores com a faixa de tags" },
      },
      {
        name: "O resto",
        body: "Caneleiras? Não. Capacete? Não. Calções, t-shirt e uma garrafa de água é a lista inteira.",
        img: { src: "/media/community-1.jpg", alt: "Apoiantes no estádio" },
      },
    ],
  },
  kit: {
    kicker: "A camisola",
    title: "Veste a cidade",
    body: "A primeira camisola do clube está à venda. Cores de Lisboa, blackletter no peito, macia o suficiente para 90 minutos de sprints. Tiragem limitada — quando acabar, acabou.",
    badge: "À venda",
    cta: "Garante a tua no Instagram",
    ctaHref: "https://www.instagram.com/lisbontagrugby/",
  },
  join: {
    kicker: "Como juntar",
    title: "É só aparecer. É isso.",
    steps: [
      {
        title: "Vem",
        body: "Quintas, 18:30, Parque de Belém. Sem inscrição, sem taxas, sem contratos.",
      },
      {
        title: "Aquece",
        body: "Junta-te ao grupo e mete o sangue a correr. Quem vem pela primeira vez ganha uma mini-aula de tag.",
      },
      {
        title: "Joga",
        body: "Faixa à cintura, tags à mostra. Estás dentro — é só isso.",
      },
    ],
    whatsappLabel: "Fala connosco",
    whatsappHref: "#",
    whatsappTbd: true,
    instagramLabel: "Instagram",
    instagramHref: "https://www.instagram.com/lisbontagrugby/",
    invite: "Sem experiência necessária. Trás um amigo que nunca jogou nada — é exactamente para ele que o tag foi feito.",
  },
  photos: {
    kicker: "A parede",
    title: "Prova das quintas",
    items: [
      { src: "/media/session-1.jpg", alt: "Partida sob as luzes", caption: "Sob as luzes" },
      { src: "/media/session-2.jpg", alt: "Alinhamentos no relvado", caption: "As equipas" },
      { src: "/media/session-3.jpg", alt: "Sprint pelo campo", caption: "A corrida" },
      { src: "/media/session-4.jpg", alt: "Tags a voar", caption: "A mil por hora" },
      { src: "/media/session-5.jpg", alt: "A frente do campo", caption: "Linha da frente" },
      { src: "/media/community-1.jpg", alt: "As pessoas à volta do jogo", caption: "As pessoas" },
    ],
  },
  footer: {
    tagline: "Sem tackles. Todo o jogo.",
    made: "Feito em Belém, com o coração.",
    credits:
      "Fotos e vídeo de placeholder via Wikimedia Commons (licença CC) — em breve substituídos por imagens das sessões do Lisbon Tag.",
  },
  popup: {
    title: "O vídeo completo",
    note: "Imagens de placeholder — o vídeo do clube vai ficar aqui.",
    close: "Fechar",
  },
};
