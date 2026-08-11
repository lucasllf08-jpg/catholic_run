/* ==================================================================
   inscricao.js
   ------------------------------------------------------------------
   Lógica do formulário de inscrição de equipes do JJC, com conexão
   direta ao Supabase (substitui o Google Forms).

   IMPORTANTE — sobre o nome da variável:
   O cliente do Supabase é guardado em "sb", e NÃO em "supabase".
   Isso é proposital: a biblioteca carregada pelo CDN já expõe um
   objeto global chamado "window.supabase". Se declarássemos
   `const supabase = ...` no escopo do topo do arquivo, o navegador
   entende que existem duas declarações do mesmo identificador
   "supabase" na página (a global da lib + a nossa), o que gera
   "Uncaught SyntaxError: Identifier 'supabase' has already been
   declared" e quebra a execução do script inteiro. Usar um nome
   diferente evita esse problema de vez.
   ================================================================== */

const SUPABASE_URL = "https://dayuhiwbiebhmvbathxv.supabase.co";
const SUPABASE_KEY = "sb_publishable_C6ZdRMaC7tOWErKwUVl9BQ_m-8cM_Qp";

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-inscricao");
  if (!form) return; // só roda mesmo na página de inscrição
  initFormInscricao(form);
});

function initFormInscricao(form) {
  const selectModalidade = document.getElementById("modalidade");
  const selectCategoria = document.getElementById("categoria");
  const atletasContainer = document.getElementById("atletas-container");
  const btnAdicionarAtleta = document.getElementById("btn-adicionar-atleta");
  const msgBox = document.getElementById("form-msg");
  const limiteInfo = document.getElementById("atleta-limite-info");

  let atletaCount = 0;

  // --- Popula o select de modalidade a partir de JJC_DATA (data.js) ---
  Object.values(JJC_DATA).forEach(mod => {
    const opt = document.createElement("option");
    opt.value = mod.slug;
    opt.textContent = mod.nome;
    selectModalidade.appendChild(opt);
  });

  // --- Pré-seleciona a modalidade vinda da URL (?modalidade=futsal) ---
  const params = new URLSearchParams(window.location.search);
  const modalidadeUrl = params.get("modalidade");
  if (modalidadeUrl && JJC_DATA[modalidadeUrl]) {
    selectModalidade.value = modalidadeUrl;
  }

  function limiteAtualDaCategoria() {
    const mod = JJC_DATA[selectModalidade.value];
    if (!mod) return null;
    const categoria = selectCategoria.value;
    if (mod.limitesPorCategoria && mod.limitesPorCategoria[categoria]) {
      return mod.limitesPorCategoria[categoria];
    }
    return mod.limiteAtletas || null;
  }

  function atualizarCategorias() {
    const mod = JJC_DATA[selectModalidade.value];
    selectCategoria.innerHTML = "";
    if (!mod) return;
    mod.categorias.forEach(cat => {
      const opt = document.createElement("option");
      opt.value = cat;
      opt.textContent = cat;
      selectCategoria.appendChild(opt);
    });
    atualizarLimiteInfo();
  }

  function atualizarLimiteInfo() {
    const limite = limiteAtualDaCategoria();
    limiteInfo.textContent = limite
      ? `Máximo de ${limite} atletas para esta categoria.`
      : "Limite de atletas ainda não definido pela organização.";
  }

  function adicionarAtleta() {
    const limite = limiteAtualDaCategoria();
    if (limite && atletaCount >= limite) {
      alert(`Essa categoria permite no máximo ${limite} atletas.`);
      return;
    }
    atletaCount++;
    const div = document.createElement("div");
    div.className = "jjc-atleta-card";
    div.innerHTML = `
      <button type="button" class="jjc-atleta-remover">Remover</button>
      <h4>Atleta ${atletaCount}</h4>
      <div class="jjc-form-grid">
        <div class="jjc-form-field">
          <label>Nome completo *</label>
          <input type="text" class="atleta-nome" required>
        </div>
        <div class="jjc-form-field">
          <label>CPF *</label>
          <input type="text" class="atleta-cpf" required placeholder="000.000.000-00">
        </div>
        <div class="jjc-form-field">
          <label>Data de nascimento *</label>
          <input type="date" class="atleta-nascimento" required>
        </div>
        <div class="jjc-form-field">
          <label>Número (opcional)</label>
          <input type="text" class="atleta-numero">
        </div>
        <div class="jjc-form-field">
          <label>Posição / observação</label>
          <input type="text" class="atleta-posicao">
        </div>
      </div>
    `;
    div.querySelector(".jjc-atleta-remover").addEventListener("click", () => {
      div.remove();
      atletaCount--;
      renumerarAtletas();
    });
    atletasContainer.appendChild(div);
  }

  function renumerarAtletas() {
    atletasContainer.querySelectorAll(".jjc-atleta-card h4")
      .forEach((h4, i) => h4.textContent = `Atleta ${i + 1}`);
  }

  selectModalidade.addEventListener("change", () => {
    atletasContainer.innerHTML = "";
    atletaCount = 0;
    atualizarCategorias();
    adicionarAtleta();
  });
  selectCategoria.addEventListener("change", atualizarLimiteInfo);
  btnAdicionarAtleta.addEventListener("click", adicionarAtleta);

  // --- Estado inicial ---
  atualizarCategorias();
  adicionarAtleta();

  // --- ENVIO DO FORMULÁRIO ---
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const cards = atletasContainer.querySelectorAll(".jjc-atleta-card");
    if (cards.length === 0) {
      mostrarMsg("error", "Adicione pelo menos um atleta antes de enviar.");
      return;
    }

    mostrarMsg("loading", "Enviando inscrição, aguarde...");

    const dadosEquipe = {
      modalidade_id: selectModalidade.value,
      categoria: selectCategoria.value,
      nome: document.getElementById("nome-equipe").value.trim(),
      comunidade: document.getElementById("comunidade").value.trim(),
      capitao_nome: document.getElementById("capitao-nome").value.trim(),
      capitao_cpf: document.getElementById("capitao-cpf").value.trim(),
      capitao_telefone: document.getElementById("capitao-telefone").value.trim(),
      vice_nome: document.getElementById("vice-nome").value.trim() || null,
      tecnico_nome: document.getElementById("tecnico-nome").value.trim() || null,
      status: "pendente"
    };

    try {
      const { data: equipeInserida, error: erroEquipe } = await sb
        .from("equipes")
        .insert(dadosEquipe)
        .select()
        .single();

      if (erroEquipe) throw erroEquipe;

      const atletas = Array.from(cards).map(card => ({
        equipe_id: equipeInserida.id,
        nome: card.querySelector(".atleta-nome").value.trim(),
        cpf: card.querySelector(".atleta-cpf").value.trim(),
        data_nascimento: card.querySelector(".atleta-nascimento").value || null,
        numero: card.querySelector(".atleta-numero").value.trim() || null,
        posicao: card.querySelector(".atleta-posicao").value.trim() || null
      }));

      const { error: erroAtletas } = await sb.from("atletas").insert(atletas);
      if (erroAtletas) throw erroAtletas;

      mostrarMsg(
        "success",
        "Inscrição enviada com sucesso! A organização vai revisar os dados antes da equipe aparecer no site. Qualquer dúvida, fala com a gente pelo Instagram @jjc.espigao."
      );

      form.reset();
      atletasContainer.innerHTML = "";
      atletaCount = 0;
      atualizarCategorias();
      adicionarAtleta();

    } catch (err) {
      console.error("Erro ao enviar inscrição:", err);
      mostrarMsg(
        "error",
        "Não foi possível enviar a inscrição. Confira os dados e tente novamente, ou fala com a gente pelo Instagram @jjc.espigao."
      );
    }
  });

  function mostrarMsg(tipo, texto) {
    msgBox.className = `jjc-form-msg show ${tipo}`;
    msgBox.textContent = texto;
    msgBox.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
