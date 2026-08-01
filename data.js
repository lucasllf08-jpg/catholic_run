/* ==================================================================
   data.js
   ------------------------------------------------------------------
   Fonte única de dados do portal dos Jogos da Juventude Católica (JJC).

   Este arquivo concentra TODAS as informações editáveis do site:
   datas, locais, categorias, programação, regulamento, premiação,
   equipes e atletas de cada modalidade.

   Para adicionar uma NOVA EQUIPE, basta inserir um novo objeto dentro
   do array "equipes" da modalidade correspondente — nenhuma alteração
   de HTML/CSS é necessária. As páginas (futsal.html, volei.html,
   corrida.html, queimada.html, equipe.html) leem este arquivo
   dinamicamente via JavaScript (ver script.js).

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
    descricaoCurta: "Times das comunidades se enfrentam em partidas rápidas e eletrizantes de futsal.",
    imagem: "https://placehold.co/1200x800/0A3A40/EAF9FA?text=Futsal+JJC",
    imagemCard: "img/futsal.jpg",
    linkInscricao: "https://forms.gle/PLACEHOLDER-INSCRICAO-FUTSAL",

    sobre: "O Futsal é uma das modalidades mais tradicionais dos Jogos da Juventude Católica (JJC), reunindo equipes formadas pelas comunidades da Paróquia Nossa Senhora Aparecida. Além da disputa esportiva, o torneio é um espaço de convivência, evangelização e fortalecimento dos laços entre os jovens e adultos participantes, vivendo o esporte como ferramenta de união e fé.",

    infoGerais: {
      data: "A definir",
      horario: "A definir",
      local: "Ginásio Poliesportivo Municipal (endereço a divulgar)",
      publico: "Jovens e adultos das comunidades da Paróquia Nossa Senhora Aparecida"
    },

    categorias: [
      "Infantil Masculino",
      "Juvenil Masculino",
      "Adulto Masculino",
      "Feminino 17+"
    ],

    programacao: [
      { hora: "A definir", evento: "Abertura oficial e oração inicial" },
      { hora: "A definir", evento: "Início dos jogos da fase de grupos" },
      { hora: "A definir", evento: "Semifinais" },
      { hora: "A definir", evento: "Final e premiação" }
    ],

    regulamento: "O regulamento oficial do Futsal, com regras de participação, formato de disputa, critérios de desempate, conduta esportiva e demais normas, será disponibilizado nesta seção em breve.",

    premiacao: {
      geral: ["1º Lugar - A definir", "2º Lugar - A definir", "3º Lugar - A definir"],
      extras: ["Artilheiro do torneio - A definir", "Melhor goleiro - A definir"]
    },

    faq: [
      { pergunta: "Quem pode se inscrever no Futsal?", resposta: "Jovens e adultos vinculados às comunidades da Paróquia Nossa Senhora Aparecida, respeitando as categorias e faixas etárias estabelecidas no regulamento." },
      { pergunta: "Cada comunidade pode ter mais de uma equipe?", resposta: "Sim, desde que respeitado o número máximo de inscritos por categoria, definido no regulamento oficial." },
      { pergunta: "Como faço a inscrição da minha equipe?", resposta: "Pelo botão 'Inscreva-se' no topo desta página, preenchendo o formulário oficial do JJC." }
    ],

    /* Equipes participantes — adicione novos objetos aqui livremente */
    equipes: [
      {
        id: "futsal-leoes-de-juda",
        nome: "Leões de Judá",
        comunidade: "Comunidade São José",
        capitao: "A definir",
        vice: "A definir",
        tecnico: "A definir",
        foto: "https://placehold.co/800x800/0F4D53/EAF9FA?text=Leo%CC%83es+de+Juda%CC%81",
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
        foto: "https://placehold.co/800x800/0F4D53/EAF9FA?text=Guerreiros+da+Fe%CC%81",
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
    descricaoCurta: "Equipes masculinas e femininas disputam pontos com garra e comunhão.",
    imagem: "https://placehold.co/1200x800/0A3A40/EAF9FA?text=Vo%CC%82lei+JJC",
    imagemCard: "img/volei.jpg",
    linkInscricao: "https://forms.gle/PLACEHOLDER-INSCRICAO-VOLEI",

    sobre: "O Vôlei nos Jogos da Juventude Católica (JJC) reúne equipes masculinas e femininas das comunidades da Paróquia Nossa Senhora Aparecida em partidas disputadas com técnica e espírito esportivo. A modalidade reforça o trabalho em equipe e a alegria da convivência entre os jovens em torno da fé.",

    infoGerais: {
      data: "A definir",
      horario: "A definir",
      local: "Quadra Coberta da Paróquia (endereço a divulgar)",
      publico: "Jovens e adultos das comunidades da Paróquia Nossa Senhora Aparecida"
    },

    categorias: [
      "Masculino",
      "Feminino"
    ],

    programacao: [
      { hora: "A definir", evento: "Abertura oficial e oração inicial" },
      { hora: "A definir", evento: "Fase de grupos" },
      { hora: "A definir", evento: "Semifinais" },
      { hora: "A definir", evento: "Final e premiação" }
    ],

    regulamento: "O regulamento oficial do Vôlei, com regras de participação, sistema de pontuação, formato de disputa e conduta esportiva, será disponibilizado nesta seção em breve.",

    premiacao: {
      geral: ["1º Lugar - A definir", "2º Lugar - A definir", "3º Lugar - A definir"],
      extras: ["Melhor levantador(a) - A definir"]
    },

    faq: [
      { pergunta: "Quantos atletas por equipe?", resposta: "O número de atletas titulares e reservas por equipe será definido no regulamento oficial." },
      { pergunta: "As partidas seguem as regras oficiais da CBV?", resposta: "Sim, com possíveis adaptações específicas descritas no regulamento do evento." }
    ],

    equipes: [
      {
        id: "volei-aguias-da-graca",
        nome: "Águias da Graça",
        comunidade: "Comunidade São José",
        capitao: "A definir",
        vice: "A definir",
        tecnico: "A definir",
        foto: "https://placehold.co/800x800/0F4D53/EAF9FA?text=A%CC%81guias+da+Grac%CC%A7a",
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
    descricaoCurta: "Equipes mistas se enfrentam em partidas animadas de queimada.",
    imagem: "https://placehold.co/1200x800/0A3A40/EAF9FA?text=Queimada+JJC",
    imagemCard: "img/queimada.jpg",
    linkInscricao: "https://forms.gle/PLACEHOLDER-INSCRICAO-QUEIMADA",

    sobre: "A Queimada é uma das modalidades mais animadas dos Jogos da Juventude Católica (JJC), reunindo equipes mistas das comunidades da Paróquia Nossa Senhora Aparecida em partidas descontraídas, que unem agilidade, estratégia e muita diversão entre os participantes de todas as idades.",

    infoGerais: {
      data: "A definir",
      horario: "A definir",
      local: "Quadra Comunitária (endereço a divulgar)",
      publico: "Jovens e adultos das comunidades da Paróquia Nossa Senhora Aparecida"
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

    regulamento: "O regulamento oficial da Queimada, com regras de participação, formato de disputa e conduta esportiva, será disponibilizado nesta seção em breve.",

    premiacao: {
      geral: ["1º Lugar - A definir", "2º Lugar - A definir", "3º Lugar - A definir"],
      extras: []
    },

    faq: [
      { pergunta: "As equipes precisam ser mistas?", resposta: "Sim, a categoria da Queimada nos JJC é Misto, com composição definida no regulamento oficial." },
      { pergunta: "Quantos atletas por equipe?", resposta: "O número de atletas titulares e reservas por equipe será definido no regulamento oficial." }
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
  }

};

/* Torna os dados acessíveis para os demais scripts do site */
if (typeof module !== "undefined") {
  module.exports = JJC_DATA;
}
