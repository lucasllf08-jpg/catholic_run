/* ==================================================================
   supabase.js
   ------------------------------------------------------------------
   Conexão com o banco de dados Supabase do projeto JJC.
   Usa a "anon public key", segura para expor no navegador —
   o acesso real é controlado pelas Row Level Security Policies
   configuradas no banco (equipes/atletas só liberam INSERT público,
   nunca SELECT direto; leitura pública passa pelas views
   equipes_publicas / atletas_publicos).
   ================================================================== */

const SUPABASE_URL = "https://dayuhiwbiebhmvbathxv.supabase.co";
const SUPABASE_KEY = "sb_publishable_C6ZdRMaC7tOWErKwUVl9BQ_m-8cM_Qp";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);