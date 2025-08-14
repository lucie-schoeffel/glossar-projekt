# Glossar-Projekt

Startseite: `index.html` – Detailseiten: `begriffe/*.html`

## Nutzung
- Öffnen Sie `index.html` in einem modernen Browser.
- Suchen Sie nach Begriffen (Live-Suche mit Hervorhebung).
- Filtern Sie nach Kategorien (Logistik, IT, Marketing).
- Klicken Sie auf einen Begriff für Details, Beispiele und Verlinkungen.

Sollten Sie weitere Fragen haben, kontaktieren Sie bitte das zuständige Glossar-Team unter der E-Mail-Adresse: glossar@log7-consult.de

## Struktur
```
glossar-projekt/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── glossar.js
├── begriffe/
│   ├── api.html
│   ├── brand-awareness.html
│   ├── just-in-time.html
│   ├── lead-time.html
│   └── supply-chain-management.html
└── assets/
    └── images/
        └── favicon.ico
        └── header_image.jpeg
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


The content is served directly from the repository’s main branch, so it’s always up to date.  
You can view the live site here: https://lucie-schoeffel.github.io/glossar-projekt  
To run the server locally, run:  
`python3 -m http.server 8000 --bind 127.0.0.1`  
`open http://127.0.0.1:8000/index.html`
