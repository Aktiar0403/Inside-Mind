// Loads reports/<dim>/level<n>.md and parses the plain-heading format the files actually use.
const cache = new Map();

export async function loadReport(dim, lvl) {
  const key = `${dim}/${lvl}`;
  if (cache.has(key)) return cache.get(key);
  let text = "";
  try {
    const r = await fetch(`reports/${dim.toLowerCase()}/level${lvl}.md`);
    if (r.ok) text = await r.text();
  } catch {}
  const parsed = parse(text);
  cache.set(key, parsed);
  return parsed;
}

const HEADINGS = [
  ["chars", /^key characteristics/i],
  ["impact", /^impact on daily life/i],
  ["strategy", /^development strategy/i],
  ["exercises", /^recommended exercises/i],
  ["growth", /^long-term growth path/i],
];

export function parse(md) {
  const out = { title: "", subtitle: "", intro: "", chars: [], impact: [], strategy: [], exercises: [], growth: "" };
  if (!md) return out;
  const lines = md.split(/\r?\n/).map((l) => l.replace(/\*\*/g, "").trim()).filter(Boolean);
  let section = "head";
  const headCount = { title: false, subtitle: false };
  for (const raw of lines) {
    const line = raw.replace(/^[•\-*]\s*/, "");
    const h = HEADINGS.find(([, re]) => re.test(line));
    if (h) { section = h[0]; continue; }
    if (section === "head") {
      if (!headCount.title) { out.title = line; headCount.title = true; continue; }
      if (!headCount.subtitle) { out.subtitle = line; headCount.subtitle = true; continue; }
      out.intro += (out.intro ? " " : "") + line;
      continue;
    }
    if (section === "growth") { out.growth += (out.growth ? " " : "") + line; continue; }
    if (/^(at this level, you typically experience|immediate focus areas)/i.test(line)) continue;
    out[section].push(line);
  }
  return out;
}
