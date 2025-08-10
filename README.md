# Glossar-Projekt

Startseite: `index.html` – Detailseiten: `begriffe/*.html`

## Nutzung
- Öffnen Sie `index.html` in einem modernen Browser.
- Suchen Sie nach Begriffen (Live-Suche mit Hervorhebung).
- Filtern Sie nach Kategorien (Logistik, IT, Marketing).
- Klicken Sie auf einen Begriff für Details, Beispiele und Verlinkungen.

## Struktur
```
glossar-projekt/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── glossar.js
├── begriffe/
│   ├── supply-chain-management.html
│   ├── just-in-time.html
│   ├── api.html
│   ├── lead-time.html
│   └── brand-awareness.html
└── assets/
    └── images/
        └── logo.svg
```

## Features
- Suche mit Highlighting
- Kategorie-Filter mit visuellem Status
- Responsive Navigation, mobile-first
- Automatische Anzeige der „Letzten Speicherung“ per `document.lastModified`
- Barrierearme, semantische HTML5-Struktur
- Moderne Optik mit Gradients, Hover-Effekten und Animationen
- Print-optimierte Styles

## Technik
- HTML5, CSS3 (Flex/Grid), Vanilla JavaScript
- Keine Build-Tools erforderlich

## Browser-Support
- Chrome/Edge: vollständig
- Firefox: vollständig
- Safari: vollständig
- Internet Explorer: eingeschränkt (moderne Browser empfohlen)

To run the server locally, run:
`python3 -m http.server 8000 --bind 127.0.0.1`
`open http://127.0.0.1:8000/index.html`
