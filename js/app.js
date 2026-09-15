// Mind Insight — controller
import { QUESTIONS } from "./questions.js";
import { DIM_ORDER, DIM_COLORS, scoreAll, countAnswered } from "./scoring.js";
import { loadReport } from "./reports.js";
import { store } from "./store.js";
import { LANGS, t, localized, setLang, getLang, initLang } from "./i18n.js";

const $ = (s, el = document) => el.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const FACET_NAMES = {
  "Self-Awareness": { hi: "आत्म-जागरूकता", bn: "আত্মসচেতনতা" },
  "Self-Regulation": { hi: "आत्म-नियंत्रण", bn: "আত্মনিয়ন্ত্রণ" },
  "Empathy": { hi: "सहानुभूति", bn: "সহমর্মিতা" },
  "Social Skills": { hi: "सामाजिक कौशल", bn: "সামাজিক দক্ষতা" },
  "Adaptability": { hi: "अनुकूलनशीलता", bn: "অভিযোজন ক্ষমতা" },
  "Perseverance": { hi: "दृढ़ता", bn: "অধ্যবসায়" },
  "Optimism": { hi: "आशावाद", bn: "আশাবাদ" },
  "Learning Orientation": { hi: "सीखने की प्रवृत्ति", bn: "শেখার প্রবণতা" },
  "Curiosity": { hi: "जिज्ञासा", bn: "কৌতূহল" },
  "Openness to Change": { hi: "बदलाव के प्रति खुलापन", bn: "পরিবর্তনে উন্মুক্ততা" },
  "Rumination": { hi: "बार-बार सोचना", bn: "বারবার ভাবা" },
  "Indecisiveness": { hi: "अनिर्णय", bn: "সিদ্ধান্তহীনতা" },
  "Worry": { hi: "चिंता", bn: "দুশ্চিন্তা" },
};
const facetName = (f) => (getLang() === "en" ? f : FACET_NAMES[f]?.[getLang()] || f);
const dimName = (d) => t(`dims.${d}`)[0];
const dimBlurb = (d) => t(`dims.${d}`)[1];

// Flat ordered list of statements.
const FLAT = [];
for (const dim of DIM_ORDER) for (const [facet, qs] of Object.entries(QUESTIONS[dim])) qs.forEach((q, idx) => FLAT.push({ dim, facet, idx, q }));
const TOTAL = FLAT.length;

const els = { welcome: $("#welcome"), question: $("#question"), results: $("#results"), toast: $("#toast"), lang: $("#lang") };
let screen = "welcome";
let viewing = null; // a completed record being viewed
let advanceTimer = null;

/* ---------- Language ---------- */
function renderLangSwitch() {
  els.lang.innerHTML = Object.entries(LANGS).map(([k, v]) => `<button data-lang="${k}" class="${getLang() === k ? "active" : ""}" lang="${k}">${v}</button>`).join("");
  document.documentElement.lang = getLang();
}
els.lang.addEventListener("click", (e) => {
  const b = e.target.closest("[data-lang]");
  if (!b) return;
  setLang(b.dataset.lang);
  renderLangSwitch();
  render();
});

/* ---------- Screens ---------- */
function show(name) {
  screen = name;
  for (const k of ["welcome", "question", "results"]) els[k].classList.toggle("active", k === name);
  window.scrollTo({ top: 0 });
}

function render() {
  if (screen === "welcome") renderWelcome();
  else if (screen === "question") renderQuestion();
  else renderResults(viewing);
}

/* ---------- Welcome ---------- */
function renderWelcome() {
  const s = store.session;
  const p = s?.person || {};
  const resume = s && countAnswered(s.answers) > 0;
  els.welcome.innerHTML = `
  <div class="welcome">
    <div>
      <div class="eyebrow">Mind Insight</div>
      <h1>${esc(t("title"))}</h1>
      <p class="lede">${esc(t("lede", { n: TOTAL }))}</p>
      <div class="facts">
        <div><b>${TOTAL}</b><span>${esc(t("statements"))}</span></div>
        <div><b>8–10</b><span>${esc(t("minutes"))}</span></div>
        <div><b>4</b><span>${esc(t("dimensions"))}</span></div>
      </div>
      <div class="dims">
        ${DIM_ORDER.map((d) => `<div class="dim" style="--dim-color:${DIM_COLORS[d]}"><i></i><div><b>${esc(dimName(d))}</b><p>${esc(dimBlurb(d))}</p></div></div>`).join("")}
      </div>
    </div>
    <div>
      ${resume ? `<div class="panel" style="margin-bottom:16px"><h2>${esc(t("resume"))}</h2><p class="sub">${esc(t("resumeSub", { n: countAnswered(s.answers), t: TOTAL }))}</p>
        <div style="display:flex;gap:8px"><button class="btn primary" data-action="resume">${esc(t("resumeBtn"))}</button><button class="btn ghost" data-action="discard">${esc(t("discard"))}</button></div></div>` : ""}
      <form class="panel" id="person-form" novalidate>
        <h2>${esc(t("aboutYou"))}</h2>
        <p class="sub">${esc(t("aboutYouSub"))}</p>
        <div class="field"><label for="f-name">${esc(t("name"))}</label><input class="control" id="f-name" name="name" value="${esc(p.name || "")}" autocomplete="name"><span class="err">${esc(t("required"))}</span></div>
        <div class="grid2">
          <div class="field"><label for="f-age">${esc(t("age"))}</label><input class="control" id="f-age" name="age" type="number" min="16" max="100" inputmode="numeric" value="${esc(p.age || "")}"><span class="err">${esc(t("ageRange"))}</span></div>
          <div class="field"><label for="f-gender">${esc(t("gender"))}</label><select class="control" id="f-gender" name="gender">${opts(t("genders"), p.gender)}</select><span class="err">${esc(t("required"))}</span></div>
        </div>
        <div class="field"><label for="f-occ">${esc(t("occupation"))}</label><select class="control" id="f-occ" name="occupation">${opts(t("occupations"), p.occupation)}</select><span class="err">${esc(t("required"))}</span></div>
        <button class="btn accent" type="submit" style="width:100%;margin-top:6px">${esc(t("start"))}</button>
        <p class="privacy">${esc(t("privacy"))}</p>
      </form>
    </div>
  </div>
  ${store.results.length ? `<div class="history"><h3>${esc(t("previous"))}</h3><div class="history-list">${store.results.map((r) => `
    <div class="history-item" data-open="${esc(r.id)}"><div><b>${esc(r.person.name)}</b> <span class="muted small">· ${new Date(r.completedAt).toLocaleDateString()}</span>
      <div class="scores">${DIM_ORDER.map((d) => `<span>${esc(dimName(d))} <b>${r.scores[d].pct ?? "–"}</b></span>`).join("")}</div></div><button class="btn sm">${esc(t("view"))}</button></div>`).join("")}</div></div>` : ""}`;
}
function opts(list, val) {
  return [`<option value="">${esc(t("select"))}</option>`, ...list.map((o, i) => `<option value="${i}" ${String(val) === String(i) ? "selected" : ""}>${esc(o)}</option>`)].join("");
}

els.welcome.addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target;
  const name = f.name.value.trim(), age = Number(f.age.value), gender = f.gender.value, occupation = f.occupation.value;
  let ok = true;
  const mark = (input, bad) => { input.closest(".field").classList.toggle("invalid", bad); input.classList.toggle("error", bad); if (bad) ok = false; };
  mark(f.name, !name); mark(f.age, !(age >= 16 && age <= 100)); mark(f.gender, gender === ""); mark(f.occupation, occupation === "");
  if (!ok) return;
  store.newSession({ name, age, gender, occupation, lang: getLang() });
  viewing = null;
  show("question"); renderQuestion();
});
els.welcome.addEventListener("click", (e) => {
  const a = e.target.closest("[data-action],[data-open]");
  if (!a) return;
  if (a.dataset.action === "resume") { viewing = null; show("question"); renderQuestion(); }
  if (a.dataset.action === "discard") { store.clearSession(); renderWelcome(); }
  if (a.dataset.open) { viewing = store.results.find((r) => r.id === a.dataset.open); if (viewing) { show("results"); renderResults(viewing); } }
});

/* ---------- Question ---------- */
function currentAnswer(item) { return store.session?.answers?.[item.dim]?.[item.facet]?.[item.idx] ?? null; }

function renderQuestion() {
  const s = store.session;
  if (!s) { show("welcome"); return renderWelcome(); }
  const pos = Math.min(s.position, TOTAL - 1);
  const item = FLAT[pos];
  const answered = countAnswered(s.answers);
  const sel = currentAnswer(item);
  const example = localized(item.q.example);
  const last = pos === TOTAL - 1;
  els.question.innerHTML = `
  <div class="progress"><i style="width:${(answered / TOTAL) * 100}%"></i></div>
  <div class="q-meta">
    <span class="q-dim" style="--dim-color:${DIM_COLORS[item.dim]}"><i></i>${esc(dimName(item.dim))} · ${esc(facetName(item.facet))}</span>
    <span class="q-count">${esc(t("statement"))} ${pos + 1} ${esc(t("of"))} ${TOTAL}</span>
  </div>
  <h2 class="q-text">${esc(localized(item.q.q))}</h2>
  ${example ? `<details class="q-example"><summary>${esc(t("example"))}</summary><p>${esc(example)}</p></details>` : ""}
  <div class="scale" role="radiogroup">
    ${t("scale").map((label, i) => `<button type="button" role="radio" aria-checked="${sel === i + 1}" class="${sel === i + 1 ? "selected" : ""}" data-value="${i + 1}"><span class="dot"></span><span>${esc(label)}</span><kbd>${i + 1}</kbd></button>`).join("")}
  </div>
  <div class="scale-ends"><span>${esc(t("scale")[0])}</span><span>${esc(t("scale")[4])}</span></div>
  <p class="small muted scale-hint" style="margin-bottom:24px">${esc(t("scaleHint"))}</p>
  <div class="q-nav">
    <button class="btn ghost" data-nav="back" ${pos === 0 ? "disabled" : ""}>← ${esc(t("back"))}</button>
    <div style="display:flex;gap:8px">
      ${sel == null ? `<button class="btn ghost" data-nav="skip">${esc(t("skip"))}</button>` : ""}
      <button class="btn primary" data-nav="next" ${sel == null ? "disabled" : ""}>${esc(last ? t("finish") : t("next"))} →</button>
    </div>
  </div>`;
}

function answer(value) {
  const s = store.session;
  const item = FLAT[s.position];
  s.answers[item.dim] ??= {};
  s.answers[item.dim][item.facet] ??= [];
  s.answers[item.dim][item.facet][item.idx] = value;
  store.saveSession();
  renderQuestion();
  clearTimeout(advanceTimer);
  advanceTimer = setTimeout(() => move(1), 380);
}

function move(delta) {
  clearTimeout(advanceTimer);
  const s = store.session;
  const next = s.position + delta;
  if (next >= TOTAL) return finish();
  s.position = Math.max(0, next);
  store.saveSession();
  renderQuestion();
}

function finish() {
  const s = store.session;
  const scores = scoreAll(QUESTIONS, s.answers);
  const rec = store.complete(scores);
  viewing = rec;
  show("results");
  renderResults(rec);
}

els.question.addEventListener("click", (e) => {
  const v = e.target.closest("[data-value]");
  if (v) return answer(Number(v.dataset.value));
  const n = e.target.closest("[data-nav]");
  if (!n) return;
  if (n.dataset.nav === "back") move(-1);
  if (n.dataset.nav === "skip" || n.dataset.nav === "next") move(1);
});
document.addEventListener("keydown", (e) => {
  if (screen !== "question" || e.metaKey || e.ctrlKey || e.altKey) return;
  if (/^[1-5]$/.test(e.key)) { e.preventDefault(); answer(Number(e.key)); }
  else if (e.key === "ArrowLeft") move(-1);
  else if (e.key === "ArrowRight" || e.key === "Enter") { if (currentAnswer(FLAT[store.session.position]) != null) move(1); }
});

/* ---------- Results ---------- */
async function renderResults(rec) {
  if (!rec) { show("welcome"); return renderWelcome(); }
  const sc = rec.scores;
  const ranked = DIM_ORDER.filter((d) => sc[d].pct != null).sort((a, b) => sc[b].pct - sc[a].pct);
  const spread = ranked.length ? sc[ranked[0]].pct - sc[ranked[ranked.length - 1]].pct : 0;
  const strengths = ranked.filter((d) => sc[d].pct >= 60);
  const growth = ranked.filter((d) => sc[d].pct < 60);
  const first = rec.person.name.split(" ")[0];
  els.results.innerHTML = `
  <div class="results-head">
    <div><div class="eyebrow">${esc(t("resultsEyebrow"))} · ${new Date(rec.completedAt).toLocaleDateString()}</div>
      <h1>${esc(t("resultsTitle", { name: first }))}</h1><p>${esc(t("resultsLede"))}</p></div>
    <div class="results-actions">
      <button class="btn" data-action="print">${esc(t("print"))}</button>
      <button class="btn" data-action="retake">${esc(t("retake"))}</button>
      <button class="btn ghost" data-action="delete">${esc(t("deleteData"))}</button>
    </div>
  </div>
  <div class="overview">
    <div class="panel" style="box-shadow:none">
      <div class="bars">
        ${DIM_ORDER.map((d) => `<div class="bar" style="--dim-color:${DIM_COLORS[d]}"><b>${esc(dimName(d))}<small>${esc(sc[d].level ? t("levels")[sc[d].level - 1] : "—")}</small></b><div class="track"><i data-w="${sc[d].pct ?? 0}"></i></div><span class="val">${sc[d].pct ?? "–"}</span></div>`).join("")}
      </div>
      <p class="legend">0 – 100 · ${esc(t("outOf"))}</p>
    </div>
    <div class="summary">
      <h3>${esc(t("strengths"))}</h3>
      ${spread < 12 && ranked.length === 4 ? `<p>${esc(t("balanced"))}</p>` : `
        ${ranked[0] ? `<p>${esc(t("strongest", { dim: dimName(ranked[0]) }))}</p>` : ""}
        ${ranked.length > 1 ? `<p>${esc(t("weakest", { dim: dimName(ranked[ranked.length - 1]) }))}</p>` : ""}`}
      <div class="tags">${strengths.map((d) => `<span class="tag up">${esc(dimName(d))} ${sc[d].pct}</span>`).join("")}${growth.map((d) => `<span class="tag down">${esc(dimName(d))} ${sc[d].pct}</span>`).join("")}</div>
    </div>
  </div>
  <div id="reports">${DIM_ORDER.map((d) => reportShell(d, sc[d], true)).join("")}</div>
  <p class="foot-note">${esc(t("footnote"))}</p>`;
  requestAnimationFrame(() => els.results.querySelectorAll(".bar .track i").forEach((i) => (i.style.width = i.dataset.w + "%")));
  // Load written reports.
  for (const d of DIM_ORDER) {
    if (!sc[d].level) continue;
    const rep = await loadReport(d, sc[d].level);
    const body = $(`#rep-${d} .report-body`);
    if (body) body.innerHTML = reportBody(rep);
  }
}

function reportShell(d, s, collapsed) {
  return `<section class="report ${collapsed ? "collapsed" : ""}" id="rep-${d}" style="--dim-color:${DIM_COLORS[d]}">
    <div class="report-head"><i></i><div><h2>${esc(dimName(d))}</h2><div class="level"><span>${esc(t("levelWord"))} ${s.level ?? "–"} · ${esc(s.level ? t("levels")[s.level - 1] : "")}</span></div></div>
      <div class="score">${s.pct ?? "–"}<small>${esc(t("outOf"))}</small></div></div>
    <div class="facets">${Object.entries(s.facets).map(([f, v]) => `<div class="facet"><b>${esc(facetName(f))}</b><div class="track"><i style="width:${v.pct ?? 0}%"></i></div><span>${v.pct ?? "–"} · ${v.answered}/${v.total}</span></div>`).join("")}</div>
    <div class="report-body"><p class="muted small">…</p></div>
    <div class="report-toggle"><button class="btn sm ghost" data-toggle="${d}">${esc(collapsed ? t("showReport") : t("hideReport"))}</button></div>
  </section>`;
}

function reportBody(rep) {
  const list = (items) => items.length ? `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>` : "";
  const sec = (key, items) => items.length ? `<div><h4>${esc(t(`sections.${key}`))}</h4>${list(items)}</div>` : "";
  if (!rep.title && !rep.intro) return `<p class="muted small">Report text not available.</p>`;
  return `${rep.intro ? `<p class="intro">${esc(rep.intro)}</p>` : ""}${sec("chars", rep.chars)}${sec("impact", rep.impact)}${sec("strategy", rep.strategy)}${sec("exercises", rep.exercises)}${rep.growth ? `<div class="long"><h4>${esc(t("sections.growth"))}</h4><p>${esc(rep.growth)}</p></div>` : ""}`;
}

els.results.addEventListener("click", (e) => {
  const tg = e.target.closest("[data-toggle]");
  if (tg) { const sec = $(`#rep-${tg.dataset.toggle}`); sec.classList.toggle("collapsed"); tg.textContent = sec.classList.contains("collapsed") ? t("showReport") : t("hideReport"); return; }
  const a = e.target.closest("[data-action]");
  if (!a) return;
  if (a.dataset.action === "print") { els.results.querySelectorAll(".report").forEach((r) => r.classList.remove("collapsed")); window.print(); }
  if (a.dataset.action === "retake") { if (confirm(t("confirmRetake"))) { viewing = null; show("welcome"); renderWelcome(); } }
  if (a.dataset.action === "delete") { if (confirm(t("confirmDelete"))) { store.deleteAll(); viewing = null; show("welcome"); renderWelcome(); notify(t("deleted")); } }
});

function notify(msg) { els.toast.textContent = msg; els.toast.classList.add("show"); clearTimeout(notify.t); notify.t = setTimeout(() => els.toast.classList.remove("show"), 2400); }

/* ---------- Boot ---------- */
initLang();
renderLangSwitch();
if (new URLSearchParams(location.search).get("demo") === "1" && !store.results.length) {
  // Deterministic sample result for demos and screenshots.
  const answers = {};
  let k = 0;
  for (const it of FLAT) { answers[it.dim] ??= {}; answers[it.dim][it.facet] ??= []; answers[it.dim][it.facet][it.idx] = [4, 5, 3, 4, 2, 4, 5, 3, 4][k++ % 9]; }
  store.newSession({ name: "Priya Sharma", age: 29, gender: "1", occupation: "1", lang: "en" });
  store.session.answers = answers;
  viewing = store.complete(scoreAll(QUESTIONS, answers));
  show("results");
}
render();
