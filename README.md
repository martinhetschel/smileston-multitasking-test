# Smilestone Multitasking Test

Kleiner interaktiver Test, der zeigt, wie viel schneller fokussiertes
Arbeiten gegenüber ständigem Aufgabenwechsel ist: In Phase 1 wird ein
Raster aus Zahlen, Buchstaben und Symbolen **zeilenweise** (Multitasking)
ausgefüllt, in Phase 2 dasselbe Raster **spaltenweise** (Flow). Am Ende
werden die beiden Zeiten verglichen und das Ergebnis lässt sich per
WhatsApp/E-Mail teilen.

## Stack

Eine einzige statische `index.html` mit eingebettetem CSS und Vanilla
JavaScript – kein Build-Schritt, keine Abhängigkeiten, keine Backend-Logik.

## Deployment

Bei jedem Push auf `main` deployed die GitHub Actions Workflow
(`.github/workflows/deploy-pages.yml`) den Inhalt automatisch auf
GitHub Pages.

**Live:** https://martinhetschel.github.io/smileston-multitasking-test/
