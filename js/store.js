// localStorage persistence for the in-progress session and completed results.
const KEY_SESSION = "mi.session";
const KEY_RESULTS = "mi.results";

function read(k, fb) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fb; } catch { return fb; } }
function write(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }

export const store = {
  session: read(KEY_SESSION, null),
  results: read(KEY_RESULTS, []),

  newSession(person) {
    this.session = { id: `mi_${Date.now().toString(36)}`, person, answers: {}, startedAt: Date.now(), position: 0 };
    write(KEY_SESSION, this.session);
    return this.session;
  },
  saveSession() { if (this.session) write(KEY_SESSION, this.session); },
  clearSession() { this.session = null; try { localStorage.removeItem(KEY_SESSION); } catch {} },

  complete(scores) {
    const rec = { id: this.session.id, person: this.session.person, answers: this.session.answers, scores, completedAt: Date.now(), durationMs: Date.now() - this.session.startedAt };
    this.results = [rec, ...this.results.filter((r) => r.id !== rec.id)].slice(0, 20);
    write(KEY_RESULTS, this.results);
    this.clearSession();
    return rec;
  },
  deleteAll() {
    this.results = []; this.clearSession();
    try { localStorage.removeItem(KEY_RESULTS); Object.keys(localStorage).filter((k) => k.startsWith("psychometric_")).forEach((k) => localStorage.removeItem(k)); } catch {}
  },
};
