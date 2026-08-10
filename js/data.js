/* ==================================================================
   data.js
   ------------------------------------------------------------------
   Fonte única de dados do portal dos Jogos da Juventude Católica (JJC).

   Este arquivo concentra TODAS as informações editáveis do site:
   datas, locais, categorias, programação, regulamento, premiação,
   equipes e atletas de cada modalidade.

   Para adicionar uma NOVA EQUIPE, basta inserir um novo objeto dentro
   do array "equipes" da modalidade correspondente — nenhuma alteração
   de HTML/CSS é necessária.

   As páginas (futsal.html, volei.html, corrida.html, queimada.html,
   equipe.html) leem este arquivo dinamicamente via JavaScript
   (ver script.js).

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

    linkInscricao:
      "https://forms.gle/PLACEHOLDER-INSCRICAO-FUTSAL",

    sobre:
      "O Futsal é uma das modalidades mais tradicionais dos Jogos da Juventude Católica (JJC), reunindo equipes formadas pelas comunidades da Paróquia Nossa Senhora Aparecida. Além da disputa esportiva, o torneio é um espaço de convivência, evangelização e fortalecimento dos laços entre os jovens e adultos participantes, vivendo o esporte como ferramenta de união e fé.",

    infoGerais: {
      data: "A definir",
      horario: "A definir",
      local: "Ginásio Poliesportivo Municipal (endereço a divulgar)"
    },

    categorias: [
      "Infantil Masculino",
      "Juvenil Masculino",
      "Adulto Masculino",
      "Feminino 17+"
    ],

    programacao: [
      {
        hora: "A definir",
        evento: "Abertura oficial e oração inicial"
      },
      {
        hora: "A definir",
        evento: "Início dos jogos da fase de grupos"
      },
      {
        hora: "A definir",
        evento: "Semifinais"
      },
      {
        hora: "A definir",
        evento: "Final e premiação"
      }
    ],

    regulamento:
      "O regulamento oficial do Futsal, com regras de participação, formato de disputa, critérios de desempate, conduta esportiva e demais normas, será disponibilizado nesta seção em breve.",

    premiacao: {
      geral: [
        "1º Lugar - A definir",
        "2º Lugar - A definir",
        "3º Lugar - A definir"
      ],

      extras: [
        "Artilheiro do torneio - A definir",
        "Melhor goleiro - A definir"
      ]
    },

    faq: [
      {
        pergunta: "Quem pode se inscrever no Futsal?",
        resposta:
          "Jovens e adultos vinculados às comunidades da Paróquia Nossa Senhora Aparecida, respeitando as categorias e faixas etárias estabelecidas no regulamento."
      },
      {
        pergunta: "Cada comunidade pode ter mais de uma equipe?",
        resposta:
          "Sim, desde que respeitado o número máximo de inscritos por categoria, definido no regulamento oficial."
      },
      {
        pergunta: "Como faço a inscrição da minha equipe?",
        resposta:
          "Pelo botão 'Inscreva-se' no topo desta página, preenchendo o formulário oficial do JJC."
      }
    ],

    /* Equipes participantes — adicione novos objetos aqui */
    equipes: [
      {
        id: "futsal-leoes-de-juda",
        nome: "Leões de Judá",
        comunidade: "Comunidade São José",
        capitao: "A definir",
        vice: "A definir",
        tecnico: "A definir",

        foto:
          "https://placehold.co/800x800/0F4D53/EAF9FA?text=Le%C3%B5es+de+Jud%C3%A1",

        escudo:
          "https://placehold.co/300x300/053A3F/D4AF37?text=Escudo",

        infoAdicional:
          "Equipe em formação. Elenco e informações completas serão divulgados em breve.",

        atletas: [
          {
            nome: "Atleta 1",
            numero: "-",
            posicao: "-"
          },
          {
            nome: "Atleta 2",
            numero: "-",
            posicao: "-"
          }
        ]
      },

      {
        id: "futsal-guerreiros-da-fe",
        nome: "Guerreiros da Fé",
        comunidade: "Comunidade Santa Rita",
        capitao: "A definir",
        vice: "A definir",
        tecnico: "A definir",

        foto:
          "https://placehold.co/800x800/0F4D53/EAF9FA?text=Guerreiros+da+F%C3%A9",

        escudo:
          "https://placehold.co/300x300/053A3F/D4AF37?text=Escudo",

        infoAdicional:
          "Equipe em formação. Elenco e informações completas serão divulgados em breve.",

        atletas: [
          {
            nome: "Atleta 1",
            numero: "-",
            posicao: "-"
          },
          {
            nome: "Atleta 2",
            numero: "-",
            posicao: "-"
          }
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
      "Equipes masculinas e femininas disputam pontos com garra e comunhão.",

    imagem:
      "https://placehold.co/1200x800/0A3A40/EAF9FA?text=V%C3%B4lei+JJC",

    imagemCard: "../img/volei.jpg",

    linkInscricao:
      "https://forms.gle/PLACEHOLDER-INSCRICAO-VOLEI",

    sobre:
      "O Vôlei nos Jogos da Juventude Católica (JJC) reúne equipes masculinas e femininas das comunidades da Paróquia Nossa Senhora Aparecida em partidas disputadas com técnica e espírito esportivo. A modalidade reforça o trabalho em equipe e a alegria da convivência entre os jovens em torno da fé.",

    infoGerais: {
      data: "A definir",
      horario: "A definir",
      local: "Quadra Coberta da Paróquia (endereço a divulgar)"
    },

    categorias: [
      "Masculino",
      "Feminino"
    ],

    programacao: [
      {
        hora: "A definir",
        evento: "Abertura oficial e oração inicial"
      },
      {
        hora: "A definir",
        evento: "Fase de grupos"
      },
      {
        hora: "A definir",
        evento: "Semifinais"
      },
      {
        hora: "A definir",
        evento: "Final e premiação"
      }
    ],

    regulamento:
      "O regulamento oficial do Vôlei, com regras de participação, sistema de pontuação, formato de disputa e conduta esportiva, será disponibilizado nesta seção em breve.",

    premiacao: {
      geral: [
        "1º Lugar - A definir",
        "2º Lugar - A definir",
        "3º Lugar - A definir"
      ],

      extras: [
        "Melhor levantador(a) - A definir"
      ]
    },

    faq: [
      {
        pergunta: "Quantos atletas por equipe?",
        resposta:
          "O número de atletas titulares e reservas por equipe será definido no regulamento oficial."
      },
      {
        pergunta: "As partidas seguem as regras oficiais da CBV?",
        resposta:
          "Sim, com possíveis adaptações específicas descritas no regulamento do evento."
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

        foto:
          "https://placehold.co/800x800/0F4D53/EAF9FA?text=%C3%81guias+da+Gra%C3%A7a",

        escudo:
          "https://placehold.co/300x300/053A3F/D4AF37?text=Escudo",

        infoAdicional:
          "Equipe em formação. Elenco e informações completas serão divulgados em breve.",

        atletas: [
          {
            nome: "Atleta 1",
            numero: "-",
            posicao: "-"
          },
          {
            nome: "Atleta 2",
            numero: "-",
            posicao: "-"
          }
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

    linkInscricao:
      "https://forms.gle/PLACEHOLDER-INSCRICAO-QUEIMADA",

    sobre:
      "A Queimada é uma das modalidades mais animadas dos Jogos da Juventude Católica (JJC), reunindo equipes mistas das comunidades da Paróquia Nossa Senhora Aparecida em partidas descontraídas, que unem agilidade, estratégia e muita diversão entre os participantes de todas as idades.",

    infoGerais: {
      data: "A definir",
      horario: "A definir",
      local: "Quadra Comunitária (endereço a divulgar)"
    },

    categorias: [
      "Misto"
    ],

    programacao: [
      {
        hora: "A definir",
        evento: "Abertura oficial e oração inicial"
      },
      {
        hora: "A definir",
        evento: "Fase de grupos"
      },
      {
        hora: "A definir",
        evento: "Semifinais"
      },
      {
        hora: "A definir",
        evento: "Final e premiação"
      }
    ],

    regulamento:
      "O regulamento oficial da Queimada, com regras de participação, formato de disputa e conduta esportiva, será disponibilizado nesta seção em breve.",

    premiacao: {
      geral: [
        "1º Lugar - A definir",
        "2º Lugar - A definir",
        "3º Lugar - A definir"
      ],

      extras: []
    },

    faq: [
      {
        pergunta: "As equipes precisam ser mistas?",
        resposta:
          "Sim, a categoria da Queimada nos JJC é Misto, com composição definida no regulamento oficial."
      },
      {
        pergunta: "Quantos atletas por equipe?",
        resposta:
          "O número de atletas titulares e reservas por equipe será definido no regulamento oficial."
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

        foto:
          "https://placehold.co/800x800/0F4D53/EAF9FA?text=Comunidade+Unida",

        escudo:
          "https://placehold.co/300x300/053A3F/D4AF37?text=Escudo",

        infoAdicional:
          "Equipe em formação. Elenco e informações completas serão divulgados em breve.",

        atletas: [
          {
            nome: "Atleta 1",
            numero: "-",
            posicao: "-"
          },
          {
            nome: "Atleta 2",
            numero: "-",
            posicao: "-"
          }
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

    linkInscricao:
      "https://forms.gle/PLACEHOLDER-INSCRICAO-MESA",

    sobre:
      "Os Jogos de Mesa fazem parte dos Jogos da Juventude Católica (JJC), reunindo participantes em disputas de Tênis de Mesa e Pebolim. A modalidade proporciona momentos de diversão, concentração, estratégia e convivência entre os jovens e as comunidades da Paróquia Nossa Senhora Aparecida, valorizando o esporte como instrumento de união e fraternidade.",

    infoGerais: {
      data: "A definir",
      horario: "A definir",
      local: "Paróquia Nossa Senhora Aparecida (local a divulgar)"
    },

    categorias: [
      "Tênis de Mesa",
      "Pebolim"
    ],

    programacao: [
      {
        hora: "A definir",
        evento: "Abertura oficial e oração inicial"
      },
      {
        hora: "A definir",
        evento: "Início das disputas de Tênis de Mesa"
      },
      {
        hora: "A definir",
        evento: "Início das disputas de Pebolim"
      },
      {
        hora: "A definir",
        evento: "Finais e premiação"
      }
    ],

    regulamento:
      "O regulamento oficial dos Jogos de Mesa, com regras de participação, formato das disputas, critérios de desempate, conduta esportiva e demais normas, será disponibilizado nesta seção em breve.",

    premiacao: {
      geral: [
        "1º Lugar - A definir",
        "2º Lugar - A definir",
        "3º Lugar - A definir"
      ],

      extras: [
        "Destaque do Tênis de Mesa - A definir",
        "Destaque do Pebolim - A definir"
      ]
    },

    faq: [
      {
        pergunta: "Quais modalidades fazem parte dos Jogos de Mesa?",
        resposta:
          "Os Jogos de Mesa incluem Tênis de Mesa e Pebolim, conforme as categorias e regras definidas pela organização do JJC."
      },
      {
        pergunta: "Preciso ter experiência para participar?",
        resposta:
          "Não. A modalidade é aberta aos participantes que atendam aos critérios de inscrição definidos pela organização."
      },
      {
        pergunta: "Como faço minha inscrição?",
        resposta:
          "A inscrição pode ser realizada pelo botão 'Inscreva-se' disponível no topo desta página, utilizando o formulário oficial do JJC."
      },
      {
        pergunta: "As disputas serão individuais ou em duplas?",
        resposta:
          "O formato das disputas será definido no regulamento oficial da modalidade e divulgado pela organização."
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

        foto:
          "https://placehold.co/800x800/0F4D53/EAF9FA?text=Jogos+de+Mesa",

        escudo:
          "https://placehold.co/300x300/053A3F/D4AF37?text=JJC",

        infoAdicional:
          "Participantes e inscrições serão divulgados conforme o cadastro das disputas.",

        atletas: [
          {
            nome: "Participante 1",
            numero: "-",
            posicao: "-"
          },
          {
            nome: "Participante 2",
            numero: "-",
            posicao: "-"
          }
        ]
      }
    ]
  }
};


/* ==================================================================
   Torna os dados acessíveis para os demais scripts do site.
   Também permite utilizar este arquivo em projetos Node.js.
   ================================================================== */

if (typeof module !== "undefined" && module.exports) {
  module.exports = JJC_DATA;
}