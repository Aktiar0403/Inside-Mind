# Mind Insight

A calm, honest self-assessment across four dimensions: emotional intelligence, resilience, growth mindset
and mental clarity (how much overthinking gets in the way). 39 statements, about ten minutes, a written
report per dimension. Interface in English, Hindi and Bengali.

**Live:** https://mindinsight.aktiar.tech

## How it works

- One statement per screen with a five-point scale. Keyboard 1 to 5 answers instantly; the app advances on its own.
- Every statement has an optional real-life example in all three languages.
- Scoring is a weighted mean on the 1 to 5 scale, normalised to 0 to 100, with reverse-scored items for the
  overthinking dimension so that a higher score always means "better".
- Six levels per dimension select one of 24 written reports in `reports/<dimension>/level<n>.md`.
- Results show dimension bars, facet breakdowns, a short summary and the full report. "Save as PDF" uses the
  browser's print dialog with a print stylesheet.
- Everything is stored in the browser only (`localStorage`). An unfinished assessment can be resumed; previous
  results are listed on the welcome screen and can be deleted.

Add `?demo=1` to the URL to load a sample result for demos.

## Structure

```
index.html        shell
css/app.css       styles (Newsreader + Public Sans, warm neutral palette; Noto fonts for Hindi and Bengali)
js/app.js         controller: screens, answering, results
js/questions.js   question bank (4 dimensions × facets × statements, en/hi/bn)
js/scoring.js     weighted scoring and levels
js/reports.js     report loader and parser
js/i18n.js        interface strings
js/store.js       localStorage persistence
reports/          24 markdown reports (English)
```

No build step. Serve the folder with any static server, for example `npx serve .`.

This is a structured self-reflection tool, not a clinical instrument.
