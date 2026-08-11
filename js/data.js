/* ==================================================================
   data.js
   ------------------------------------------------------------------
   Fonte única de dados do portal dos Jogos da Juventude Católica (JJC).

   Este arquivo concentra TODAS as informações editáveis do site:
   datas, locais, categorias, programação, regulamento, premiação,
   equipes e atletas de cada modalidade, além de informações gerais
   do evento (alojamento, café da manhã etc.).

   Para adicionar uma NOVA EQUIPE, basta inserir um novo objeto dentro
   do array "equipes" da modalidade correspondente — nenhuma alteração
   de HTML/CSS é necessária.

   As páginas (futsal.html, volei.html, queimada.html, mesa.html,
   equipe.html) leem este arquivo dinamicamente via JavaScript
   (ver script.js). A partir de agora, a inscrição de equipes é feita
   diretamente pelo site (inscricao.html), não mais pelo Google Forms.

   Este arquivo também foi projetado para ser facilmente substituído
   futuramente por uma chamada de API/banco de dados: basta popular o
   objeto global JJC_DATA com a mesma estrutura vinda do backend.
   ================================================================== */

const JJC_DATA = {

  /* ================= FUTSAL ================= */
  futsal: {
    slug: "futsal",
    nome: "Futsal",
    slogan: "Velocidade, técnica e espírito de equipe dentro de quadra.",
    descricaoCurta:
      "Times das comunidades se enfrentam em partidas rápidas e eletrizantes de futsal.",

    imagem:
      "https://placehold.co/1200x800/0A3A40/EAF9FA?text=Futsal+JJC",

    imagemCard: "../img/futsal.jpg",

    // Inscrição agora é feita direto no site, pré-selecionando a modalidade
    linkInscricao: "../inscricao.html?modalidade=futsal",

    limiteAtletas: 8,

    sobre:
      "O Futsal é uma das modalidades mais tradicionais dos Jogos da Juventude Católica (JJC), reunindo equipes formadas pelas comunidades da Paróquia Nossa Senhora Aparecida. O JJC é um evento fechado, destinado exclusivamente à comunidade católica, e o Futsal reforça esse propósito por meio da convivência, da evangelização e do fortalecimento dos laços entre os jovens e adultos participantes. Cada equipe pode ter no máximo 8 atletas.",

    infoGerais: {
      data: "20 a 22 de novembro de 2026",
      horario: "A definir",
      local: "A definir"
    },

    categorias: [
      "Infantil Masculino",
      "Infantil Feminino",
      "Juvenil Masculino",
      "Juvenil Feminino",
      "Adulto Masculino",
      "Adulto Feminino"
    ],

    programacao: [
      { hora: "A definir", evento: "Abertura oficial e oração inicial" },
      { hora: "A definir", evento: "Início dos jogos da fase de grupos" },
      { hora: "A definir", evento: "Semifinais" },
      { hora: "A definir", evento: "Final e premiação" }
    ],

    regulamento:
      "Cada equipe poderá ter no máximo 8 atletas. As equipes devem representar oficialmente a comunidade/setor da Paróquia Nossa Senhora Aparecida, com participação exclusiva de membros da comunidade católica. O regulamento completo, com critérios de desempate, conduta esportiva e demais normas, será disponibilizado nesta seção em breve.",

    premiacao: {
      geral: [
        "1º Lugar - Troféu + Medalhas",
        "2º Lugar - Troféu + Medalhas"
      ],
      extras: []
    },

    faq: [
      {
        pergunta: "Quem pode se inscrever no Futsal?",
        resposta:
          "O JJC é um evento fechado, exclusivo para a comunidade católica da Paróquia Nossa Senhora Aparecida, respeitando as categorias e faixas etárias estabelecidas no regulamento."
      },
      {
        pergunta: "Quantos atletas por equipe?",
        resposta:
          "Cada equipe pode ter no máximo 8 atletas, entre titulares e reservas."
      },
      {
        pergunta: "Como faço a inscrição da minha equipe?",
        resposta:
          "Pelo botão 'Inscreva-se' no topo desta página, preenchendo o formulário de inscrição direto no site do JJC."
      }
    ],

    /* Equipes participantes — adicione novos objetos aqui, ou deixe que
       o formulário de inscrição do site preencha automaticamente */
    equipes: [
      {
        id: "futsal-leoes-de-juda",
        nome: "Leões de Judá",
        comunidade: "Comunidade São José",
        capitao: "A definir",
        vice: "A definir",
        tecnico: "A definir",
        foto: "https://placehold.co/800x800/0F4D53/EAF9FA?text=Le%C3%B5es+de+Jud%C3%A1",
        escudo: "https://placehold.co/300x300/053A3F/D4AF37?text=Escudo",
        infoAdicional: "Equipe em formação. Elenco e informações completas serão divulgados em breve.",
        atletas: [
          { nome: "Atleta 1", numero: "-", posicao: "-" },
          { nome: "Atleta 2", numero: "-", posicao: "-" }
        ]
      },
      {
        id: "futsal-guerreiros-da-fe",
        nome: "Guerreiros da Fé",
        comunidade: "Comunidade Santa Rita",
        capitao: "A definir",
        vice: "A definir",
        tecnico: "A definir",
        foto: "https://placehold.co/800x800/0F4D53/EAF9FA?text=Guerreiros+da+F%C3%A9",
        escudo: "https://placehold.co/300x300/053A3F/D4AF37?text=Escudo",
        infoAdicional: "Equipe em formação. Elenco e informações completas serão divulgados em breve.",
        atletas: [
          { nome: "Atleta 1", numero: "-", posicao: "-" },
          { nome: "Atleta 2", numero: "-", posicao: "-" }
        ]
      }
    ]
  },

  /* ================= VÔLEI ================= */
  volei: {
    slug: "volei",
    nome: "Vôlei",
    slogan: "Levante, ataque e defenda com fé e determinação.",
    descricaoCurta:
      "Vôlei feminino de quadra e masculino de areia, disputados com técnica e comunhão.",

    imagem:
      "https://placehold.co/1200x800/0A3A40/EAF9FA?text=V%C3%B4lei+JJC",

    imagemCard: "../img/volei.jpg",

    linkInscricao: "../inscricao.html?modalidade=volei",

    // O limite de atletas muda por categoria neste esporte — veja
    // "limitesPorCategoria" abaixo. O campo geral fica como referência.
    limiteAtletas: null,
    limitesPorCategoria: {
      "Feminino - Quadra": 8,
      "Masculino - Areia": 6
    },

    sobre:
      "O Vôlei nos Jogos da Juventude Católica (JJC) reúne equipes das comunidades da Paróquia Nossa Senhora Aparecida. A modalidade feminina será disputada em quadra (até 8 atletas por equipe) e a masculina em areia (até 6 atletas por equipe). Assim como as demais modalidades do JJC, a participação é exclusiva para a comunidade católica.",

    infoGerais: {
      data: "20 a 22 de novembro de 2026",
      horario: "A definir",
      local: "Jerris (local a confirmar)"
    },

    categorias: [
      "Feminino - Quadra",
      "Masculino - Areia"
    ],

    programacao: [
      { hora: "A definir", evento: "Abertura oficial e oração inicial" },
      { hora: "A definir", evento: "Fase de grupos" },
      { hora: "A definir", evento: "Semifinais" },
      { hora: "A definir", evento: "Final e premiação" }
    ],

    regulamento:
      "O vôlei feminino será disputado em quadra, com até 8 atletas por equipe. O vôlei masculino será disputado em areia, com até 6 atletas por equipe. Local previsto: Jerris (sujeito à confirmação da disponibilidade da quadra de areia). Participação exclusiva para a comunidade católica da Paróquia Nossa Senhora Aparecida.",

    premiacao: {
      geral: [
        "1º Lugar - Troféu + Medalhas",
        "2º Lugar - Troféu + Medalhas"
      ],
      extras: []
    },

    faq: [
      {
        pergunta: "Por que o feminino é em quadra e o masculino em areia?",
        resposta: "Definição da organização para esta edição do JJC, conforme decisão da reunião geral."
      },
      {
        pergunta: "Quantos atletas por equipe?",
        resposta: "Feminino (quadra): até 8 atletas. Masculino (areia): até 6 atletas."
      }
    ],

    equipes: [
      {
        id: "volei-aguias-da-graca",
        nome: "Águias da Graça",
        comunidade: "Comunidade São José",
        capitao: "A definir",
        vice: "A definir",
        tecnico: "A definir",
        foto: "https://placehold.co/800x800/0F4D53/EAF9FA?text=%C3%81guias+da+Gra%C3%A7a",
        escudo: "https://placehold.co/300x300/053A3F/D4AF37?text=Escudo",
        infoAdicional: "Equipe em formação. Elenco e informações completas serão divulgados em breve.",
        atletas: [
          { nome: "Atleta 1", numero: "-", posicao: "-" },
          { nome: "Atleta 2", numero: "-", posicao: "-" }
        ]
      }
    ]
  },

  /* ================= QUEIMADA ================= */
  queimada: {
    slug: "queimada",
    nome: "Queimada",
    slogan: "Agilidade, mira e muita diversão entre as comunidades.",
    descricaoCurta:
      "Equipes mistas se enfrentam em partidas animadas de queimada.",

    imagem:
      "https://placehold.co/1200x800/0A3A40/EAF9FA?text=Queimada+JJC",

    imagemCard: "../img/queimada.jpg",

    linkInscricao: "../inscricao.html?modalidade=queimada",

    limiteAtletas: 12,

    sobre:
      "A Queimada é uma das modalidades mais animadas dos Jogos da Juventude Católica (JJC), reunindo equipes mistas das comunidades da Paróquia Nossa Senhora Aparecida em partidas descontraídas, com no máximo 12 atletas por equipe. A divisão entre categorias Infantil e Adulto ainda está sendo confirmada pela organização.",

    infoGerais: {
      data: "20 a 22 de novembro de 2026",
      horario: "A definir",
      local: "A definir"
    },

    categorias: [
      "Misto"
    ],

    programacao: [
      { hora: "A definir", evento: "Abertura oficial e oração inicial" },
      { hora: "A definir", evento: "Fase de grupos" },
      { hora: "A definir", evento: "Semifinais" },
      { hora: "A definir", evento: "Final e premiação" }
    ],

    regulamento:
      "Cada equipe poderá ter no máximo 12 atletas, em formato misto. A possível divisão entre categorias Infantil e Adulto ainda está sendo confirmada pela organização e será atualizada aqui assim que definida. Participação exclusiva para a comunidade católica da Paróquia Nossa Senhora Aparecida.",

    premiacao: {
      geral: [
        "1º Lugar - Troféu + Medalhas",
        "2º Lugar - Troféu + Medalhas"
      ],
      extras: []
    },

    faq: [
      {
        pergunta: "As equipes precisam ser mistas?",
        resposta: "Sim, a categoria da Queimada nos JJC é Misto."
      },
      {
        pergunta: "Quantos atletas por equipe?",
        resposta: "No máximo 12 atletas por equipe."
      },
      {
        pergunta: "Vai ter categoria Infantil e Adulto separadas?",
        resposta: "Ainda está sendo confirmado pela organização junto ao responsável da modalidade. Assim que definido, atualizaremos esta página."
      }
    ],

    equipes: [
      {
        id: "queimada-comunidade-unida",
        nome: "Comunidade Unida",
        comunidade: "Comunidade São José",
        capitao: "A definir",
        vice: "A definir",
        tecnico: "A definir",
        foto: "https://placehold.co/800x800/0F4D53/EAF9FA?text=Comunidade+Unida",
        escudo: "https://placehold.co/300x300/053A3F/D4AF37?text=Escudo",
        infoAdicional: "Equipe em formação. Elenco e informações completas serão divulgados em breve.",
        atletas: [
          { nome: "Atleta 1", numero: "-", posicao: "-" },
          { nome: "Atleta 2", numero: "-", posicao: "-" }
        ]
      }
    ]
  },

  /* ================= JOGOS DE MESA ================= */
  mesa: {
    slug: "mesa",
    nome: "Jogos de Mesa",
    slogan: "Estratégia, concentração e diversão em cada partida.",
    descricaoCurta:
      "Tênis de Mesa e Pebolim reúnem os participantes em disputas rápidas, estratégicas e descontraídas.",

    imagem:
      "https://placehold.co/1200x800/0A3A40/EAF9FA?text=Jogos+de+Mesa+JJC",

    imagemCard: "../img/mesa.png",

    linkInscricao: "../inscricao.html?modalidade=mesa",

    limiteAtletas: null, // ainda não definido

    sobre:
      "Os Jogos de Mesa fazem parte dos Jogos da Juventude Católica (JJC), reunindo participantes em disputas de Tênis de Mesa e Pebolim. As categorias (Masculino, Feminino e Infantil) ainda estão sendo organizadas pela coordenação. A modalidade proporciona momentos de diversão, concentração, estratégia e convivência entre os jovens da comunidade católica da Paróquia Nossa Senhora Aparecida.",

    infoGerais: {
      data: "20 a 22 de novembro de 2026",
      horario: "A definir",
      local: "Paróquia Nossa Senhora Aparecida (local a divulgar)"
    },

    categorias: [
      "Tênis de Mesa",
      "Pebolim"
    ],

    programacao: [
      { hora: "A definir", evento: "Abertura oficial e oração inicial" },
      { hora: "A definir", evento: "Início das disputas de Tênis de Mesa" },
      { hora: "A definir", evento: "Início das disputas de Pebolim" },
      { hora: "A definir", evento: "Finais e premiação" }
    ],

    regulamento:
      "O regulamento oficial dos Jogos de Mesa, incluindo a divisão de categorias (Masculino, Feminino e Infantil), formato das disputas, critérios de desempate e demais normas, ainda está sendo definido pela coordenação e será publicado nesta seção em breve.",

    premiacao: {
      geral: [
        "1º Lugar - Troféu + Medalhas",
        "2º Lugar - Troféu + Medalhas"
      ],
      extras: []
    },

    faq: [
      {
        pergunta: "Quais modalidades fazem parte dos Jogos de Mesa?",
        resposta: "Tênis de Mesa e Pebolim."
      },
      {
        pergunta: "As categorias já estão definidas?",
        resposta: "A organização está trabalhando com a proposta de categorias Masculino, Feminino e Infantil, mas isso ainda será confirmado e atualizado aqui."
      },
      {
        pergunta: "Como faço minha inscrição?",
        resposta: "Pelo botão 'Inscreva-se' no topo desta página, preenchendo o formulário de inscrição direto no site do JJC."
      }
    ],

    equipes: [
      {
        id: "mesa-atletas-jjc",
        nome: "Participantes JJC",
        comunidade: "Paróquia Nossa Senhora Aparecida",
        capitao: "A definir",
        vice: "A definir",
        tecnico: "A definir",
        foto: "https://placehold.co/800x800/0F4D53/EAF9FA?text=Jogos+de+Mesa",
        escudo: "https://placehold.co/300x300/053A3F/D4AF37?text=JJC",
        infoAdicional: "Participantes e inscrições serão divulgados conforme o cadastro das disputas.",
        atletas: [
          { nome: "Participante 1", numero: "-", posicao: "-" },
          { nome: "Participante 2", numero: "-", posicao: "-" }
        ]
      }
    ]
  }
};


/* ==================================================================
   INFORMAÇÕES GERAIS DO EVENTO
   ------------------------------------------------------------------
   Dados que não pertencem a nenhuma modalidade específica (alojamento,
   café da manhã, participação/identidade do evento). Usado pela home
   (index.html) através de script.js.
   ================================================================== */
const JJC_INFO = {

  identidade: {
    titulo: "Um evento católico, para a comunidade católica",
    texto:
      "O JJC é um evento fechado e exclusivamente católico. Ele faz parte da nossa comunidade e tem como um dos principais objetivos a evangelização por meio do esporte, fortalecendo a fé, a união e a convivência entre os membros da Igreja. A participação é destinada à comunidade católica da Paróquia Nossa Senhora Aparecida, respeitando a proposta e a identidade do JJC."
  },

  alojamento: {
    titulo: "Alojamento e café da manhã",
    texto:
      "Para o pessoal que vier do interior, o JJC oferece alojamento e café da manhã simples nos dias do evento.",
    itens: [
      { label: "Alojamento", valor: "Escola Jean" },
      { label: "Café da manhã", valor: "Centro de Formação (ao lado da Escola Jean)" },
      { label: "Dias", valor: "Sábado e domingo pela manhã" },
      { label: "O que inclui", valor: "Leite, café, pão e alguns acompanhamentos" }
    ],
    observacao: "O café da manhã é destinado exclusivamente às pessoas que estiverem utilizando o alojamento."
  }

};


/* ==================================================================
   Torna os dados acessíveis para os demais scripts do site.
   Também permite utilizar este arquivo em projetos Node.js.
   ================================================================== */

if (typeof module !== "undefined" && module.exports) {
  module.exports = { JJC_DATA, JJC_INFO };
}
