# Smilestone Multitasking Test

Interaktiver Trainings-Test, der zeigt, wie viel schneller fokussiertes Arbeiten gegenüber ständigem Aufgabenwechsel ist. Ein Raster aus Zahlen, Buchstaben und Symbolen wird per virtuellem Keyboard ausgefüllt – in verschiedenen Phasen mit steigendem Unterstützungsgrad.

## Trainings-Reisen

### Multitasking-Test (2 Phasen)
| Phase | Reihenfolge | Tastatur |
|-------|-------------|----------|
| 1 | Zeilenweise (Multitasking) | Komplett |
| 2 | Spaltenweise (Flow) | Komplett |

### Lean-Exzellenz (5 Phasen + Bonus)
| Phase | Titel | Reihenfolge | Tastatur |
|-------|-------|-------------|----------|
| 1 | Multitasking | Zeilenweise | Komplett |
| 2 | Konzentriertes Arbeiten (Flow) | Spaltenweise | Komplett |
| 3 | Technologie hilft (Pick-by-Light) | Spaltenweise | Komplett, nächste Taste leuchtet auf |
| 4 | Unnötiges Aussortieren (5S – Sort) | Spaltenweise | Nicht benötigte Tasten ausgegraut |
| 5 | Sinnvolle Ordnung (5S – Set in order) | Spaltenweise | Sortiert nach Eingabe-Reihenfolge |
| 6 (Bonus) | Die ungelernte Fachkraft (Process beats Skill) | Spaltenweise | Römische Ziffern, Katakana & Symbole, Pick-by-Light |

Nach Phase 5 kann optional die Bonus-Phase 6 gestartet werden: ungewohnte Zeichensätze bei voller technischer Unterstützung, abgeschlossen mit einem kurzen Quiz und einer „Systemvertrauen"-Auswertung.

## Features

- **Schwierigkeitsgrad:** Standard (vorwärts) oder Hardcore (Zeichen in umgekehrter Reihenfolge)
- **Countdown:** 5-4-3-2-1 / LOS!-Overlay vor jeder Phase
- **Deadline-Timer:** 30 Sekunden pro Phase – läuft die Zeit ab, muss eine Extraschicht (Zeitverlängerung) gekauft werden
- **Auswertung:** Zeitvergleich aller Phasen, Überstunden-Zähler, erklärender Text
- **Teilen:** Ergebnis per WhatsApp oder E-Mail

## Stack

Eine einzige statische `index.html` mit eingebettetem CSS und Vanilla JavaScript – kein Build-Schritt, keine Abhängigkeiten, keine Backend-Logik.

## Deployment

Bei jedem Push auf `main` deployed der GitHub Actions Workflow
(`.github/workflows/deploy-pages.yml`) den Inhalt automatisch auf GitHub Pages.

**Live:** https://martinhetschel.github.io/smileston-multitasking-test/
