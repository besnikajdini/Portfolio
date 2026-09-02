# Portfolio — Besnik Ajdini

## Struttura

```
portfolio/
├── index.html          → markup + link a font/librerie CDN
├── css/
│   ├── style.css         → tutti gli stili, palette, animazioni
│   └── BounceCards.css   → stile delle card animate (About, colonna sinistra)
├── js/
│   ├── script.js         → loader, cursore custom, parallax, reveal a scroll
│   └── BounceCards.js    → porting vanilla JS del componente React Bits BounceCards
├── Recipe-Generator/
│   └── Bild-1.png                ← DA AGGIUNGERE
├── Niku-Blendz/
│   └── Niku-Blendz-1.png         ← DA AGGIUNGERE
└── Trading-Simulator/
    └── Trading-Simulator-1.png   ← DA AGGIUNGERE
```

## Come metterlo online

1. Copia dentro questa cartella le tue immagini e le pagine di dettaglio
   progetto (`recipe-generator.html`, `niku-blendz.html`, `trading-simulator.html`,
   `datenschutz.html`, `impressum.html`) esattamente con questi nomi/percorsi —
   sono quelli già referenziati in `index.html`.
2. Carica l'intera cartella sul tuo hosting (stessa root dove avevi il sito
   prima), mantenendo la struttura delle sottocartelle.
3. Apri `index.html` da browser per testare in locale prima di pubblicare.

## Dipendenze esterne (via CDN, nessuna installazione)

- Google Fonts: Fraunces, Manrope, Space Mono
- GSAP 3.12.5 + ScrollTrigger (cdnjs.cloudflare.com)

## BounceCards (About, colonna sinistra)

Porting in vanilla JS/CSS del componente [BounceCards di React Bits](https://reactbits.dev/components/bounce-cards)
(variante JS-CSS) — non serve React né shadcn, usa il GSAP già caricato nella pagina.
Ha sostituito il ritratto: è ora l'unico elemento visivo della colonna sinistra di About.

- Al momento usa 5 immagini placeholder da `picsum.photos` (in scala di grigi,
  come richiesto). Sostituiscile in `js/script.js`, nella chiamata a
  `initBounceCards({ images: [...] })`, con 5 foto/immagini che ti rappresentano
  (percorsi locali tipo `"About-Me/foto1.jpg"` oppure URL assoluti).
- Puoi cambiare rotazioni/spostamenti in `transformStyles`, velocità in
  `animationStagger`/`animationDelay`, e l'effetto elastico in `easeType`.
- Su schermi sotto gli 880px viene rimpicciolito automaticamente
  (`transform: scale(.62)` in `css/BounceCards.css`) per non rompere il layout mobile.

Se in futuro vuoi lavorarci offline senza internet, questi vanno scaricati
e serviti localmente — dimmelo e ti preparo anche quella versione.

## Struttura delle sezioni (ordine sulla pagina — 1:1 con il riferimento)

1. **Hero** — nome, ruolo, citazione, statistiche
2. **Leistungen** (`#services`) — 3 card di servizi/competenze, **contenuto placeholder da riscrivere**
3. **Erfahrung** (`#education`) — percorso formativo
4. **Projekte** (`#projects`) — i 3 progetti, card grandi
5. **Über mich** (`#about`) — bio + BounceCards + mini statistiche ripetute
6. **Skills** (`#skills`) — competenze per categoria
7. **Projektliste** (`#projects-list`) — griglia compatta con gli stessi 3 progetti (pronta per quando ne avrai di più — se ti sembra ridondante ora, puoi tranquillamente cancellarla)
8. **Referenzen** (`#testimonials`) — 3 card **placeholder**, chiaramente segnalate, pronte per un feedback vero (di un docente o del tuo primo Praktikum)
9. **Kontakt** (`#contact`) — card contatto + form mailto
10. **Footer** — chiusura + social + copyright

## Cosa NON ho copiato 1:1 dal sito di riferimento (e perché)

- **Il testo scritto** (bio, descrizioni servizi, testimonianze) — è opera dell'autore originale, protetta da copyright. Ti ho scritto un testo segnaposto nella stessa struttura, da riscrivere con le tue parole.
- **Le testimonianze vere** con nomi, foto, bandiere di paesi reali — sono recensioni autentiche di persone reali; copiarle o inventarne di false attribuite a persone inesistenti non sarebbe corretto. Le 3 card in `#testimonials` sono placeholder espliciti.
- **Il tuo ritratto** — come mi avevi chiesto in precedenza, non ho rimesso una tua foto: la sezione About usa ancora il BounceCards.
- **Il blocco SEO nascosto in fondo alla pagina** (paragrafi ripetuti in arabo/inglese specifici del suo nome/business) — non pertinente per te.


## Personalizzazione rapida

- Colori: tutti definiti come variabili in cima a `css/style.css` (`:root`).
- Velocità/intensità animazioni: parametri in `js/script.js` (durate GSAP,
  smorzamento del cursore in `ringLoop()`).
