/* ==================================================================
   script.js
   ------------------------------------------------------------------
   Script único do portal JJC. Organizado em módulos independentes:

   1. NAV        -> menu fixo, estado "scrolled" e menu mobile
   2. CONTADOR    -> contagem regressiva reutilizável (várias páginas)
   3. MODALIDADES -> renderiza cards da home a partir de JJC_DATA
   4. MODALIDADE  -> preenche a página de cada modalidade a partir de
                     JJC_DATA (info geral, categorias, programação,
                     premiação, equipes, FAQ)
   5. EQUIPE      -> monta a página de uma equipe a partir da URL
                     (?modalidade=futsal&id=futsal-leoes-de-juda)

   Cada módulo só executa se encontrar os elementos correspondentes
   na página atual, então este mesmo arquivo pode ser incluído em
   todas as páginas do site sem gerar erros.
   ================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initContadores();
  renderModalidadesHome();
  renderPaginaModalidade();
  renderPaginaEquipe();
});


/* ==================================================================
   1. NAVEGAÇÃO
   ================================================================== */
function initNav() {
  const nav = document.getElementById("siteNav");
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  if (!nav) return;

  // Muda a aparência do menu ao rolar a página
  const onScroll = () => {
    if (window.scrollY > 40) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", onScroll);
  onScroll();

  // Menu mobile (hambúrguer)
  // Menu mobile (hambúrguer)
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
      toggle.classList.toggle("open");
    });

    // Fecha o menu ao clicar em um link (mobile)
    links.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.classList.remove("open");
      });
    });

    // Fecha o menu ao tocar/clicar fora dele
    document.addEventListener("click", (e) => {
      const menuAberto = links.classList.contains("open");
      const cliqueForaDoMenu = !links.contains(e.target) && !toggle.contains(e.target);
      if (menuAberto && cliqueForaDoMenu) {
        links.classList.remove("open");
        toggle.classList.remove("open");
      }
    });

    // Fecha o menu ao pressionar a tecla Esc
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && links.classList.contains("open")) {
        links.classList.remove("open");
        toggle.classList.remove("open");
      }
    });
  }

  // Marca o link ativo com base na página atual
  const paginaAtual = window.location.pathname.split("/").pop() || "index.html";
  nav.querySelectorAll(".jjc-nav-links a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === paginaAtual) a.classList.add("active");
  });
}


/* ==================================================================
   2. CONTADOR REGRESSIVO (reutilizável)
   ------------------------------------------------------------------
   Qualquer elemento com [data-contador][data-alvo="ISO_DATE"] vira
   um contador regressivo automaticamente. Suporta múltiplos
   contadores na mesma página (ex: futuramente mais de um evento).
   ================================================================== */
function initContadores() {
  const contadores = document.querySelectorAll("[data-contador]");

  contadores.forEach(el => {
    const alvoStr = el.getAttribute("data-alvo");
    if (!alvoStr) return;

    const alvo = new Date(alvoStr).getTime();
    const elDias = el.querySelector("[data-cd-dias]");
    const elHoras = el.querySelector("[data-cd-horas]");
    const elMin = el.querySelector("[data-cd-min]");
    const elSeg = el.querySelector("[data-cd-seg]");

    function atualizar() {
      const agora = new Date().getTime();
      const diferenca = alvo - agora;

      if (diferenca <= 0) {
        if (elDias) elDias.textContent = "00";
        if (elHoras) elHoras.textContent = "00";
        if (elMin) elMin.textContent = "00";
        if (elSeg) elSeg.textContent = "00";
        clearInterval(intervalo);
        return;
      }

      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

      if (elDias) elDias.textContent = String(dias).padStart(2, "0");
      if (elHoras) elHoras.textContent = String(horas).padStart(2, "0");
      if (elMin) elMin.textContent = String(minutos).padStart(2, "0");
      if (elSeg) elSeg.textContent = String(segundos).padStart(2, "0");
    }

    atualizar();
    const intervalo = setInterval(atualizar, 1000);
  });
}


/* ==================================================================
   3. CARDS DE MODALIDADES NA HOME
   ------------------------------------------------------------------
   Procura o container [data-modalidades] em index.html e gera um
   card para cada modalidade cadastrada em JJC_DATA. Para adicionar
   uma nova modalidade no futuro, basta incluí-la em data.js.
   ================================================================== */
function renderModalidadesHome() {
  const container = document.querySelector("[data-modalidades]");
  if (!container || typeof JJC_DATA === "undefined") return;

  const html = Object.values(JJC_DATA).map(mod => `
    <article class="jjc-modalidade-card">
      <div class="jjc-modalidade-img" style="background-image:url('${mod.imagemCard}')"></div>
      <div class="jjc-modalidade-body">
        <h3>${mod.nome}</h3>
        <p>${mod.descricaoCurta}</p>
        <a href="${mod.slug}.html" class="cc-btn cc-btn-primary">Saiba Mais</a>
      </div>
    </article>
  `).join("");

  container.innerHTML = html;
}


/* ==================================================================
   4. PÁGINA DE MODALIDADE (futsal.html, volei.html, corrida.html,
      queimada.html)
   ------------------------------------------------------------------
   Cada página de modalidade possui um elemento raiz
   <body data-modalidade="futsal"> — a partir desse atributo o script
   busca os dados correspondentes em JJC_DATA e preenche todas as
   seções dinamicamente. Isso mantém HTML, CSS e dados desacoplados.
   ================================================================== */
function renderPaginaModalidade() {
  const slug = document.body.getAttribute("data-modalidade");
  if (!slug || typeof JJC_DATA === "undefined") return;

  const mod = JJC_DATA[slug];
  if (!mod) return;

  // --- HERO ---
  setText("[data-mod-nome]", mod.nome);
  setText("[data-mod-descricao]", mod.descricaoCurta);
  setAttr("[data-mod-imagem]", "style", `background-image:url('${mod.imagem}')`);
  setAttr("[data-mod-inscricao]", "href", mod.linkInscricao);
  if (mod.versiculo) setText("[data-mod-versiculo]", mod.versiculo);

  // --- SOBRE ---
  setText("[data-mod-sobre]", mod.sobre);

  // --- INFORMAÇÕES GERAIS ---
  setText("[data-mod-data]", mod.infoGerais.data);
  setText("[data-mod-horario]", mod.infoGerais.horario);
  setText("[data-mod-local]", mod.infoGerais.local);
  setText("[data-mod-publico]", mod.infoGerais.publico);
  setText("[data-mod-categorias-resumo]", mod.categorias.join(" · "));

  // --- CATEGORIAS (lista detalhada) ---
  const catContainer = document.querySelector("[data-mod-categorias-lista]");
  if (catContainer) {
    catContainer.innerHTML = mod.categorias.map(c => `<li>${c}</li>`).join("");
  }

  // --- PROGRAMAÇÃO ---
  const progContainer = document.querySelector("[data-mod-programacao]");
  if (progContainer) {
    progContainer.innerHTML = mod.programacao.map(item => `
      <li><span class="cc-time">${item.hora}</span> ${item.evento}</li>
    `).join("");
  }

  // --- REGULAMENTO ---
  setText("[data-mod-regulamento]", mod.regulamento);

  // --- PREMIAÇÃO ---
  const premGeral = document.querySelector("[data-mod-premiacao-geral]");
  if (premGeral) {
    premGeral.innerHTML = mod.premiacao.geral.map(p => `<li>${p}</li>`).join("");
  }
  const premExtras = document.querySelector("[data-mod-premiacao-extras]");
  if (premExtras) {
    if (mod.premiacao.extras && mod.premiacao.extras.length) {
      premExtras.innerHTML = mod.premiacao.extras.map(p => `<li>${p}</li>`).join("");
      premExtras.closest("[data-mod-premiacao-extras-wrap]")?.removeAttribute("hidden");
    }
  }

  // --- EQUIPES PARTICIPANTES ---
  const equipesContainer = document.querySelector("[data-mod-equipes]");
  if (equipesContainer) {
    if (mod.equipes && mod.equipes.length) {
      equipesContainer.innerHTML = mod.equipes.map(eq => `
        <article class="jjc-team-card">
          <h3>${eq.nome}</h3>
          <p class="jjc-team-comunidade">${eq.comunidade}</p>
          <ul class="jjc-team-meta">
            <li><strong>Capitão:</strong> ${eq.capitao}</li>
            <li><strong>Atletas:</strong> ${eq.atletas.length}</li>
          </ul>
          <a href="equipe.html?modalidade=${mod.slug}&id=${eq.id}" class="cc-btn cc-btn-ghost">Ver elenco</a>
        </article>
      `).join("");
    } else {
      equipesContainer.innerHTML = `<p class="cc-note">Nenhuma equipe cadastrada ainda. Em breve, novas equipes aparecerão automaticamente aqui.</p>`;
    }
  }

  // --- FAQ ---
  const faqContainer = document.querySelector("[data-mod-faq]");
  if (faqContainer) {
    faqContainer.innerHTML = mod.faq.map(item => `
      <details>
        <summary>${item.pergunta}</summary>
        <p>${item.resposta}</p>
      </details>
    `).join("");
  }

  // --- TÍTULO DA PÁGINA ---
  document.title = `${mod.nome} · Jogos da Juventude Católica (JJC)`;
}


/* ==================================================================
   5. PÁGINA DA EQUIPE (equipe.html)
   ------------------------------------------------------------------
   Lê os parâmetros "modalidade" e "id" da URL, localiza a equipe em
   JJC_DATA e preenche a página. Ex:
   equipe.html?modalidade=futsal&id=futsal-leoes-de-juda
   ================================================================== */
function renderPaginaEquipe() {
  const root = document.querySelector("[data-pagina-equipe]");
  if (!root || typeof JJC_DATA === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const modalidadeSlug = params.get("modalidade");
  const equipeId = params.get("id");

  const mod = JJC_DATA[modalidadeSlug];
  const equipe = mod?.equipes.find(e => e.id === equipeId);

  const estadoVazio = document.querySelector("[data-equipe-nao-encontrada]");
  const conteudo = document.querySelector("[data-equipe-conteudo]");

  if (!mod || !equipe) {
    if (estadoVazio) estadoVazio.hidden = false;
    if (conteudo) conteudo.hidden = true;
    return;
  }

  if (estadoVazio) estadoVazio.hidden = true;
  if (conteudo) conteudo.hidden = false;

  setText("[data-equipe-nome]", equipe.nome);
  setText("[data-equipe-comunidade]", equipe.comunidade);
  setText("[data-equipe-capitao]", equipe.capitao);
  setText("[data-equipe-vice]", equipe.vice || "Não informado");
  setText("[data-equipe-tecnico]", equipe.tecnico || "Não informado");
  setText("[data-equipe-modalidade]", mod.nome);
  setText("[data-equipe-info]", equipe.infoAdicional || "Sem informações adicionais no momento.");
  setAttr("[data-equipe-foto]", "src", equipe.foto);
  setAttr("[data-equipe-foto]", "alt", `Foto da equipe ${equipe.nome}`);
  setAttr("[data-equipe-escudo]", "src", equipe.escudo);
  setAttr("[data-equipe-escudo]", "alt", `Escudo da equipe ${equipe.nome}`);
  setAttr("[data-equipe-voltar]", "href", `${mod.slug}.html`);

  const atletasContainer = document.querySelector("[data-equipe-atletas]");
  if (atletasContainer) {
    atletasContainer.innerHTML = equipe.atletas.map(a => `
      <tr>
        <td>${a.nome}</td>
        <td>${a.numero}</td>
        <td>${a.posicao}</td>
      </tr>
    `).join("");
  }

  document.title = `${equipe.nome} · ${mod.nome} · JJC`;
}


/* ==================================================================
   UTILITÁRIOS
   ================================================================== */
function setText(selector, valor) {
  const el = document.querySelector(selector);
  if (el) el.textContent = valor;
}

function setAttr(selector, atributo, valor) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(atributo, valor);
}
