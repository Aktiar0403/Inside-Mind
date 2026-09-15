// Weighted scoring on a 1–5 scale, normalised to 0–100, with six levels.
export const DIM_ORDER = ["Emotional", "Resilience", "Growth", "Overthinking"];
export const DIM_COLORS = { Emotional: "var(--c-emotional)", Resilience: "var(--c-resilience)", Growth: "var(--c-growth)", Overthinking: "var(--c-overthinking)" };

/** answers: { [dim]: { [facet]: number[] } } */
export function scoreDimension(dimQuestions, dimAnswers = {}) {
  let weighted = 0, weight = 0;
  const facets = {};
  for (const [facet, qs] of Object.entries(dimQuestions)) {
    let fw = 0, fs = 0, answered = 0;
    qs.forEach((q, i) => {
      const a = dimAnswers[facet]?.[i];
      if (a == null) return;
      const v = q.reverse ? 6 - a : a;
      fs += v * q.weight; fw += q.weight; answered++;
    });
    const mean = fw ? fs / fw : null;
    facets[facet] = { mean, pct: mean == null ? null : Math.round(((mean - 1) / 4) * 100), answered, total: qs.length };
    weighted += fs; weight += fw;
  }
  const mean = weight ? weighted / weight : null;
  return { mean, pct: mean == null ? null : Math.round(((mean - 1) / 4) * 100), level: mean == null ? null : level(mean), facets };
}

export function level(mean) {
  if (mean >= 4.5) return 6;
  if (mean >= 4.0) return 5;
  if (mean >= 3.5) return 4;
  if (mean >= 3.0) return 3;
  if (mean >= 2.0) return 2;
  return 1;
}

export function scoreAll(questions, answers) {
  const out = {};
  for (const dim of DIM_ORDER) out[dim] = scoreDimension(questions[dim], answers[dim] || {});
  return out;
}

export function countAnswered(answers) {
  let n = 0;
  for (const d of Object.values(answers)) for (const f of Object.values(d)) n += f.filter((x) => x != null).length;
  return n;
}
