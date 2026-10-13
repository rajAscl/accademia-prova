/* Accademia - nuova home. Costruito da costruisci.py il 13/10/2026 20:09 da index.html: non modificare a mano. */
/* ===== Prima del prototipo (sito/nuova-home/sorgente/prima.js) ===== */
window.VERSIONE_PULITA = true;
const AE_BASE = (window.ACCADEMIA_HOME && window.ACCADEMIA_HOME.base) || "";
const AE_SITO = (window.ACCADEMIA_HOME && window.ACCADEMIA_HOME.sito) || "https://www.accademiaenneagramma.it";

// Il prototipo scrive lo stile scelto nell'indirizzo (?stile=H): serviva per le prove. Sul sito vero
// l'indirizzo della home resta pulito; il resto (#il-metodo, #podcast…) passa com'è.
(function () {
  const sostituisci = history.replaceState.bind(history);
  history.replaceState = function (stato, titolo, url) {
    if (typeof url === "string") url = url.replace(/[?&]stile=[^&#]*/, "").replace(/^([^?#]*)&/, "$1?");
    return sostituisci(stato, titolo, url);
  };
})();


/* le immagini delle proposte «foto» e «luce» (12/10/2026): nove foto Unsplash, vedi texture/FONTI-VOCI.txt */
const IMMAGINI_VOCI = {
  "foto1": AE_BASE + "img/foto1.webp",
  "luce1": AE_BASE + "img/luce1.webp",
  "foto2": AE_BASE + "img/foto2.webp",
  "luce2": AE_BASE + "img/luce2.webp",
  "foto3": AE_BASE + "img/foto3.webp",
  "luce3": AE_BASE + "img/luce3.webp",
  "foto4": AE_BASE + "img/foto4.webp",
  "luce4": AE_BASE + "img/luce4.webp",
  "foto5": AE_BASE + "img/foto5.webp",
  "luce5": AE_BASE + "img/luce5.webp",
  "foto6": AE_BASE + "img/foto6.webp",
  "luce6": AE_BASE + "img/luce6.webp",
  "foto7": AE_BASE + "img/foto7.webp",
  "luce7": AE_BASE + "img/luce7.webp",
  "foto8": AE_BASE + "img/foto8.webp",
  "luce8": AE_BASE + "img/luce8.webp",
  "foto9": AE_BASE + "img/foto9.webp",
  "luce9": AE_BASE + "img/luce9.webp"
};


/* Le immagini (WebP già ritagliate), tutte vere: brand/Immagini dell'Accademia, le copertine dei video su YouTube,
   la pagina del residenziale e i post già usciti. «cartaN» è l'immagine della voce sul punto N, «testataN» quella
   in cima alla sua pagina; l'albero della storia è ridisegnato in avorio su fondo trasparente.
   Per la certificazione, il marchio è provvisorio. Per cambiarne una si rifà con immagini.py e si sostituisce la stringa. */
const IMMAGINI = {
  "carta8": AE_BASE + "img/carta8.webp",
  "testata8": AE_BASE + "img/testata8.webp",
  "carta9": AE_BASE + "img/carta9.webp",
  "testata9": AE_BASE + "img/testata9.webp",
  "carta1": AE_BASE + "img/carta1.webp",
  "testata1": AE_BASE + "img/testata1.webp",
  "carta2": AE_BASE + "img/carta2.webp",
  "testata2": AE_BASE + "img/testata2.webp",
  "carta3": AE_BASE + "img/carta3.webp",
  "testata3": AE_BASE + "img/testata3.webp",
  "carta4": AE_BASE + "img/carta4.webp",
  "testata4": AE_BASE + "img/testata4.webp",
  "carta5": AE_BASE + "img/carta5.webp",
  "testata5": AE_BASE + "img/testata5.webp",
  "carta6": AE_BASE + "img/carta6.webp",
  "testata6": AE_BASE + "img/testata6.webp",
  "carta7": AE_BASE + "img/carta7.webp",
  "testata7": AE_BASE + "img/testata7.webp",
  "luca": AE_BASE + "img/luca.webp",
  "mauro": AE_BASE + "img/mauro.webp",
  "corso-me": AE_BASE + "img/corso-me.webp",
  "corso-md": AE_BASE + "img/corso-md.webp",
  "v-Gde5bNkX8VY": AE_BASE + "img/v-Gde5bNkX8VY.webp",
  "v-0e5ceE16350": AE_BASE + "img/v-0e5ceE16350.webp",
  "v-zNk2SCzQG9w": AE_BASE + "img/v-zNk2SCzQG9w.webp",
  "v-scfRuu85pJw": AE_BASE + "img/v-scfRuu85pJw.webp",
  "v-R0uukD-l9fM": AE_BASE + "img/v-R0uukD-l9fM.webp",
  "v-yLwsQObX_pM": AE_BASE + "img/v-yLwsQObX_pM.webp",
  "a-chat-beato-chi-ha-un-anima-beato-chi-non-ne-h": AE_BASE + "img/a-chat-beato-chi-ha-un-anima-beato-chi-non-ne-h.webp",
  "a-animato-il-tipo-6-controfobico-va-contro-il-peri": AE_BASE + "img/a-animato-il-tipo-6-controfobico-va-contro-il-peri.webp",
  "a-chat-il-primo-scalino-del-lavoro-su-di-se": AE_BASE + "img/a-chat-il-primo-scalino-del-lavoro-su-di-se.webp",
  "a-chat-stesso-tipo-nomi-diversi": AE_BASE + "img/a-chat-stesso-tipo-nomi-diversi.webp",
  "a-chat-occupati-da-cio-che-non-c-e": AE_BASE + "img/a-chat-occupati-da-cio-che-non-c-e.webp",
  "a-animato-lamentarsi-una-piccola-fuga-di-energia-c": AE_BASE + "img/a-animato-lamentarsi-una-piccola-fuga-di-energia-c.webp",
  "a-chat-dove-va-l-attenzione-va-l-energia": AE_BASE + "img/a-chat-dove-va-l-attenzione-va-l-energia.webp"
};


// Le pagine delle nove voci (e dei contatti). I testi vengono dalla home a mappa (accademia-mappa, contenuti veri del sito,
// dei corsi, del canale e degli scritti già usciti); le righe nuove sono passate dal contestatore l'11/10/2026.
const PAGINE = {
  8: {
    slug: "l-enneagramma",
    sito: "/l-enneagramma/",
    // Luca, 12/10/2026: il punto 8 si chiama «L'Enneagramma» e porta a «Perché nove punti» (prototipo del laboratorio,
    // ClaudePipeline/progetti-github/accademia-nove-punti), che nel sito è la pagina /l-enneagramma/
    apertura: "Perché proprio nove punti? Scoprilo costruendo la figura.",
    blocchi: [
      { tipo: "testo", testo: ["In sette disegni da toccare e muovere costruisci tu il simbolo, un passo alla volta, fino alle due letture della stessa figura."] }
    ],
    azione: ["Apri «Perché nove punti»", AE_SITO + "/l-enneagramma/"]
  },
  9: {
    slug: "chi-insegna",
    sito: "/chi-siamo/",
    apertura: "Due formatori con più di dieci anni di Enneagramma, che da strade diverse hanno dato vita a un progetto comune.",
    blocchi: [
      { tipo: "persone", voci: [
        { nome: "Luca Giorgetti", ruolo: "Cofondatore", img: "luca", testo: ["Nato nel 1987, da oltre dieci anni lavora con l'Enneagramma in ambito personale, sociale e professionale.", "Ha scritto «Enneagramma, i Nove abitanti della Terra» (MacroEdizioni) ed «Enneagramma, una porta sull'Essere».", "È docente certificato EPTP secondo la Narrative Tradition di Helen Palmer e David Daniels."] },
        { nome: "Mauro Vedovello", ruolo: "Cofondatore", img: "mauro", testo: ["Nato nel 1970, è docente, filosofo e formatore certificato in Enneagramma.", "Ha fondato la scuola NoveVie ed è il rappresentante italiano della Narrative Tradition (ESNT).", "Si è formato con Helen Palmer, David Daniels, Russ Hudson, Beatrice Chestnut, Uranio Paes e Ginger Lapid-Bogda."] }
      ] }
    ],
    azione: ["Chi siamo sul sito", AE_SITO + "/chi-siamo/"]
  },
  1: {
    slug: "la-storia",
    sito: "/la-storia/",
    apertura: "L'enneagramma è un cerchio con nove punti e le linee che li uniscono.",
    blocchi: [
      { tipo: "testo", titolo: "Con Gurdjieff", testo: ["La figura arriva in Occidente con Gurdjieff. Nella Quarta Via è l'enneagramma dei processi."] },
      { tipo: "testo", titolo: "I nove tipi", testo: ["Sulla stessa figura l'Enneagramma delle Personalità descrive nove tipi: questo sistema lo dobbiamo a Oscar Ichazo e a Claudio Naranjo."] }
    ],
    azione: ["Apri la mappa del viaggio", AE_SITO + "/la-storia/"]
  },
  2: {
    slug: "masterclass-online",
    sito: "/corsi-accademia/",
    apertura: "Due corsi online per cominciare e per distinguere un tipo dall'altro.",
    blocchi: [
      { tipo: "corsi", voci: [
        { titolo: "Masterclass Enneagramma", img: "corso-me", testo: "Le basi dell'Enneagramma in otto ore e 34 lezioni, da seguire quando vuoi.", dettagli: ["Livello principiante", "Prepara alla settimana residenziale"], link: ["Apri la pagina del corso", AE_SITO + "/courses/masterclass-enneagramma/"] },
        { titolo: "Masterclass Differenziatori", img: "corso-md", testo: "36 confronti diretti fra un tipo e l'altro.", dettagli: ["Un'ora, tre lezioni", "Livello intermedio"], link: ["Apri la pagina del corso", AE_SITO + "/corsi-accademia/masterclass-differenziatori/"] }
      ] }
    ],
    azione: null
  },
  3: {
    slug: "corsi-in-partenza",
    sito: "/corsi-in-partenza/",
    // Luca, 12/10/2026: «ci deve essere un punto dedicato ai corsi in partenza». I corsi vengono dal sito
    // (Corsi in partenza, nella bacheca di WordPress); qui nel prototipo c'è un corso di prova.
    senzaTestata: true,
    apertura: "I corsi con una data di inizio e le iscrizioni aperte.",
    blocchi: [
      { tipo: "partenza" }
    ],
    azione: null
  },
  4: {
    slug: "residenziale",
    sito: "/residenziale-enneagramma/",
    // Luca, 12/10/2026: «residenziale e percorso di certificazione vanno insieme»
    apertura: "Una settimana in presenza ogni anno e, per chi vuole, la strada verso la certificazione.",
    blocchi: [
      { tipo: "testo", titolo: "La settimana residenziale", testo: ["Studio, esercizi e osservazione di sé con una guida e con un gruppo. È il percorso a cui teniamo di più: si svolge una volta all'anno e si può ripetere, e la Masterclass Enneagramma la prepara."] },
      { tipo: "nota", testo: "Date, luogo e iscrizione sono sulla pagina della settimana." },
      { tipo: "testo", titolo: "La certificazione", testo: ["Per chi vuole insegnare e far conoscere l'Enneagramma, o integrarlo nel proprio lavoro, dopo averci lavorato su di sé.", "Ci si arriva dalla settimana residenziale, che si può ripetere negli anni e può portare alla certificazione per l'insegnamento e la divulgazione."] },
      { tipo: "nota", testo: "Requisiti e tempi della certificazione: testo in preparazione." }
    ],
    azione: ["Apri la pagina della settimana", AE_SITO + "/residenziale-enneagramma/"]
  },
  5: {
    slug: "podcast",
    sito: "/podcast/",
    // Luca, 12/10/2026: «video e podcast sono praticamente la stessa cosa per noi»
    apertura: "Le puntate del podcast dell'Accademia, dalla più recente alla prima, e gli altri video del canale.",
    blocchi: [
      { tipo: "elenco", titolo: "Le puntate", voci: [
        ["S2E3", "Relazioni e coaching con il Tipo 6", "19/04/2026 · 26 min", "Gde5bNkX8VY"],
        ["S2E2", "Relazioni e coaching con il Tipo 9", "15/03/2026 · 18 min", "0e5ceE16350"],
        ["S2E1", "Crescere con l'Enneagramma nelle relazioni", "15/03/2026 · 13 min", "zNk2SCzQG9w"],
        ["S1E12", "Mistyping: quando confondiamo un tipo con un altro", "28/12/2025 · 32 min", "scfRuu85pJw"],
        ["S1E11", "Il lavoro della presenza nell'Enneagramma", "17/12/2025 · 25 min", "E0M6JCBRJuQ"],
        ["S1E10", "Le leggi universali dell'Enneagramma", "29/11/2025 · 25 min", "8j_dqZv9czE"],
        ["S1E9", "Chi è davvero un maestro", "08/11/2025 · 21 min", "cAX-0l4-QCA"],
        ["S1E8", "Test con l'Enneagramma: sì o no?", "12/10/2025 · 26 min", "jkMAv9UlWpE"],
        ["S1E7", "Che cosa significa crescere con l'Enneagramma", "25/09/2025 · 26 min", "z8BF-ZTu7b4"],
        ["S1E6", "Come riconoscere il proprio tipo", "14/09/2025 · 30 min", "uI9Ra0PC6F4"],
        ["S1E5", "Come combinare guai (e non) con l'Enneagramma", "08/08/2025 · 37 min", "qqllJti6l94"],
        ["S1E4", "Come i 9 tipi spendono la propria energia", "28/07/2025 · 26 min", "jbO-dyf_UOc"],
        ["S1E3", "L'osservazione di sé", "14/07/2025 · 24 min", "GklGsw-jWus"],
        ["S1E2", "I tre centri di intelligenza", "14/07/2025 · 26 min", "Z8-X43Tr9J8"],
        ["S1E1", "Dentro la mappa", "14/07/2025 · 22 min", "xJ9KTPBkPI4"]
      ] },
      { tipo: "griglia", titolo: "Altri video", voci: [
        ["I Differenziatori dell'Enneagramma", "5 min", "R0uukD-l9fM"],
        ["I 3 centri di intelligenza", "38 min", "yLwsQObX_pM"]
      ] }
    ],
    azione: ["Il canale YouTube", "https://www.youtube.com/@accademiaenneagramma"]
  },
  6: {
    slug: "radio-accademia",
    sito: "/radio-accademia/",
    // il prototipo Radio Accademia (ClaudePipeline/progetti-github/accademia-radio), che nel sito ha la sua pagina
    senzaTestata: true,
    apertura: "Una radio da esplorare girando la manopola: ogni stazione è un tema, con le voci del podcast.",
    blocchi: [
      { tipo: "testo", testo: ["Fra una stazione e l'altra si sente il fruscio, e su ogni stazione parte uno spezzone del podcast, con il rimando alla puntata intera."] }
    ],
    azione: ["Accendi la radio", AE_SITO + "/radio-accademia/"]
  },
  7: {
    slug: "articoli",
    apertura: "Gli scritti dell'Accademia già usciti sui nostri canali.",
    blocchi: [
      { tipo: "scritti", voci: [
        ["Beato chi ha un'anima, beato chi non ne ha, ma guai e dolore a chi ne ha soltanto l'embrione.", "G. I. Gurdjieff, in P. D. Ouspensky, Frammenti di un insegnamento sconosciuto · 03/10/2026", "Per Gurdjieff l'anima non è un dono che si riceve alla nascita.", "chat-beato-chi-ha-un-anima-beato-chi-non-ne-h"],
        ["Il primo scalino del lavoro su di sé", "Osservazione di sé · 02/10/2026", "Si comincia da cose piccole: la mano che gesticola mentre parliamo, la gamba che dondola sotto il tavolo.", "chat-il-primo-scalino-del-lavoro-su-di-se"],
        ["Stesso tipo, nomi diversi", "Ichazo, Naranjo, Daniels · 01/10/2026", "Il meccanismo di difesa del 5 ha due nomi, e tutti e due hanno una storia.", "chat-stesso-tipo-nomi-diversi"],
        ["Occupati da ciò che non c'è", "30/09/2026", "Preoccuparsi vuol dire occuparsi di una cosa prima che ci sia.", "chat-occupati-da-cio-che-non-c-e"],
        ["Dove va l'attenzione va l'energia", "Un principio del lavoro su di sé · 28/09/2026", "Mentre facciamo una cosa la mente è spesso altrove, e l'energia va dove va l'attenzione.", "chat-dove-va-l-attenzione-va-l-energia"]
      ] }
    ],
    azione: ["Instagram dell'Accademia", "https://www.instagram.com/accademiaenneagramma.it/"]
  },
  contatti: {
    slug: "contatti",
    sito: "/contatti/",
    titolo: "Contatti",
    apertura: "Scrivici, seguici, vieni a trovarci.",
    blocchi: [
      { tipo: "contatti", voci: [
        ["Scrivici", "info@accademiaenneagramma.it", "Per corsi, domande e incontri."],
        ["Dove siamo", "Bergamo e Cesena", "Siamo a Bergamo e a Cesena."],
        ["Instagram", "@accademiaenneagramma.it", "https://www.instagram.com/accademiaenneagramma.it/"],
        ["YouTube", "@accademiaenneagramma", "https://www.youtube.com/@accademiaenneagramma"]
      ] }
    ],
    azione: ["La pagina dei contatti", AE_SITO + "/contatti/"]
  }
};

/* ==========================================================
   LE USCITE NUOVE (Luca, 12/10/2026: «ad ogni pubblicazione di post o di video occorre aggiornare il sito in
   automatico [...] queste modifiche devono andare nella sezione articoli e video/podcast»). Sul sito WordPress
   scrive in window.ACCADEMIA_HOME.uscite quello che esce via via (pipeline/sito_uscite.py lo manda al sito):
   i post vanno in testa agli Articoli, le puntate in testa all'elenco, gli altri video in testa alla griglia.
   Un pezzo che è già negli elenchi qui sopra non si ripete. Fuori dal sito gli elenchi restano questi.
   ========================================================== */
(function () {
  const u = window.ACCADEMIA_HOME && window.ACCADEMIA_HOME.uscite;
  if (!u) return;
  const metti = (n, tipo, nuove, chiave) => {
    const b = PAGINE[n].blocchi.find(x => x.tipo === tipo);
    if (!b || !Array.isArray(nuove)) return;
    const ci = new Set(b.voci.map(chiave));
    b.voci.unshift(...nuove.filter(v => Array.isArray(v) && !ci.has(chiave(v))));
  };
  metti(7, "scritti", u.scritti, v => v[5] || v[3]);   // [titolo, quando, testo, immagine, link, nome del post]
  metti(5, "elenco", u.puntate, v => v[3]);            // [sigla, titolo, quando, id YouTube]
  metti(5, "griglia", u.video, v => v[2]);             // [titolo, quando, id YouTube, immagine]
})();


/* ==========================================================
   CORSI IN PARTENZA (Luca, 12/10/2026: «appena mettiamo un corso in partenza questo compaia nella home ben
   visibile con una preview»). Sul sito li scrive WordPress (Corsi in partenza, nella bacheca) in
   window.ACCADEMIA_HOME.partenza; finché non ce n'è nessuno la zona non c'è. Qui, fuori dal sito, un corso di
   prova: la pagina del corso «L'individuazione esatta del tipo» (scheda 29 del Laboratorio), con date ipotetiche.
   ========================================================== */
const PARTENZA_PROVA = [
  { titolo: "L'individuazione esatta del tipo", quando: "Dal 5 novembre", orario: "Quattro giovedì, 20:30-22:30",
    dove: "Online", posti: "14 posti", fino: "2 novembre", prezzo: "",
    riassunto: "Quattro serate online per riconoscere il proprio tipo, anche quando ci si ritrova in due.",
    url: "https://claude.ai/artifact/Fp2NrWHHi7hi7G2Q2eXXQZ", img: "" }
];
const PARTENZA = (window.ACCADEMIA_HOME && Array.isArray(window.ACCADEMIA_HOME.partenza)) ? window.ACCADEMIA_HOME.partenza : PARTENZA_PROVA;

/* ==========================================================
   TESTI DEL SITO, tutti qui: si cambiano in un punto solo.
   I testi delle pagine stanno nel blocco PAGINE, qui sopra.
   ========================================================== */
const TESTI = {
  marchio: "Accademia Enneagramma",
  entra: "Entra",
  contatti: "Contatti",
  rivedi: "Rivedi l'ingresso",
  sceltaVertice: "Scegli da dove cominciare",
  sceltaVoce: "Scegli una voce",
  centro: "Torna al triangolo",
  torna: "Torna all'enneagramma",
  // l'ingresso nero (Luca, 11/10/2026)
  ingresso: {
    occhiello: "Accademia Enneagramma",
    titolo: "Benvenuta, benvenuto",  // Luca, 12/10/2026
    riga: "Nell'enneagramma sono iscritte leggi universali che si rivelano agli occhi di chi mette il cuore al centro della ricerca della verità"
  },
  // Le chiavi sono i vertici del triangolo: 9 in alto, 3 a destra, 6 a sinistra.
  // Ogni parte ha tre voci, una per ciascuno dei suoi tre punti:
  //   L'Accademia 8 · 9 · 1    Formazione 2 · 3 · 4    Approfondire 5 · 6 · 7
  // La voce del punto centrale (9, 3, 6) prende il posto del titolo, che scivola via.
  sezioni: {
    9: {
      nome: "L'Accademia",
      sottotitolo: "Chi siamo e come insegniamo",
      voci: {
        8: { titolo: "L'Enneagramma", frase: "Perché proprio nove punti? Scoprilo costruendo la figura" },
        9: { titolo: "Chi insegna", frase: "Chi sono e come si sono formati i due fondatori" },
        1: { titolo: "La storia", frase: "La storia della figura, da Gurdjieff ai nove tipi" }
      }
    },
    3: {
      nome: "Formazione",
      sottotitolo: "Corsi, residenziale, certificazione",
      voci: {
        2: { titolo: "Masterclass online", frase: "Due corsi registrati, da seguire quando vuoi" },
        3: { titolo: "Corsi in partenza", frase: "I corsi con una data di inizio e le iscrizioni aperte" },
        4: { titolo: "Residenziale e certificazione", frase: "La settimana in presenza e il percorso di certificazione" }
      }
    },
    6: {
      nome: "Approfondire",
      sottotitolo: "Podcast, radio, letture",
      voci: {
        5: { titolo: "Podcast e video", frase: "Tutte le puntate del podcast e i video del canale" },
        6: { titolo: "Radio Accademia", frase: "Gira la manopola e ascolta gli spezzoni del podcast" },
        7: { titolo: "Articoli", frase: "Gli scritti dell'Accademia usciti sui nostri canali" }
      }
    }
  },
  // voci della prima stesura rimaste fuori dai nove punti, per non perderle
  riserva: ["Enneagramma delle Personalità", "Enneagramma dei Processi", "Contatti", "Incontri formativi", "Calendario", "Iscrizione", "I nove tipi", "Libri", "Eventi"]
};

/* ==========================================================
   GEOMETRIA: nove punti ogni 40°, il 9 in alto, poi 1…8 in senso orario.
   ========================================================== */
const C = 500, R = 310;
const VERTICI = [9, 3, 6];
const PUNTI = { 9: [8, 9, 1], 3: [2, 3, 4], 6: [5, 6, 7] };
// ordine dell'Accademia (Luca, 27/09/2026): il triangolo si traccia 9 → 6 → 3 → 9, l'esade 1 → 4 → 2 → 8 → 5 → 7 → 1
const TRIANGOLO = [9, 6, 3, 9];
const ESADE = { 9: [1, 4, 2, 8, 5, 7, 1], 3: [4, 2, 8, 5, 7, 1, 4], 6: [7, 1, 4, 2, 8, 5, 7] };
const angolo = n => (n % 9) * 40 * Math.PI / 180;
const dir = n => ({ x: Math.sin(angolo(n)), y: -Math.cos(angolo(n)) });
const punto = n => ({ x: C + R * dir(n).x, y: C + R * dir(n).y });
const sezioneDi = n => VERTICI.find(v => PUNTI[v].includes(n));

const VELOCITA = 900;       // unità del disegno al secondo: tratto a velocità costante
const VELOCITA_INDIETRO = 1500;
const CHIAVE = "accademia-home-visitata";
const CHIAVE_OPZIONE = "accademia-home-opzione";
const mqRidotto = matchMedia("(prefers-reduced-motion: reduce)");
// ?senza-animazioni nell'indirizzo fa lo stesso: utile per le prove
const ridotto = { get matches() { return mqRidotto.matches || new URLSearchParams(location.search).has("senza-animazioni"); } };

const $ = id => document.getElementById(id);

/* ganci: gli stili (blocco in fondo) si agganciano qui senza cambiare la struttura */
const ganci = { tracciato: new Set(), inizia: new Set(), punto: new Set(), chiuso: new Set(), entra: new Set(), rivedi: new Set(), adatta: new Set(), pagina: new Set(), ritorno: new Set() };
const emetti = (k, ...a) => ganci[k].forEach(f => f(...a));
const sostituisci = { triangolo: null };   // uno stile può disegnare il triangolo a modo suo
const medaglioni = {}, MEDAGLIONI = true;   // stile 1 delle voci (13/10/2026)
document.documentElement.dataset.voci = "medaglioni";
let distanzaEtichette = 0;                  // px in più fra punto ed etichetta
const NS = "http://www.w3.org/2000/svg";
const corpo = document.body, figura = $("figura"), svg = $("disegno");

/* ---------- testi fissi ---------- */
$("marchio").textContent = TESTI.marchio;
$("link-contatti").textContent = TESTI.contatti;

// la zona «In partenza»: un corso solo porta alla sua pagina, più corsi al punto dei corsi in partenza
(function () {
  const z = $("in-partenza");
  if (!PARTENZA.length) return;
  const c = PARTENZA[0], uno = PARTENZA.length === 1;
  const el = (tag, cls, t) => { const e = document.createElement(tag); e.className = cls; if (t) e.textContent = t; return e; };
  const anteprima = el("span", "ip-foto" + (c.img ? "" : " vuota"));
  if (c.img) anteprima.style.backgroundImage = `url("${c.img}")`;
  anteprima.setAttribute("aria-hidden", "true");
  const tag = el("span", "ip-tag"); tag.append(el("span", "pulsa"), document.createTextNode(uno ? "In partenza" : `In partenza · ${PARTENZA.length} corsi`));
  const testo = el("span", "ip-testo");
  testo.append(tag, el("span", "ip-tit", c.titolo), el("span", "ip-qd", [c.quando, c.dove, c.posti].filter(Boolean).join(" · ")));
  z.append(anteprima, testo, el("span", "ip-fr", "→"));
  if (uno) { z.href = c.url; z.target = "_blank"; z.rel = "noopener"; }
  else z.addEventListener("click", e => { e.preventDefault(); apriPagina(3); });
  z.hidden = false;
  document.documentElement.classList.add("ha-partenza");
})();
$("rivedi").textContent = TESTI.rivedi;
$("entra").textContent = TESTI.entra;
$("centro").setAttribute("aria-label", TESTI.centro);
$("centro").title = TESTI.centro;
$("pg-torna").querySelector("span").textContent = TESTI.torna;
$("pg-marchio").textContent = TESTI.marchio;

/* ---------- punti ---------- */
const dots = {};
for (let n = 1; n <= 9; n++) {
  const p = punto(n), c = document.createElementNS(NS, "circle");
  c.setAttribute("cx", p.x); c.setAttribute("cy", p.y);
  c.classList.add("punto");
  if (VERTICI.includes(n)) c.classList.add("vertice-p");
  c.style.transitionDelay = (n % 9) * 90 + "ms";
  $("punti").appendChild(c); dots[n] = c;
}
setTimeout(() => Object.values(dots).forEach(d => d.style.transitionDelay = ""), 2500);
// ogni punto si può toccare: se la sua parte è già aperta si va alla pagina, altrimenti si apre la parte
for (let n = 1; n <= 9; n++) {
  const p = punto(n), h = document.createElementNS(NS, "circle");
  h.setAttribute("cx", p.x); h.setAttribute("cy", p.y); h.setAttribute("r", 30);
  h.classList.add("colpo-punto");
  h.addEventListener("pointerenter", ev => { if (ev.pointerType === "mouse" && voci[n]) voci[n].classList.add("sopra"); });
  h.addEventListener("pointerleave", () => { if (voci[n]) voci[n].classList.remove("sopra"); });
  h.addEventListener("click", () => scelto === sezioneDi(n) ? apriPagina(n) : seleziona(sezioneDi(n)));
  svg.appendChild(h);
}

/* ---------- tracciati a velocità costante ---------- */
function tracciato(el, seq) {
  const pts = seq.map(punto), cum = [0];
  for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y));
  const tot = cum[cum.length - 1];
  const d = "M" + pts.map(p => p.x.toFixed(2) + " " + p.y.toFixed(2)).join(" L");
  el.setAttribute("d", d);
  (el._copie || []).forEach(c => c.setAttribute("d", d));
  const tr = {
    el, seq, tot, cum, fatto: 0,
    imposta(l) {
      this.fatto = l;
      [el, ...(el._copie || [])].forEach(x => { x.style.strokeDasharray = tot + " " + tot; x.style.strokeDashoffset = tot - l; });
    },
    punta(l) {
      let i = 1; while (i < cum.length - 1 && cum[i] < l) i++;
      const a = pts[i - 1], b = pts[i], k = (l - cum[i - 1]) / ((cum[i] - cum[i - 1]) || 1);
      return { x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k };
    }
  };
  tr.imposta(0);
  return tr;
}

let giro = 0; // ogni nuova azione annulla l'animazione in corso
function anima(tr, meta, vel, mio, avanzamento = () => {}) {
  const penna = $("penna");
  emetti("inizia", tr, meta);
  const segnala = (da, a) => {
    if (a <= da) return;
    tr.cum.forEach((c, i) => { if ((i === 0 && da === 0) || (c > da && c <= a)) emetti("punto", tr.seq[i], tr); });
    if (a === tr.tot) emetti("chiuso", tr);
  };
  return new Promise(fine => {
    if (ridotto.matches) { const da = tr.fatto; tr.imposta(meta); avanzamento(meta); segnala(da, meta); fine(true); return; }
    let prima = performance.now();
    penna.classList.add("attiva");
    const passo = ora => {
      if (mio !== giro) { fine(false); return; }
      const dt = Math.min((ora - prima) / 1000, 0.05); prima = ora;
      const verso = Math.sign(meta - tr.fatto);
      let l = tr.fatto + verso * vel * dt;
      if ((verso >= 0 && l >= meta) || (verso < 0 && l <= meta)) l = meta;
      const da = tr.fatto;
      tr.imposta(l); avanzamento(l); segnala(da, l);
      const p = tr.punta(l); penna.setAttribute("cx", p.x); penna.setAttribute("cy", p.y);
      if (l === meta) { penna.classList.remove("attiva"); fine(true); }
      else requestAnimationFrame(passo);
    };
    requestAnimationFrame(passo);
  });
}

const trTri = tracciato($("tri"), TRIANGOLO);
let trEsa = null;

/* ---------- etichette: per ogni parte il titolo e le sue tre voci (anche l'ordine del tasto Tab) ---------- */
const titoli = {}, voci = {};
VERTICI.forEach(v => {
  const s = TESTI.sezioni[v], b = document.createElement("button");
  b.type = "button"; b.className = "etichetta vertice"; b.dataset.n = v;
  b.setAttribute("aria-expanded", "false");
  b.innerHTML = '<span class="sposta"><span class="nome"></span><span class="sotto"></span></span>';
  b.querySelector(".nome").textContent = s.nome;
  b.querySelector(".sotto").textContent = s.sottotitolo;
  b.addEventListener("click", () => seleziona(v));
  $("etichette").appendChild(b); titoli[v] = b;
  PUNTI[v].forEach(n => {
    const voce = s.voci[n], e = document.createElement("button");
    e.type = "button"; e.className = "etichetta voce"; e.dataset.n = n;
    e.innerHTML = '<span class="img" aria-hidden="true"></span><span class="t"></span><span class="frase"><span class="ft"></span> <span class="fr" aria-hidden="true">→</span></span>';
    e.querySelector(".t").textContent = voce.titolo;
    if (voce.frase) e.querySelector(".ft").textContent = voce.frase; else e.querySelector(".frase").remove();
    if (IMMAGINI["carta" + n]) e.querySelector(".img").style.backgroundImage = `url("${IMMAGINI["carta" + n]}")`;
    e.addEventListener("click", () => apriPagina(n));
    $("etichette").appendChild(e); voci[n] = e;
    // stile 1, «medaglioni sui punti» (Luca, 13/10/2026): la foto della voce sta sul suo punto della figura
    const m = document.createElement("span");
    m.className = "medaglione"; m.dataset.n = n; m.setAttribute("aria-hidden", "true");
    m.addEventListener("click", () => apriPagina(n));
    m.addEventListener("pointerenter", () => e.classList.add("sopra"));
    m.addEventListener("pointerleave", () => e.classList.remove("sopra"));
    $("etichette").appendChild(m); medaglioni[n] = m;
    new MutationObserver(() => ["vista", "oro", "anteprima", "tenue"].forEach(c => m.classList.toggle(c, e.classList.contains(c))))
      .observe(e, { attributes: true, attributeFilter: ["class"] });
  });
  // passare sopra (o arrivarci col tasto Tab) mostra in anteprima le voci di quella parte
  [b, ...PUNTI[v].map(n => voci[n])].forEach(el => {
    el.addEventListener("pointerenter", ev => { if (ev.pointerType === "mouse") sopra(v); });
    el.addEventListener("pointerleave", ev => { if (ev.pointerType === "mouse") via(v); });
    el.addEventListener("focus", () => { if (el.matches(":focus-visible")) sopra(v); });
    el.addEventListener("blur", () => via(v));
  });
});

let vb = { x: 0, y: 0, s: 1000 };
const W = () => document.documentElement.clientWidth;
function posiziona(el) {
  const n = +el.dataset.n, d = dir(n), p = punto(n);
  const fx = (p.x - vb.x) / vb.s * 100, fy = (p.y - vb.y) / vb.s * 100;
  const med = MEDAGLIONI && el.classList.contains("voce") ? medaglioni[n] : null;
  if (med) { med.style.left = fx + "%"; med.style.top = fy + "%"; }
  const off = (el.classList.contains("vertice") ? 16 : 12) + distanzaEtichette + (med ? med.offsetWidth / 2 + 2 : 0);
  el.style.left = `calc(${fx}% + ${(d.x * off).toFixed(1)}px)`;
  el.style.top = `calc(${fy}% + ${(d.y * off).toFixed(1)}px)`;
  el.style.textAlign = d.x > 0.25 ? "left" : d.x < -0.25 ? "right" : "center";
  el.dataset.lato = d.x > 0.25 ? "s" : d.x < -0.25 ? "d" : "c";
  if (med) {
    // col medaglione sul punto la voce è solo il titolo, appena fuori dal medaglione
    el.style.flexDirection = "column";
    el.style.alignItems = d.x > 0.25 ? "flex-start" : d.x < -0.25 ? "flex-end" : "center";
    el.style.transform = `translate(${(-50 + 50 * d.x).toFixed(1)}%, ${(-50 + 50 * d.y).toFixed(1)}%)`;
  } else if (el.classList.contains("voce")) {
    // la carta della voce: l'immagine verso l'esterno, la scritta vicino al punto.
    // Sui lati (punti 2, 3, 6, 7), su uno schermo largo, immagine e scritta stanno affiancate: così non si accavallano
    const fila = W() >= 700 && Math.abs(d.y) < .6;
    if (fila) {
      el.style.flexDirection = d.x > 0 ? "row-reverse" : "row";
      el.style.alignItems = "center";
      el.style.transform = `translate(${d.x > 0 ? 0 : -100}%, -50%)`;
    } else {
      el.style.flexDirection = d.y > .6 ? "column-reverse" : "column";
      el.style.alignItems = d.x > 0.25 ? "flex-start" : d.x < -0.25 ? "flex-end" : "center";
      const ty = d.y > .6 ? "0%" : d.y < -.6 ? "-100%" : "calc(-100% + 13px)";
      // le due voci in basso (4 e 5) si scostano l'una dall'altra
      const tx = d.y > .6 ? (d.x > 0 ? -18 : -82) : -50 + 50 * d.x;
      el.style.transform = `translate(${tx.toFixed(1)}%, ${ty})`;
    }
  } else el.style.transform = `translate(${(-50 + 50 * d.x).toFixed(1)}%, ${(-50 + 50 * d.y).toFixed(1)}%)`;
  if (n === 9 && el.classList.contains("vertice")) el.style.maxWidth = "70vw";
  // mai fuori dallo schermo: se sborda, si sposta quanto basta. Ma solo a figura alla sua misura: mentre si
  // avvicina a un punto o torna indietro le misure sarebbero sbagliate, e si rifanno alla fine (12/10/2026)
  const fr = figura.getBoundingClientRect();
  if (figura.offsetWidth && Math.abs(fr.width / figura.offsetWidth - 1) > .01) { rimisura = true; return; }
  el.style.marginLeft = "0px";
  const r = el.getBoundingClientRect();
  let sp = 0;
  if (r.right > W() - 4) sp = W() - 4 - r.right;
  if (r.left + sp < 4) sp = 4 - r.left;
  el.style.marginLeft = sp + "px";
}

/* il titolo scivola via e lascia il punto alla sua voce:
   il 9 sale sopra la voce del 9, il 3 e il 6 scendono sotto la voce del loro punto */
function spostaTitolo(v, apri) {
  const t = titoli[v], dentro = t.querySelector(".sposta");
  t.classList.toggle("aperta", apri);
  if (!apri) { dentro.style.transform = ""; dentro.dataset.dx = dentro.dataset.dy = 0; return; }
  const nome = t.querySelector(".nome"), sub = voci[v];
  // posizione del nome da fermo, letta dal bottone (che non si muove), anche a metà di uno scivolamento
  const bt = t.getBoundingClientRect(), st = getComputedStyle(t);
  const l0 = bt.left + parseFloat(st.paddingLeft), t0 = bt.top + parseFloat(st.paddingTop);
  const fermo = { l: l0, r: l0 + nome.offsetWidth, t: t0, b: t0 + nome.offsetHeight };
  const s = sub.getBoundingClientRect(), pad = parseFloat(getComputedStyle(sub).paddingLeft) || 0;
  let dx, dy;
  if (v === 9) { dx = (s.left + s.right) / 2 - (fermo.l + fermo.r) / 2; dy = s.top - 14 - fermo.b; }
  else if (v === 3) { dx = s.left + pad - fermo.l; dy = s.bottom + 12 - fermo.t; }
  else { dx = s.right - pad - fermo.r; dy = s.bottom + 12 - fermo.t; }
  // senza immagini la voce del lato è più bassa e il titolo, scendendo, può finire sulla voce del punto vicino
  // (Formazione su Residenziale, Approfondire su Podcast): allora si scosta di lato quanto basta (12/10/2026)
  if (v !== 9) {
    const vic = voci[v === 3 ? 4 : 5].querySelector(".t").getBoundingClientRect(), m = 10;
    const w = (fermo.r - fermo.l) * 1.1, h = (fermo.b - fermo.t) * 1.1, T = fermo.t + dy, B = T + h;
    const L = v === 3 ? fermo.l + dx : fermo.r + dx - w, R = L + w;
    if (!(R < vic.left - m || L > vic.right + m || B < vic.top - m || T > vic.bottom + m))
      dx += v === 3 ? vic.right + m - L : vic.left - m - R;
  }
  if (fermo.r + dx > W() - 4) dx = W() - 4 - fermo.r;
  if (fermo.l + dx < 4) dx = 4 - fermo.l;
  dentro.dataset.dx = dx; dentro.dataset.dy = dy;
  dentro.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
}

/* ---------- stato ---------- */
let scelto = null, hover = null, tVia = null, pronto = false;
let opzione = "1";
// le immagini delle voci: tolte il 12/10/2026 dopo il parere di Mauro («no»); «sì» sono quelle di prima;
// poi tre proposte omogenee chieste da Luca lo stesso giorno. Si sceglie dalla barra delle prove o con ?immagini=
const MODI_IMMAGINI = [["no", "no · come chiede Mauro"], ["si", "sì · come prima"], ["foto", "Foto in petrolio e oro"], ["luce", "Punti di luce"], ["segni", "Segni incisi"]];
/* i segni: Phosphor Icons (phosphoricons.com), peso «thin», licenza MIT */
const SEGNI = {
  1: "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M100,104a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H104A4,4,0,0,1,100,104Zm4,36h64a4,4,0,0,0,0-8H104a4,4,0,0,0,0,8Zm124,52a28,28,0,0,1-28,28H88a28,28,0,0,1-28-28V64a20,20,0,0,0-40,0c0,7.78,6.34,12.75,6.4,12.8a4,4,0,1,1-4.8,6.4C21.21,82.91,12,75.86,12,64A28,28,0,0,1,40,36H176a28,28,0,0,1,28,28V172h12a4,4,0,0,1,2.4.8C218.79,173.09,228,180.14,228,192Zm-120,0c0-7.78-6.34-12.75-6.4-12.8A4,4,0,0,1,104,172h92V64a20,20,0,0,0-20-20H59.57A27.9,27.9,0,0,1,68,64V192a20,20,0,0,0,40,0Zm112,0c0-6-3.74-10.3-5.5-12H112.61A23.31,23.31,0,0,1,116,192a27.94,27.94,0,0,1-8.42,20H200A20,20,0,0,0,220,192Z\"/></svg>",
  2: "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M232,52H160a36,36,0,0,0-32,19.54A36,36,0,0,0,96,52H24a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H96a28,28,0,0,1,28,28,4,4,0,0,0,8,0,28,28,0,0,1,28-28h72a4,4,0,0,0,4-4V56A4,4,0,0,0,232,52ZM96,196H28V60H96a28,28,0,0,1,28,28V209.4A35.93,35.93,0,0,0,96,196Zm132,0H160a35.94,35.94,0,0,0-28,13.41V88a28,28,0,0,1,28-28h68Z\"/></svg>",
  3: "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M244,56a4,4,0,0,1-4,4H188v44a4,4,0,0,1-4,4H132v44a4,4,0,0,1-4,4H76v44a4,4,0,0,1-4,4H16a4,4,0,0,1,0-8H68V152a4,4,0,0,1,4-4h52V104a4,4,0,0,1,4-4h52V56a4,4,0,0,1,4-4h56A4,4,0,0,1,244,56Z\"/></svg>",
  4: "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M240,212H220V126.34l9.17,9.17a4,4,0,1,0,5.66-5.66L136.49,31.51a12,12,0,0,0-17,0L21.17,129.85a4,4,0,1,0,5.66,5.66L36,126.34V212H16a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8ZM44,118.34l81.17-81.17a4,4,0,0,1,5.66,0L212,118.34V212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44ZM148,212H108V156h40Z\"/></svg>",
  5: "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M128,172a44.05,44.05,0,0,0,44-44V64a44,44,0,0,0-88,0v64A44.05,44.05,0,0,0,128,172ZM92,64a36,36,0,0,1,72,0v64a36,36,0,0,1-72,0Zm40,139.89V240a4,4,0,0,1-8,0V203.89A76.09,76.09,0,0,1,52,128a4,4,0,0,1,8,0,68,68,0,0,0,136,0,4,4,0,0,1,8,0A76.09,76.09,0,0,1,132,203.89Z\"/></svg>",
  6: "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M230.32,117.9,86.24,29.79a11.91,11.91,0,0,0-12.17-.23A11.71,11.71,0,0,0,68,39.89V216.11a11.71,11.71,0,0,0,6.07,10.33,11.91,11.91,0,0,0,12.17-.23L230.32,138.1a11.82,11.82,0,0,0,0-20.2Zm-4.18,13.37L82.06,219.39a4,4,0,0,1-4.07.07,3.77,3.77,0,0,1-2-3.35V39.89a3.77,3.77,0,0,1,2-3.35,4,4,0,0,1,4.07.07l144.08,88.12a3.8,3.8,0,0,1,0,6.54Z\"/></svg>",
  7: "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M244,92.68a11.93,11.93,0,0,0-3.51-8.48L171.8,15.51a12,12,0,0,0-17,0L125.78,44.56,66.92,66.63a12.06,12.06,0,0,0-7.63,9.26L36.05,215.34A4,4,0,0,0,40,220a4.89,4.89,0,0,0,.66-.05L180.1,196.7a12,12,0,0,0,9.27-7.62l22.07-58.86,29-29A11.92,11.92,0,0,0,244,92.68Zm-62.12,93.59a4,4,0,0,1-3.09,2.54L51.66,210l58.45-58.45a24,24,0,1,0-5.66-5.66L46,204.35,67.19,77.21a4,4,0,0,1,2.54-3.09L127,52.64,203.35,129ZM108,132a16,16,0,1,1,16,16A16,16,0,0,1,108,132ZM234.83,95.51,208,122.34,133.66,48l26.82-26.82a4,4,0,0,1,5.66,0l68.69,68.69a4,4,0,0,1,0,5.65Z\"/></svg>",
  8: "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M211.56,121.82a4,4,0,1,0-7.12-3.64,84.05,84.05,0,0,1-38.58,37.16l-19.68-44.29A36,36,0,0,0,132,44.23V24a4,4,0,0,0-8,0V44.23a36,36,0,0,0-14.18,66.82L60.35,222.37a4,4,0,0,0,2,5.28A3.88,3.88,0,0,0,64,228a4,4,0,0,0,3.66-2.38l26.66-60A91.4,91.4,0,0,0,128,172a95.21,95.21,0,0,0,33.75-6.22l26.59,59.84A4,4,0,0,0,192,228a3.88,3.88,0,0,0,1.62-.35,4,4,0,0,0,2-5.28l-26.54-59.73A92,92,0,0,0,211.56,121.82ZM100,80a28,28,0,1,1,28,28A28,28,0,0,1,100,80Zm28,84a83.43,83.43,0,0,1-30.43-5.68l19.56-44a36,36,0,0,0,21.74,0l19.63,44.15A87.44,87.44,0,0,1,128,164Z\"/></svg>",
  9: "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M170.9,54.24a216.79,216.79,0,0,0-40.84-33.67,4,4,0,0,0-4.12,0A216.79,216.79,0,0,0,85.1,54.24C58.21,82.48,44,113.51,44,144a84,84,0,0,0,168,0C212,113.51,197.79,82.48,170.9,54.24ZM92,184c0-32.11,28.07-53.75,36-59.21,7.93,5.47,36,27.1,36,59.21a36,36,0,0,1-72,0Zm69.94,28A43.82,43.82,0,0,0,172,184c0-41.78-40.23-66.4-41.94-67.43a4,4,0,0,0-4.12,0C124.23,117.6,84,142.22,84,184a43.82,43.82,0,0,0,10.06,28A76.07,76.07,0,0,1,52,144c0-62.48,63.64-107.17,76-115.26,12.36,8.09,76,52.78,76,115.26A76.07,76.07,0,0,1,161.94,212Z\"/></svg>"
};
// Luca, 12/10/2026 sera: «tieni il format foto in petrolio e oro»: è la scelta di base
let immagini = new URLSearchParams(location.search).get("immagini") || "foto";
if (!MODI_IMMAGINI.some(m => m[0] === immagini)) immagini = "no";
function sorgenteImmagine(n) {
  const altre = typeof IMMAGINI_VOCI === "object" ? IMMAGINI_VOCI : {};
  return immagini === "si" ? IMMAGINI["carta" + n] : immagini === "foto" || immagini === "luce" ? altre[immagini + n] : null;
}
function vestiImmagine(el, n) {
  const src = sorgenteImmagine(n);
  el.style.backgroundImage = src ? `url("${src}")` : "";
  el.innerHTML = immagini === "segni" ? SEGNI[n] : "";
}
function applicaImmagini() {
  document.documentElement.dataset.immagini = immagini;
  document.documentElement.classList.toggle("senza-immagini", immagini === "no");
  Object.keys(voci).forEach(n => vestiImmagine(voci[n].querySelector(".img"), +n));
  Object.keys(medaglioni).forEach(n => vestiImmagine(medaglioni[n], +n));
  strisciaDi = null;
  riempiStriscia();
}
function scegliImmagini(m) {
  immagini = m;
  applicaImmagini();
  adatta();
}
try { if (localStorage.getItem(CHIAVE_OPZIONE) === "2") opzione = "2"; } catch (e) {}

let strisciaDi = null;
function riempiStriscia() {
  if (strisciaDi === scelto || scelto === null) return;
  strisciaDi = scelto;
  const st = $("striscia"); st.textContent = "";
  PUNTI[scelto].forEach(n => {
    const b = document.createElement("button"); b.type = "button"; b.tabIndex = -1;
    const f = document.createElement("span"); f.className = "foto";
    vestiImmagine(f, n);
    const t = document.createElement("span"); t.textContent = TESTI.sezioni[scelto].voci[n].titolo;
    b.append(f, t); b.addEventListener("click", () => apriPagina(n));
    st.appendChild(b);
  });
}
applicaImmagini();
function aggiorna() {
  corpo.classList.toggle("scelto", scelto !== null);
  riempiStriscia();
  VERTICI.forEach(v => {
    const mia = scelto === v;
    const anteprima = pronto && hover === v && !mia;
    const aperta = pronto && (mia || anteprima || (opzione === "1" && scelto !== null));
    const tenue = scelto !== null && !mia;
    const t = titoli[v];
    t.classList.toggle("tenue", tenue);
    t.classList.toggle("scelta", mia);
    t.classList.toggle("anteprima", anteprima);
    t.setAttribute("aria-expanded", mia ? "true" : "false");
    PUNTI[v].forEach((n, i) => {
      const e = voci[n], eraVista = e.classList.contains("vista");
      // le voci si accendono una dopo l'altra, ma si possono raggiungere subito col tasto Tab
      if (aperta && !eraVista) e.style.transition = `opacity .6s ${n === v ? 0 : 140 + i * 60}ms, color .3s, visibility 0s`;
      if (!aperta) e.style.transition = "";
      e.classList.toggle("vista", aperta);
      e.classList.toggle("oro", mia);
      e.classList.toggle("tenue", !mia);
      e.classList.toggle("anteprima", anteprima);
      dots[n].classList.toggle("oro", mia);
      dots[n].classList.toggle("anteprima", anteprima);
    });
    spostaTitolo(v, aperta);
  });
}

// passare sopra una parte non mostra più in anteprima le sue voci (Luca, 11/10/2026): si vedono solo dopo il clic
function sopra(v) {
  clearTimeout(tVia);
}
function via(v) {
  clearTimeout(tVia);
  tVia = setTimeout(() => { if (hover === v) { hover = null; aggiorna(); } }, 220);
}

let rimisura = false;
function adatta() {
  // con la figura ingrandita verso un punto (pagina aperta) le misure verrebbero sbagliate: si rifanno al ritorno
  if (figura.style.transform) { rimisura = true; return; }
  rimisura = false;
  const _fr = figura.getBoundingClientRect();
  if (figura.offsetWidth && Math.abs(_fr.width / figura.offsetWidth - 1) > .01) { rimisura = true; return; }
  const stretto = figura.clientWidth < 600;
  vb = stretto ? { x: -100, y: -100, s: 1200 } : { x: 0, y: 0, s: 1000 };
  svg.setAttribute("viewBox", `${vb.x} ${vb.y} ${vb.s} ${vb.s}`);
  const u = vb.s / figura.clientWidth;
  figura.style.setProperty("--u", u.toFixed(3));
  figura.style.setProperty("--fig", figura.clientWidth + "px");
  figura.style.setProperty("--maxw", stretto ? "31vw" : "230px");
  for (let n = 1; n <= 9; n++) dots[n].setAttribute("r", (VERTICI.includes(n) ? 3.6 : 2.8) * u);
  $("penna").setAttribute("r", 3 * u);
  Object.values(voci).forEach(posiziona);
  Object.values(titoli).forEach(posiziona);
  aggiorna();
  emetti("adatta", u, stretto);
}
new ResizeObserver(adatta).observe(figura);
figura.addEventListener("transitionend", e => { if (e.target === figura && e.propertyName === "transform" && rimisura && !figura.style.transform) adatta(); });
if (document.fonts && document.fonts.ready) document.fonts.ready.then(adatta);

const suggerisci = t => { const s = $("suggerimento"); s.textContent = t || ""; s.classList.toggle("visto", !!t); };
const avanzaTri = l => TRIANGOLO.slice(0, 3).forEach((v, i) => titoli[v].classList.toggle("vista", l >= trTri.cum[i] - 0.5));

/* scegliere una parte: le sue tre voci in oro; l'esade si traccia dal punto che segue il vertice */
// l'esade si forma una volta sola, alla prima parte scelta, partendo dal punto che segue il suo vertice;
// poi scegliendo un'altra parte cambiano solo i colori dei punti (Luca, 11/10/2026)
let esadeAvviata = false;
async function seleziona(v) {
  if (!pronto || scelto === v) return;
  scelto = v; hover = null; aggiorna(); suggerisci(TESTI.sceltaVoce);
  if (esadeAvviata) return;
  esadeAvviata = true;
  const mio = ++giro;
  trEsa = tracciato($("esa"), ESADE[v]);
  await anima(trEsa, trEsa.tot, VELOCITA, mio);
}

async function alCentro() {
  if (scelto === null) return;
  const prima = scelto;
  const focoDentro = figura.contains(document.activeElement);
  scelto = null; hover = null; aggiorna(); suggerisci(TESTI.sceltaVertice);
  if (focoDentro) titoli[prima].focus({ preventScroll: true });
}

/* ---------- le pagine: un clic su una voce (o sul suo punto) avvicina la figura a quel punto e apre la pagina ---------- */
const pagina = $("pagina");
let paginaAperta = null, origine = null, ultimaPagina = null;
const crea_ = (tag, cls, testo) => { const e = document.createElement(tag); if (cls) e.className = cls; if (testo != null) e.textContent = testo; return e; };
// la chiave di un'immagine del prototipo, oppure l'indirizzo di un'immagine del sito (le uscite nuove)
const sfondo = (e, chiave) => { const u = IMMAGINI[chiave] || (/^https?:\/\//.test(chiave) ? chiave : ""); if (u) e.style.backgroundImage = `url("${u}")`; return e; };
const nomeDi = n => TESTI.sezioni[sezioneDi(n)].voci[n].titolo;

// il piccolo enneagramma in alto nella pagina, col punto acceso
function emblema(n) {
  const s = document.createElementNS(NS, "svg");
  s.setAttribute("viewBox", "0 0 1000 1000"); s.setAttribute("aria-hidden", "true");
  const c = document.createElementNS(NS, "circle"); c.setAttribute("class", "c"); c.setAttribute("cx", C); c.setAttribute("cy", C); c.setAttribute("r", R); s.appendChild(c);
  [TRIANGOLO, ESADE[9]].forEach(seq => { const p = document.createElementNS(NS, "path"); p.setAttribute("d", "M" + seq.map(punto).map(q => q.x + " " + q.y).join(" L")); s.appendChild(p); });
  for (let k = 1; k <= 9; k++) {
    const q = punto(k), d = document.createElementNS(NS, "circle");
    d.setAttribute("class", "p" + (k === n ? " qui" : "")); d.setAttribute("cx", q.x); d.setAttribute("cy", q.y); d.setAttribute("r", k === n ? 62 : 34);
    s.appendChild(d);
  }
  return s;
}

function blocco(b) {
  const sez = crea_("section", "pg-blocco");
  if (b.titolo) sez.appendChild(crea_("h2", null, b.titolo));
  if (b.tipo === "testo") b.testo.forEach(t => sez.appendChild(crea_("p", null, t)));
  if (b.tipo === "nota") sez.appendChild(crea_("p", "pg-nota", b.testo));
  if (b.tipo === "citazione") sez.appendChild(crea_("blockquote", "pg-citazione", b.testo));
  if (b.tipo === "tappe") {
    const ol = crea_("ol", "pg-tappe");
    b.voci.forEach(v => {
      const li = crea_("li");
      if (v.va) { const bt = crea_("button", null, v.titolo); bt.type = "button"; bt.addEventListener("click", () => apriPagina(v.va, { dalla: true })); li.appendChild(bt); }
      else li.appendChild(crea_("b", null, v.titolo));
      li.appendChild(crea_("span", null, v.testo)); ol.appendChild(li);
    });
    sez.appendChild(ol);
  }
  if (b.tipo === "persone" || b.tipo === "corsi") {
    const g = crea_("div", "pg-due");
    b.voci.forEach(v => {
      const a = crea_("article", "pg-carta");
      a.appendChild(sfondo(crea_("div", "foto"), v.img));
      const d = crea_("div", "dentro");
      if (v.ruolo) d.appendChild(crea_("span", "ruolo", v.ruolo));
      d.appendChild(crea_("h3", null, v.nome || v.titolo));
      (Array.isArray(v.testo) ? v.testo : [v.testo]).forEach(t => d.appendChild(crea_("p", null, t)));
      if (v.dettagli) { const ul = crea_("ul"); v.dettagli.forEach(t => ul.appendChild(crea_("li", null, t))); d.appendChild(ul); }
      if (v.link) { const l = crea_("a", "pg-link", v.link[0] + " →"); l.href = v.link[1]; l.target = "_blank"; l.rel = "noopener"; d.appendChild(l); }
      a.appendChild(d); g.appendChild(a);
    });
    sez.appendChild(g);
  }
  if (b.tipo === "elenco") {
    const ul = crea_("ul", "pg-elenco");
    b.voci.forEach(([sigla, titolo, quando, id]) => {
      const li = crea_("li"), a = crea_("a"); a.href = "https://www.youtube.com/watch?v=" + id; a.target = "_blank"; a.rel = "noopener";
      a.append(crea_("span", "sigla", sigla), crea_("span", "titolo", titolo), crea_("span", "quando", quando));
      li.appendChild(a); ul.appendChild(li);
    });
    sez.appendChild(ul);
  }
  if (b.tipo === "griglia") {
    const g = crea_("div", "pg-griglia");
    b.voci.forEach(([titolo, quando, id, img]) => {
      const a = crea_("a"); a.href = "https://www.youtube.com/watch?v=" + id; a.target = "_blank"; a.rel = "noopener";
      a.append(sfondo(crea_("div", "foto"), img || "v-" + id), crea_("span", "titolo", titolo), crea_("span", "quando", quando));
      g.appendChild(a);
    });
    sez.appendChild(g);
  }
  if (b.tipo === "scritti") {
    const g = crea_("div", "pg-scritti");
    b.voci.forEach(([titolo, quando, testo, img, link]) => {
      const a = crea_("article"), d = crea_("div"), h = crea_("h3");
      if (link) { const l = crea_("a", null, titolo); l.href = link; l.target = "_blank"; l.rel = "noopener"; h.appendChild(l); } else h.textContent = titolo;
      d.append(h, crea_("p", "quando", quando), crea_("p", null, testo));
      a.append(sfondo(crea_("div", "foto"), /^https?:/.test(img) ? img : "a-" + img), d); g.appendChild(a);
    });
    sez.appendChild(g);
  }
  if (b.tipo === "partenza") {
    if (!PARTENZA.length) {
      sez.appendChild(crea_("p", null, "In questo momento non ci sono corsi in partenza."));
      const p = crea_("p", "pg-nota", "Per sapere quando se ne apre uno, scrivici: "), a = crea_("a", "pg-link", "contatti");
      a.href = "#contatti"; a.addEventListener("click", e => { e.preventDefault(); apriPagina("contatti", { dalla: true }); });
      p.appendChild(a); sez.appendChild(p);
    } else {
      const g = crea_("div", "pg-due pg-partenza");
      PARTENZA.forEach(c => {
        const a = crea_("article", "pg-carta");
        const f = crea_("div", "foto"); if (c.img) f.style.backgroundImage = `url("${c.img}")`; else f.classList.add("vuota");
        a.appendChild(f);
        const d = crea_("div", "dentro");
        d.appendChild(crea_("span", "ruolo", c.quando || "In partenza"));
        d.appendChild(crea_("h3", null, c.titolo));
        if (c.riassunto) d.appendChild(crea_("p", null, c.riassunto));
        const det = [c.orario, c.dove, c.posti, c.prezzo, c.fino && "Iscrizioni fino al " + c.fino].filter(Boolean);
        if (det.length) { const ul = crea_("ul"); det.forEach(t => ul.appendChild(crea_("li", null, t))); d.appendChild(ul); }
        const l = crea_("a", "pg-link", "Scopri il corso e iscriviti →"); l.href = c.url; l.target = "_blank"; l.rel = "noopener"; d.appendChild(l);
        a.appendChild(d); g.appendChild(a);
      });
      sez.appendChild(g);
    }
  }
  if (b.tipo === "contatti") {
    const g = crea_("div", "pg-contatti");
    b.voci.forEach(([titolo, valore, terzo]) => {
      const d = crea_("div"); d.appendChild(crea_("h3", null, titolo));
      if (/^https?:/.test(terzo)) { const a = crea_("a", "valore pg-link", valore); a.href = terzo; a.target = "_blank"; a.rel = "noopener"; d.appendChild(a); }
      else { d.appendChild(crea_("div", "valore", valore)); d.appendChild(crea_("p", null, terzo)); }
      g.appendChild(d);
    });
    sez.appendChild(g);
  }
  return sez;
}

function riempiPagina(chiave) {
  const P = PAGINE[chiave], n = typeof chiave === "number" ? chiave : null;
  const dentro = $("pg-dentro"); dentro.textContent = "";
  const torna = $("pg-torna"); torna.querySelector("svg") && torna.querySelector("svg").remove(); torna.prepend(emblema(n));
  if (n !== null) {
    const v = sezioneDi(n);
    dentro.appendChild(crea_("p", "pg-occhiello", `${TESTI.sezioni[v].nome} · 0${PUNTI[v].indexOf(n) + 1} / 03`));
  }
  const h = crea_("h1", "pg-titolo", n !== null ? nomeDi(n) : P.titolo); h.id = "pg-titolo"; h.tabIndex = -1; dentro.appendChild(h);
  if (P.apertura) dentro.appendChild(crea_("p", "pg-apertura", P.apertura));
  if (n !== null && !P.senzaTestata && IMMAGINI["testata" + n]) dentro.appendChild(sfondo(crea_("div", "pg-testata" + (n === 1 || n === 8 ? " contieni" : "")), "testata" + n));
  P.blocchi.forEach(b => dentro.appendChild(blocco(b)));
  if (P.azione) { const a = crea_("a", "pg-azione", P.azione[0] + " "); a.append(crea_("span", null, "→")); a.href = P.azione[1]; a.target = "_blank"; a.rel = "noopener"; dentro.appendChild(a); }
  if (n !== null) {
    // in fondo, il punto prima e il punto dopo lungo il cerchio
    const piede = crea_("nav", "pg-piede"); piede.setAttribute("aria-label", "Pagina prima e dopo");
    [[n === 1 ? 9 : n - 1, "← Prima"], [n === 9 ? 1 : n + 1, "Dopo →"]].forEach(([k, et]) => {
      const b = crea_("button"); b.type = "button"; b.append(crea_("small", null, et), crea_("b", null, nomeDi(k)));
      b.addEventListener("click", () => apriPagina(k, { dalla: true }));
      piede.appendChild(b);
    });
    dentro.appendChild(piede);
  }
}

function zoomVerso(n) {
  const p = punto(n), w = figura.clientWidth;
  const fx = (p.x - vb.x) / vb.s * w, fy = (p.y - vb.y) / vb.s * w;
  const r = figura.getBoundingClientRect();
  const dx = innerWidth / 2 - (r.left + fx), dy = innerHeight / 2 - (r.top + fy);
  figura.style.transformOrigin = `${fx}px ${fy}px`;
  figura.style.transition = "transform 1.05s cubic-bezier(.65,0,.25,1), opacity .45s .6s";
  figura.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px) scale(5)`;
  figura.style.opacity = "0";
}

// sul sito (dentro WordPress) le voci con una pagina loro ci vanno dritte: niente riquadro in mezzo (Luca, 12/10/2026)
const SUL_SITO = !!(window.ACCADEMIA_HOME && window.ACCADEMIA_HOME.sito);
function vaiAlSito(percorso) {
  if (typeof window.AE_VAI === "function") return window.AE_VAI(percorso);
  location.href = window.ACCADEMIA_HOME.sito + percorso;
}

async function apriPagina(chiave, { dalla = false } = {}) {
  const n = typeof chiave === "number" ? chiave : null;
  if (!PAGINE[chiave]) return;
  if (SUL_SITO && PAGINE[chiave].sito) {
    if (n !== null && !ridotto.matches && figura.offsetParent && !paginaAperta) {
      corpo.classList.add("zoom");
      zoomVerso(n);
      await attesa(650);
    }
    vaiAlSito(PAGINE[chiave].sito);
    return;
  }
  if (!paginaAperta) origine = document.activeElement;
  if (n !== null) { const v = sezioneDi(n); if (scelto !== v && pronto) { scelto = v; hover = null; aggiorna(); suggerisci(TESTI.sceltaVoce); } }
  const prima = paginaAperta;
  paginaAperta = chiave; ultimaPagina = chiave;
  emetti("pagina", n);
  try { history.replaceState(null, "", location.pathname + location.search + "#" + PAGINE[chiave].slug); } catch (e) {}
  if (prima !== null && dalla) {
    // da una pagina all'altra: la pagina sfuma e torna con il punto nuovo
    pagina.classList.remove("aperta");
    await attesa(320);
    riempiPagina(chiave); pagina.scrollTop = 0;
    pagina.classList.add("aperta");
  } else {
    riempiPagina(chiave); pagina.scrollTop = 0;
    if (n !== null && !ridotto.matches && figura.offsetParent) {
      corpo.classList.add("zoom");
      zoomVerso(n);
      await attesa(820);
    }
    pagina.hidden = false; void pagina.offsetWidth;
    pagina.classList.add("aperta");
  }
  if (paginaAperta === chiave) $("pg-titolo").focus({ preventScroll: true });
}

function chiudiPagina(rendiFuoco = true) {
  if (paginaAperta === null) return;
  paginaAperta = null;
  pagina.classList.remove("aperta");
  setTimeout(() => { if (paginaAperta === null) pagina.hidden = true; }, 520);
  figura.style.transition = "transform .9s cubic-bezier(.3,0,.2,1) .1s, opacity .5s .1s";
  figura.style.transform = ""; figura.style.opacity = "";
  const chiusa = ultimaPagina;
  setTimeout(() => {
    if (paginaAperta !== null) return;
    corpo.classList.remove("zoom"); figura.style.transition = ""; figura.style.transformOrigin = "";
    if (rimisura) adatta();
    // se la pagina si era aperta dall'indirizzo prima che la figura fosse pronta, la sua parte si sceglie ora
    if (typeof chiusa === "number" && pronto && scelto === null) seleziona(sezioneDi(chiusa));
  }, 1000);
  emetti("ritorno");
  try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {}
  if (rendiFuoco && origine && origine.isConnected) origine.focus({ preventScroll: true });
  origine = null;
}

// la pagina chiesta dall'indirizzo (#il-metodo…); i nomi vecchi portano alle pagine che li hanno presi (12/10/2026)
const VECCHI_INDIRIZZI = { "percorso-di-certificazione": "residenziale", "video": "podcast", "il-metodo": "l-enneagramma" };
function chiaveDaIndirizzo() {
  let h = decodeURIComponent(location.hash.slice(1));
  h = VECCHI_INDIRIZZI[h] || h;
  return Object.keys(PAGINE).find(x => PAGINE[x].slug === h);
}

/* ---------- ingresso ---------- */
function ricorda() { try { localStorage.setItem(CHIAVE, "1"); } catch (e) {} }
function giaVisto() { try { return localStorage.getItem(CHIAVE) === "1"; } catch (e) { return false; } }
const attesa = ms => new Promise(r => setTimeout(r, ridotto.matches ? 0 : ms));

async function entra(diretto = false) {
  const mio = ++giro;
  ricorda();
  emetti("entra", diretto);
  $("entra").classList.add("via");
  if (diretto) {
    corpo.classList.add("subito", "brand", "punti");
    void corpo.offsetWidth;
    corpo.classList.remove("subito");
    await attesa(400);
  } else {
    corpo.classList.add("brand");
    await attesa(1100); if (mio !== giro) return;
    corpo.classList.add("punti");
    await attesa(1300);
  }
  if (mio !== giro) return;
  // se una pagina è già aperta (indirizzo con #…), il triangolo dietro di lei c'è già: niente disegno nascosto
  const subito = async m => { const da = trTri.fatto; trTri.imposta(trTri.tot); avanzaTri(trTri.tot); TRIANGOLO.forEach(v => emetti("punto", v, trTri)); if (da < trTri.tot) emetti("chiuso", trTri); return m === giro; };
  corpo.classList.add("triangolo");
  const disegna = paginaAperta !== null ? subito : (sostituisci.triangolo || (m => anima(trTri, trTri.tot, VELOCITA, m, avanzaTri)));
  if (!(await disegna(mio))) return;
  pronto = true; corpo.classList.add("pronto");
  suggerisci(TESTI.sceltaVertice);
}

function rivedi() {
  ++giro;
  chiudiPagina(false);
  pronto = false; scelto = null; hover = null;
  corpo.classList.remove("brand", "punti", "pronto", "triangolo");
  aggiorna(); suggerisci("");
  if (trEsa) trEsa.imposta(0);
  esadeAvviata = false;
  trTri.imposta(0); avanzaTri(-1);
  $("penna").classList.remove("attiva");
  $("entra").classList.remove("via");
  emetti("rivedi");
  setTimeout(() => $("entra").focus({ preventScroll: true }), 50);
}

function scegliOpzione(o) {
  opzione = o;
  try { localStorage.setItem(CHIAVE_OPZIONE, o); } catch (e) {}
  document.querySelectorAll("#varianti button").forEach(b => b.setAttribute("aria-pressed", b.dataset.v === o ? "true" : "false"));
  aggiorna();
}

/* ---------- eventi ---------- */
$("entra").addEventListener("click", () => entra(false));
$("centro").addEventListener("click", alCentro);
$("rivedi").addEventListener("click", rivedi);
$("pg-torna").addEventListener("click", () => chiudiPagina());
addEventListener("hashchange", () => {
  const k = chiaveDaIndirizzo();
  if (k) { const c = isNaN(+k) ? k : +k; if (paginaAperta !== c) apriPagina(c, { dalla: paginaAperta !== null }); }
  else if (paginaAperta !== null) chiudiPagina(false);
});
document.querySelectorAll("#varianti button").forEach(b => b.addEventListener("click", () => scegliOpzione(b.dataset.v)));
addEventListener("pageshow", e => {
  if (!e.persisted) return;
  if (!chiaveDaIndirizzo() && paginaAperta !== null) chiudiPagina(false);
  else if (paginaAperta === null) { figura.style.transform = ""; figura.style.opacity = ""; corpo.classList.remove("zoom"); adatta(); }
});
$("link-contatti").addEventListener("click", e => {
  e.preventDefault();
  apriPagina("contatti");
});
document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  if (paginaAperta !== null) chiudiPagina();
  else if (scelto !== null) alCentro();
});

// si parte dopo che gli stili di prova (blocco qui sotto) si sono agganciati;
// togliendo quel blocco, basta chiamare avvio() qui
function avvio() {
  scegliOpzione(opzione);
  adatta();
  // un indirizzo con #il-metodo, #podcast… apre subito quella pagina
  const k = chiaveDaIndirizzo();
  if (k) apriPagina(isNaN(+k) ? k : +k);
  if (giaVisto()) entra(true);
}


/* ===== PROVE DI STILE: ogni stile ha attiva() e spegni(), e si aggancia ai ganci della struttura ===== */
const SVG = $("disegno");
const crea = (tag, attrs = {}, padre) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (padre) padre.appendChild(e); return e; };
const defs = crea("defs"); SVG.insertBefore(defs, SVG.firstChild);
const lenti = () => ridotto.matches;
function aggiungiCopia(sorgente, copia) {
  (sorgente._copie = sorgente._copie || []).push(copia);
  if (sorgente.getAttribute("d")) copia.setAttribute("d", sorgente.getAttribute("d"));
  copia.style.strokeDasharray = sorgente.style.strokeDasharray;
  copia.style.strokeDashoffset = sorgente.style.strokeDashoffset;
}
function togliCopie(gruppo) {
  [$("tri"), $("esa")].forEach(s => { if (s._copie) s._copie = s._copie.filter(c => !gruppo.contains(c)); });
  gruppo.remove();
}
function aggancia(nome, f) { ganci[nome].add(f); return () => ganci[nome].delete(f); }
// numeri pseudo-casuali sempre uguali, così il fascio è sempre lo stesso
const caso = seme => () => (seme = (seme * 16807) % 2147483647) / 2147483647;

const STILI = {

  /* A. Fasci di linee: ogni tratto è un fascio di linee sottili sfalsate che si tracciano insieme */
  A: {
    nome: "Fasci di linee",
    attiva() {
      const r = caso(9);
      this.gruppi = [];
      [["tri", 30], ["esa", 26]].forEach(([id, n]) => {
        const src = $(id), g = crea("g", { class: "fascio fascio-" + id });
        SVG.insertBefore(g, src);
        for (let i = 0; i < n; i++) {
          const c = crea("path", {}, g);
          const dx = (r() - .5) * 14, dy = (r() - .5) * 14, rot = (r() - .5) * 2.6, sc = 1 + (r() - .5) * .04;
          c.setAttribute("transform", `translate(${dx.toFixed(2)} ${dy.toFixed(2)}) rotate(${rot.toFixed(3)} 500 500) translate(500 500) scale(${sc.toFixed(4)}) translate(-500 -500)`);
          c.style.opacity = (.05 + r() * .26).toFixed(2);
          aggiungiCopia(src, c);
        }
        this.gruppi.push(g);
      });
      const gc = crea("g", { class: "fascio fascio-cerchio" });
      document.querySelector(".cerchio-g").appendChild(gc);
      for (let i = 0; i < 32; i++) {
        crea("circle", { cx: (500 + (r() - .5) * 12).toFixed(2), cy: (500 + (r() - .5) * 12).toFixed(2), r: (R + (r() - .5) * 18).toFixed(2) }, gc).style.opacity = (.05 + r() * .24).toFixed(2);
      }
      this.gruppi.push(gc);
    },
    spegni() { this.gruppi.forEach(togliCopie); }
  },

  /* B. Luce che si accende: quando un tratto si chiude si accende; lampi sui punti; la stanza si illumina dal centro */
  B: {
    nome: "Luce che si accende",
    attiva() {
      const f = crea("filter", { id: "ae-bagliore", x: "-20%", y: "-20%", width: "140%", height: "140%" }, defs);
      crea("feGaussianBlur", { stdDeviation: "7" }, f);
      this.filtro = f;
      this.aloni = {};
      ["tri", "esa"].forEach(id => {
        const src = $(id), g = crea("g", { class: "alone alone-" + id, filter: "url(#ae-bagliore)" });
        SVG.insertBefore(g, src);
        aggiungiCopia(src, crea("path", {}, g));
        this.aloni[id] = g;
      });
      this.lampi = crea("g", { class: "lampi" }, SVG);
      this.via = [
        aggancia("chiuso", tr => {
          if (lenti()) { this.aloni[tr.el.id].style.opacity = .38; return; }
          const g = this.aloni[tr.el.id];
          g.classList.remove("acceso"); void g.getBBox(); g.classList.add("acceso");
          if (tr.el.id === "tri") { const o = crea("circle", { class: "onda", cx: 500, cy: 500, r: R, "stroke-width": 1.4 * (+figura.style.getPropertyValue("--u") || 1) }, this.lampi); setTimeout(() => o.remove(), 3000); }
        }),
        aggancia("inizia", (tr, meta) => {
          const g = this.aloni[tr.el.id];
          if (meta < tr.fatto || meta === 0) { g.classList.remove("acceso"); g.style.opacity = ""; }
        }),
        aggancia("punto", n => {
          if (lenti()) return;
          const p = punto(n), u = +figura.style.getPropertyValue("--u") || 1;
          const c = crea("circle", { class: "lampo", cx: p.x, cy: p.y, r: 3 * u }, this.lampi);
          setTimeout(() => c.remove(), 1600);
        }),
        aggancia("entra", diretto => {
          if (diretto || lenti()) return;
          const s = document.createElement("div"); s.className = "stanza";
          document.body.insertBefore(s, document.body.firstChild);
          setTimeout(() => s.remove(), 2900);
        }),
        aggancia("rivedi", () => Object.values(this.aloni).forEach(g => { g.classList.remove("acceso"); g.style.opacity = ""; }))
      ];
      // se il triangolo è già chiuso, si accende subito
      if (trTri.fatto === trTri.tot) this.aloni.tri.style.opacity = .38;
      if (trEsa && trEsa.fatto === trEsa.tot) this.aloni.esa.style.opacity = .38;
    },
    spegni() { this.via.forEach(f => f()); Object.values(this.aloni).forEach(togliCopie); this.lampi.remove(); this.filtro.remove(); }
  },

  /* C. Controluce e fumo: sull'ingresso nero una luce calda da dietro il cerchio e un velo di fumo lento */
  C: {
    nome: "Controluce e fumo",
    attiva() {
      const fumo = svg => "url(\"data:image/svg+xml," + encodeURIComponent(svg) + "\")";
      const t1 = fumo("<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'><filter id='f'><feTurbulence type='fractalNoise' baseFrequency='0.006' numOctaves='4' seed='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 .9  0 0 0 0 .78  0 0 0 1.6 -.55'/></filter><rect width='100%' height='100%' filter='url(%23f)'/></svg>".replace("%23", "#"));
      const t2 = fumo("<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'><filter id='f'><feTurbulence type='fractalNoise' baseFrequency='0.011' numOctaves='3' seed='11' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 .86  0 0 0 0 .7  0 0 0 1.8 -.7'/></filter><rect width='100%' height='100%' filter='url(%23f)'/></svg>".replace("%23", "#"));
      const d = document.createElement("div"); d.className = "controluce"; d.setAttribute("aria-hidden", "true");
      d.innerHTML = '<div class="luce"></div><div class="fumo"><i></i><i></i></div>';
      const [a, b] = d.querySelectorAll(".fumo i");
      a.style.backgroundImage = t1; b.style.backgroundImage = t2;
      figura.insertBefore(d, figura.firstChild);
      this.el = d;
    },
    spegni() { this.el.remove(); }
  },

  /* D. Incisione: tratti e numeri incisi nel disco, luce radente che segue il mouse, oro metallico */
  D: {
    nome: "Incisione",
    attiva() {
      const gr = crea("radialGradient", { id: "ae-disco", cx: ".38", cy: ".3", r: ".75" }, defs);
      crea("stop", { offset: "0", "stop-color": "#F9F8EB", "stop-opacity": ".10" }, gr);
      crea("stop", { offset: ".45", "stop-color": "#F9F8EB", "stop-opacity": ".03" }, gr);
      crea("stop", { offset: "1", "stop-color": "#000", "stop-opacity": ".12" }, gr);
      const oro = crea("linearGradient", { id: "ae-oro", x1: "0", y1: "0", x2: "1", y2: "1" }, defs);
      [["0", "#fff0b3"], [".45", "#F0B917"], ["1", "#9a6f05"]].forEach(([o, c]) => crea("stop", { offset: o, "stop-color": c }, oro));
      this.defs = [gr, oro];
      const disco = crea("circle", { class: "disco", cx: 500, cy: 500, r: R, fill: "url(#ae-disco)" });
      SVG.insertBefore(disco, document.querySelector(".cerchio-g"));
      this.disco = disco;
      // due copie di ogni tratto: l'ombra verso la luce, il riflesso dalla parte opposta
      this.ombra = crea("g", { class: "incisione incisione-ombra" });
      this.luce = crea("g", { class: "incisione incisione-luce" });
      SVG.insertBefore(this.ombra, $("tri")); SVG.insertBefore(this.luce, $("tri"));
      [this.ombra, this.luce].forEach(g => {
        crea("circle", { cx: 500, cy: 500, r: R }, g);
        ["tri", "esa"].forEach(id => aggiungiCopia($(id), crea("path", {}, g)));
      });
      // i numeri, fuori dal cerchio
      this.numeri = crea("g", { class: "numeri-incisi" }, SVG);
      for (let n = 1; n <= 9; n++) {
        const o = crea("text", { class: "n-ombra" }, this.numeri), l = crea("text", { class: "n-luce" }, this.numeri);
        o.textContent = l.textContent = n; o.dataset.n = l.dataset.n = n;
      }
      const metti = (u, stretto) => {
        this.u = u;
        const voluta = stretto ? 0 : 22;
        if (distanzaEtichette !== voluta) { distanzaEtichette = voluta; adatta(); return; }
        this.numeri.querySelectorAll("text").forEach(t => {
          // su telefono non c'è spazio fuori dal cerchio: i numeri stanno appena dentro
          const n = +t.dataset.n, d = dir(n), rr = stretto ? R - 22 * u : R + 24 * u, sh = t.classList.contains("n-ombra") ? -1 * u : 0;
          t.setAttribute("x", 500 + rr * d.x + sh); t.setAttribute("y", 500 + rr * d.y + sh);
          t.setAttribute("font-size", (stretto ? 15 : 17) * u);
        });
        this.luceDa(this.lx, this.ly);
      };
      this.luceDa = (lx = -.6, ly = -.8) => {
        this.lx = lx; this.ly = ly;
        const k = 1.1 * (this.u || 1);
        this.ombra.setAttribute("transform", `translate(${(lx * k).toFixed(2)} ${(ly * k).toFixed(2)})`);
        this.luce.setAttribute("transform", `translate(${(-lx * k).toFixed(2)} ${(-ly * k).toFixed(2)})`);
        gr.setAttribute("cx", (.5 + lx * .32).toFixed(3)); gr.setAttribute("cy", (.5 + ly * .32).toFixed(3));
      };
      let attesa = 0;
      this.muovi = e => {
        if (attesa) return;
        attesa = requestAnimationFrame(() => {
          attesa = 0;
          const r = SVG.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
          const vx = e.clientX - cx, vy = e.clientY - cy, m = Math.hypot(vx, vy) || 1, f = Math.min(1, m / (r.width * .6));
          this.luceDa(vx / m * f, vy / m * f);
        });
      };
      if (!lenti()) addEventListener("pointermove", this.muovi);
      this.prima = distanzaEtichette;
      this.via = aggancia("adatta", metti);
      adatta();
    },
    spegni() {
      removeEventListener("pointermove", this.muovi);
      this.via(); distanzaEtichette = this.prima;
      [this.ombra, this.luce].forEach(togliCopie);
      [this.disco, this.numeri, ...this.defs].forEach(e => e.remove());
      adatta();
    }
  },

  /* E. Riquadri hairline: le carte delle pagine diventano lastre appena più chiare, col bordo di 1px che si accende sotto il mouse */
  E: {
    nome: "Riquadri hairline",
    attiva() {
      this.muovi = e => {
        const c = e.target.closest && e.target.closest(".pg-carta"); if (!c) return;
        const r = c.getBoundingClientRect(); c.style.setProperty("--mx", (e.clientX - r.left) + "px"); c.style.setProperty("--my", (e.clientY - r.top) + "px");
      };
      $("pagina").addEventListener("pointermove", this.muovi);
    },
    spegni() { $("pagina").removeEventListener("pointermove", this.muovi); }
  },

  /* F. Triangolo come oggetto: una lastra sottile che ruota nello spazio e si appoggia piatta sul cerchio */
  F: {
    nome: "Triangolo come oggetto",
    attiva() {
      sostituisci.triangolo = async mio => {
        if (lenti()) return anima(trTri, trTri.tot, VELOCITA, mio, avanzaTri);
        const o = document.createElement("div"); o.className = "oggetto"; o.setAttribute("aria-hidden", "true");
        const lastra = document.createElement("div"); lastra.className = "lastra"; o.appendChild(lastra);
        const d = "M" + TRIANGOLO.map(punto).map(p => p.x.toFixed(1) + " " + p.y.toFixed(1)).join(" L") + "Z";
        // quattro strati a pochi pixel l'uno dall'altro: lo spessore della lastra
        for (let i = 0; i < 4; i++) {
          const s = crea("svg", { viewBox: SVG.getAttribute("viewBox") });
          crea("path", { d }, s);
          s.style.transform = `translateZ(${-i * 2.2}px)`;
          s.style.opacity = 1 - i * .2;
          lastra.appendChild(s);
        }
        figura.appendChild(o);
        const a = lastra.animate([
          { transform: "translateZ(140px) rotateX(64deg) rotateY(-28deg) rotateZ(-24deg) scale(.7)", opacity: 0 },
          { transform: "translateZ(60px) rotateX(30deg) rotateY(14deg) rotateZ(6deg) scale(.9)", opacity: 1, offset: .45 },
          { transform: "translateZ(10px) rotateX(-6deg) rotateY(-4deg) rotateZ(-1deg) scale(.99)", opacity: 1, offset: .8 },
          { transform: "none", opacity: 1 }
        ], { duration: 2800, easing: "cubic-bezier(.25,.6,.25,1)", fill: "forwards" });
        try { await a.finished; } catch (e) {}
        if (mio !== giro) { o.remove(); return false; }
        trTri.imposta(trTri.tot);
        TRIANGOLO.slice(0, 3).forEach((v, i) => setTimeout(() => titoli[v].classList.add("vista"), i * 220));
        emetti("chiuso", trTri);
        o.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 500, fill: "forwards" }).finished.then(() => o.remove());
        await attesa(500);
        return mio === giro;
      };
    },
    spegni() { sostituisci.triangolo = null; }
  },

  /* G. Grana: un velo di grana fotografica su tutta la pagina */
  G: {
    nome: "Grana",
    attiva() {
      const svg = "<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .5  0 0 0 0 .5  0 0 0 0 .5  .6 .6 .6 0 -.55'/></filter><rect width='100%' height='100%' filter='url(#g)'/></svg>";
      const d = document.createElement("div"); d.className = "grana"; d.setAttribute("aria-hidden", "true");
      d.style.backgroundImage = "url(\"data:image/svg+xml," + encodeURIComponent(svg) + "\")";
      document.body.appendChild(d);
      this.el = d;
    },
    spegni() { this.el.remove(); }
  },

  /* H. Luce. Dal sito «Chladni · A Geometry of Sound» si prende il movimento, non la sabbia: tante piccole luci
     saltano dove la figura «vibra» e si posano sulle sue linee ferme, lasciando una scia. Nascono dal centro,
     formano il cerchio, poi il triangolo e l'esade man mano che la penna traccia; scelta una parte, una quota
     si raccoglie in nodi d'oro sui suoi tre punti. Il mouse (o il dito) le agita. Niente suono.
     Per non sembrare un cielo stellato: niente scintillio, la luce nasce dal centro e si posa in linee continue. */
  H: {
    nome: "Polvere di luce",
    attiva() {
      const T = TESTI.ingresso;
      const RP = R * 1.2;
      const LUMINOSITA = 3.7;   // ogni luce, ora che il fotogramma non si somma più al precedente
      // su telefono: meno luci, tela meno fitta e niente seconda tela sfocata (l'alone è già nella luce)
      const stretto = innerWidth < 600;
      const dpr = Math.min(stretto ? 1.5 : 2, window.devicePixelRatio || 1);
      // due tele: le luci nitide con la loro scia, e sotto lo stesso disegno sfocato che fa da alone
      const alone = document.createElement("canvas"); alone.className = "materia alone"; alone.setAttribute("aria-hidden", "true");
      const cv = document.createElement("canvas"); cv.className = "materia"; cv.setAttribute("aria-hidden", "true");
      if (!stretto) figura.insertBefore(alone, $("entra"));
      figura.insertBefore(cv, $("entra"));
      const ctx = cv.getContext("2d"), actx = alone.getContext("2d");

      const ing = document.createElement("div"); ing.className = "ingresso-materia";
      ing.innerHTML = '<p class="occhiello"></p><h2></h2><div class="filo"><i></i></div><p class="riga-sotto"></p>';
      ing.querySelector(".occhiello").textContent = T.occhiello;
      ing.querySelector("h2").textContent = T.titolo;
      ing.querySelector(".riga-sotto").textContent = T.riga;
      document.body.appendChild(ing);
      const filo = ing.querySelector(".filo");


      const pun = document.createElement("nav"); pun.className = "puntini"; pun.setAttribute("aria-label", "Le tre parti");
      const conta = document.createElement("span"); conta.className = "conta"; pun.appendChild(conta);
      const bottoni = VERTICI.map(v => {
        const b = document.createElement("button"); b.type = "button";
        b.setAttribute("aria-label", TESTI.sezioni[v].nome); b.title = TESTI.sezioni[v].nome;
        b.addEventListener("click", () => scelto === v ? alCentro() : seleziona(v));
        pun.appendChild(b); return b;
      });
      document.body.appendChild(pun);


      // le luci: ognuna ha il suo posto su una figura e ci arriva quando la penna ci passa
      const N = stretto ? 1300 : 2600;
      const F32 = () => new Float32Array(N);
      const X = F32(), Y = F32(), P = F32(), U = F32(), Q = F32(), O = F32(), KX = F32(), KY = F32();
      const L = new Uint8Array(N), S = new Uint8Array(N);   // S: la luce si è posata
      const A = new Float32Array(N);   // quanto è accesa: le luci dell'esade si accendono solo quando la penna arriva al loro posto
      const G = new Float32Array(10);  // quanto è dorato ogni punto: passa piano all'oro e torna all'avorio
      const PX = F32(), PY = F32();   // dove stava ogni luce al fotogramma prima: serve per la scia
      const CX = F32(), CY = F32(), TX = F32(), TY = F32(), TL = F32(), T2X = F32(), T2Y = F32(), T2L = F32(), HX = F32(), HY = F32(), HL = F32();
      const cR = caso(31);
      const gauss = () => Math.sqrt(-2 * Math.log(cR() || 1e-9)) * Math.cos(6.2832 * cR());
      // la luce nasce dal centro
      const dalCentro = () => { for (let i = 0; i < N; i++) { X[i] = C + gauss() * 6; Y[i] = C + gauss() * 6; } };
      const lungo = (tr, s, o) => {
        const cum = tr.cum; let i = 1; while (i < cum.length - 1 && cum[i] < s) i++;
        const a = punto(tr.seq[i - 1]), b = punto(tr.seq[i]), l = cum[i] - cum[i - 1], k = (s - cum[i - 1]) / l;
        return [a.x + (b.x - a.x) * k - (b.y - a.y) / l * o, a.y + (b.y - a.y) * k + (b.x - a.x) / l * o];
      };
      for (let i = 0; i < N; i++) {
        P[i] = .55 + cR() * .9; L[i] = cR() < .5 ? 1 : 0;
        U[i] = cR(); Q[i] = cR(); O[i] = gauss() * (cR() < .06 ? 6 : 1.6);
        KX[i] = gauss() * 4; KY[i] = gauss() * 4;
        const ang = Q[i] * 6.2832; CX[i] = C + Math.sin(ang) * (R + O[i]); CY[i] = C - Math.cos(ang) * (R + O[i]);
        TL[i] = Q[i] * trTri.tot; [TX[i], TY[i]] = lungo(trTri, TL[i], O[i]);
        T2L[i] = (Q[i] * 3.71 % 1) * trTri.tot; [T2X[i], T2Y[i]] = lungo(trTri, T2L[i], O[i]);
      }
      let esaFatta = null;
      const postiEsade = () => { for (let i = 0; i < N; i++) { HL[i] = Q[i] * trEsa.tot; [HX[i], HY[i]] = lungo(trEsa, HL[i], O[i]); } esaFatta = trEsa; };
      dalCentro();

      // una piccola luce già pronta per colore: un punto chiaro con un alone morbido
      const sprite = (r, g, b) => {
        const s = Math.round((stretto ? 11 : 9) * dpr), c = document.createElement("canvas"); c.width = c.height = s;
        const x = c.getContext("2d"), gr = x.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
        gr.addColorStop(0, `rgba(${r},${g},${b},1)`); gr.addColorStop(.12, `rgba(${r},${g},${b},.6)`); gr.addColorStop(.45, `rgba(${r},${g},${b},.1)`); gr.addColorStop(1, `rgba(${r},${g},${b},0)`);
        x.fillStyle = gr; x.fillRect(0, 0, s, s); return c;
      };
      const LUCE = { avorio: sprite(255, 244, 214), oro: sprite(255, 196, 60), salvia: sprite(150, 222, 192) };
      // il bagliore del luccichio: un alone largo e morbido, caldo
      const BAGLIORE = (() => {
        const s = Math.round(110 * dpr), c = document.createElement("canvas"); c.width = c.height = s;
        const x = c.getContext("2d"), gr = x.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
        gr.addColorStop(0, "rgba(255,236,190,.6)"); gr.addColorStop(.35, "rgba(255,220,150,.18)"); gr.addColorStop(1, "rgba(255,220,150,0)");
        x.fillStyle = gr; x.fillRect(0, 0, s, s); return c;
      })();
      const PUNTO = [null]; for (let n = 1; n <= 9; n++) PUNTO.push(punto(n));

      // il mouse o il dito muovono le luci solo quando passano sopra la figura
      // il mouse agita le luci solo mentre si muove: fermo sopra la figura non le tiene sveglie
      let dito = null, tDito = 0, ditoT = 0;
      this.muovi = e => {
        const r = figura.getBoundingClientRect(), m = r.width * .14;
        if (e.clientX < r.left - m || e.clientX > r.right + m || e.clientY < r.top - m || e.clientY > r.bottom + m) { dito = null; return; }
        dito = { x: vb.x + (e.clientX - r.left) / r.width * vb.s, y: vb.y + (e.clientY - r.top) / r.height * vb.s }; ditoT = performance.now();
        clearTimeout(tDito); if (e.pointerType !== "mouse") tDito = setTimeout(() => dito = null, 450);
      };
      this.esci = () => { dito = null; };
      addEventListener("pointermove", this.muovi); addEventListener("pointerdown", this.muovi);
      document.addEventListener("pointerleave", this.esci); addEventListener("blur", this.esci);

      let urto = 0, sceltoPrima = null, lettoPrima = "", chiaveFerma = "", w = 0, h = 0, raf = 0, prima = performance.now();
      let calma = 0, chiaveCalma = "", porta = null;
      // ogni tanto la figura luccica: un bagliore morbido corre per un breve tratto lungo una linea e si spegne
      // (Luca, 11/10/2026: «ogni tanto l'enneagramma luminoso brilli qua o là»); un'onda lenta, non uno scintillio
      let lucc = null, prossimoLucc = performance.now() + 3500, luceAllora = false;
      const nuovoLuccichio = ora => {
        const figure = ["c"];
        if (trTri.fatto >= trTri.tot) figure.push("t");
        if (trEsa && trEsa.fatto >= trEsa.tot) figure.push("e", "e");
        const f = figure[Math.floor(Math.random() * figure.length)];
        let pos;
        if (f === "c") {
          const a0 = Math.random() * 6.2832, verso = Math.random() < .5 ? -1 : 1;
          pos = k => { const a = a0 + verso * k * .3; return { x: C + Math.sin(a) * R, y: C - Math.cos(a) * R }; };
        } else {
          const tr = f === "t" ? trTri : trEsa, s0 = Math.random() * (tr.tot - 100);
          pos = k => { const q = lungo(tr, s0 + k * 100, 0); return { x: q[0], y: q[1] }; };
        }
        lucc = { t0: ora, dur: 1800, pos };
      };
      let ultimi = {};
      this.stato = () => ultimi;   // per le prove
      const nodi = new Float32Array(6);
      this.via = [
        aggancia("entra", diretto => { if (!diretto) urto = Math.max(urto, .45); }),
        aggancia("rivedi", () => { dalCentro(); S.fill(0); A.fill(0); G.fill(0); urto = 0; porta = null; }),
        // aprendo una pagina tutte le luci corrono nel punto; tornando, ripartono verso le linee
        aggancia("pagina", n => { if (n !== null && n !== undefined) { porta = punto(n); urto = Math.max(urto, .25); } }),
        aggancia("ritorno", () => { porta = null; urto = Math.max(urto, .35); })
      ];
      const leggi = () => {
        const k = scelto === null ? 0 : VERTICI.indexOf(scelto) + 1;
        conta.textContent = `0${k} / 03`;
        bottoni.forEach((b, i) => b.setAttribute("aria-current", i + 1 === k ? "true" : "false"));
      };

      const passo = ora => {
        raf = requestAnimationFrame(passo);
        const dt = Math.min(.05, (ora - prima) / 1000); prima = ora;
        const cw = Math.round(cv.clientWidth * dpr), ch = Math.round(cv.clientHeight * dpr);
        if (cw !== w || ch !== h) { w = cv.width = alone.width = cw; h = cv.height = alone.height = ch; chiaveFerma = ""; calma = 0; }
        if (!w) return;
        const x0 = vb.x - .14 * vb.s, y0 = vb.y - .14 * vb.s, sc = w / (vb.s * 1.28);
        if (trEsa && trEsa !== esaFatta) postiEsade();
        const haTri = trTri.fatto > 0, haEsa = !!trEsa && trEsa.fatto > 0;
        const scelti = scelto !== null ? PUNTI[scelto] : [];
        const anteprima = (hover !== null && hover !== scelto ? PUNTI[hover] : []).map(punto);
        for (let j = 0; j < scelti.length; j++) { const p = punto(scelti[j]); nodi[j * 2] = p.x; nodi[j * 2 + 1] = p.y; }
        if (scelto !== sceltoPrima) sceltoPrima = scelto;
        // l'oro dei tre punti della parte scelta arriva e se ne va piano
        let colori = false;
        for (let n = 1; n <= 9; n++) {
          const meta = scelti.includes(n) ? 1 : 0;
          if (!lenti() && Math.abs(G[n] - meta) > .003) { G[n] += (meta - G[n]) * Math.min(1, .09 * dt * 60); colori = true; } else G[n] = meta;
        }
        const letto = "" + scelto;
        if (letto !== lettoPrima) { lettoPrima = letto; leggi(); }
        const chiave = [trTri.fatto | 0, trEsa ? trEsa.fatto | 0 : 0, scelto, hover, corpo.className, w, vb.s, porta ? porta.x : 0].join("|");
        const fermo = lenti();
        if (fermo && chiave === chiaveFerma) return;
        // quando tutto si è posato la luce resta immobile: niente calcoli finché il mouse, un tocco o la figura non cambiano
        // il soffio del mouse: pieno mentre si muove, poi si spegne piano in tre quarti di secondo
        const forza = dito ? Math.max(0, 1 - (ora - ditoT) / 750) : 0;
        let luce = null;
        if (!fermo && pronto && corpo.classList.contains("brand") && paginaAperta === null && !porta) {
          if (!lucc && ora > prossimoLucc) nuovoLuccichio(ora);
          if (lucc) {
            const k = (ora - lucc.t0) / lucc.dur;
            if (k >= 1) { lucc = null; prossimoLucc = ora + 2500 + Math.random() * 4000; }
            else { const q = lucc.pos(k); luce = { x: q.x, y: q.y, e: Math.sin(Math.PI * k) ** 2 }; }
          }
        } else lucc = null;
        if (!fermo && calma > 40 && chiave === chiaveCalma && !forza && urto < .01 && !luce && !luceAllora) return;
        luceAllora = !!luce;
        let mossi = 0;

        let vicini = 0;
        const f = dt * 60;
        urto *= Math.exp(-dt * 3.4);
        const fTri = trTri.fatto, fEsa = haEsa ? trEsa.fatto : 0;
        for (let i = 0; i < N; i++) {
          let x = X[i], y = Y[i];
          PX[i] = x; PY[i] = y;
          let tx = CX[i], ty = CY[i];
          const u = U[i];
          if (porta) { tx = porta.x + KX[i] * 1.6; ty = porta.y + KY[i] * 1.6; }
          else if (u >= .54) {
            // luce dell'esade: si accende al suo posto quando la penna ci arriva, prima non c'è
            if (haEsa && HL[i] <= fEsa) {
              tx = HX[i]; ty = HY[i];
              if (A[i] === 0) { x = tx; y = ty; S[i] = 1; }
              if (A[i] < 1) { A[i] = fermo ? 1 : Math.min(1, A[i] + .07 * dt * 60); mossi++; }
            } else { A[i] = 0; X[i] = x = HX[i] || tx; Y[i] = y = HY[i] || ty; continue; }
          } else if (u >= .3 && haTri && TL[i] <= fTri) { tx = TX[i]; ty = TY[i]; }
          const d = Math.hypot(x - tx, y - ty);
          if (fermo) { x = tx; y = ty; }
          else if (S[i] && urto < .01 && d < 30) {
            // già posata: sotto il mouse si scosta piano e poi torna al suo posto scivolando, senza salti né lampi
            let gx = tx, gy = ty;
            if (forza) {
              const ex = tx - dito.x, ey = ty - dito.y, dd = Math.hypot(ex, ey);
              if (dd < 110) { const k = forza * (1 - dd / 110), spinta = 22 * k * k / (dd || 1); gx += ex * spinta; gy += ey * spinta; }
            }
            const k = Math.min(1, .14 * f), nx = x + (gx - x) * k, ny = y + (gy - y) * k;
            if (Math.abs(nx - x) + Math.abs(ny - y) > .03) mossi++;
            x = nx; y = ny;
          } else {
            S[i] = 0;
            let a = Math.min(1, d / 60);
            if (urto > .01) a = Math.max(a, urto * (.35 + .65 * Math.random()));
            if (a < .03 && d < 1.6) { x = tx; y = ty; S[i] = 1; }   // arrivata: si posa e non trema più
            else {
              const tira = Math.min(.5, .085 * P[i] * f), salto = 3.6 * a * P[i] * f, ang = Math.random() * 6.2832;
              x += Math.cos(ang) * salto + (tx - x) * tira;
              y += Math.sin(ang) * salto + (ty - y) * tira;
              mossi++;
            }
          }
          X[i] = x; Y[i] = y;
          if (d < 6) vicini++;
        }
        if (!corpo.classList.contains("brand")) filo.style.setProperty("--p", Math.min(1, vicini / (N * .85)).toFixed(3));
        // contare i fotogrammi fermi lascia sfumare del tutto le scie prima di fermarsi
        if (!mossi && !forza && !colori && urto < .01) { calma++; chiaveCalma = chiave; } else calma = 0;
        ultimi = { mossi, calma, urto: +urto.toFixed(3), forza: +forza.toFixed(2) };

        // ogni fotogramma si ridisegna da capo, sempre con la stessa intensità: la luce non pulsa
        // anche se il computer rallenta (prima la scia sbiadiva il fotogramma precedente e la luce batteva)
        ctx.clearRect(0, 0, w, h);
        ctx.globalCompositeOperation = "lighter";
        const brand = corpo.classList.contains("brand");
        const s = LUCE.avorio.width, m = s / 2;
        // quante luci cadono sullo stesso pixel: più sono fitte, più ognuna è tenue, così la linea resta luce e non diventa bianco pieno
        const lungo_ = 2 * Math.PI * R + (haTri ? fTri : 0) + fEsa;
        const accese = N * (.54 + .46 * (haEsa ? fEsa / trEsa.tot : 0));
        const sopra = (accese * .9 / lungo_) / sc * s * .35;
        // l'avorio si somma in bianco prima dell'oro: va tenuto più basso
        const base = LUMINOSITA * (brand ? Math.min(.35, Math.max(.03, .42 / Math.max(1, sopra))) : Math.min(.9, Math.max(.04, 1.1 / Math.max(1, sopra))));
        for (let i = 0; i < N; i++) {
          const x = X[i], y = Y[i];
          let img = brand ? LUCE.avorio : LUCE.oro, alfa = base * (L[i] ? 1.3 : .7) * (porta ? .35 : 1);
          if (porta) img = LUCE.oro;
          if (U[i] >= .54 && A[i] < 1) { if (A[i] === 0) continue; alfa *= A[i]; }
          // vicino a un punto dorato la luce si mescola all'oro, senza muoversi
          let oro = 0;
          if (brand && !porta) for (let n = 1; n <= 9; n++) if (G[n] > 0 && Math.abs(x - PUNTO[n].x) < 46 && Math.abs(y - PUNTO[n].y) < 46 && Math.hypot(x - PUNTO[n].x, y - PUNTO[n].y) < 46) { oro = Math.max(oro, G[n]); }
          if (oro > 0) {
            ctx.globalAlpha = Math.min(1, base * 1.7 * oro);
            ctx.drawImage(LUCE.oro, (x - x0) * sc - m, (y - y0) * sc - m);
            alfa *= 1 - oro;
            if (alfa < .005) continue;
          }
          if (luce) {
            const dx = x - luce.x, dy = y - luce.y, dd = dx * dx + dy * dy;
            if (dd < 3025) { const k = 1 - Math.sqrt(dd) / 55; alfa *= 1 + 3.6 * luce.e * k * k; }
          }
          ctx.globalAlpha = Math.min(1, alfa);
          ctx.drawImage(img, (x - x0) * sc - m, (y - y0) * sc - m);
        }
        if (luce) {
          const g = BAGLIORE.width;
          ctx.globalAlpha = .8 * luce.e;
          ctx.drawImage(BAGLIORE, (luce.x - x0) * sc - g / 2, (luce.y - y0) * sc - g / 2);
        }
        // la scia: un breve tratto dietro le sole luci che si stanno spostando davvero
        if (!fermo) {
          ctx.beginPath();
          for (let i = 0; i < N; i++) {
            const dx = X[i] - PX[i], dy = Y[i] - PY[i];
            if (dx * dx + dy * dy < 4) continue;
            const ax = (X[i] - x0) * sc, ay = (Y[i] - y0) * sc;
            ctx.moveTo(ax, ay); ctx.lineTo(ax - dx * 3.5 * sc, ay - dy * 3.5 * sc);
          }
          ctx.globalAlpha = .22; ctx.lineWidth = 1.3 * dpr; ctx.lineCap = "round";
          ctx.strokeStyle = brand ? "rgb(255,244,214)" : "rgb(255,196,60)";
          ctx.stroke();
        }
        ctx.globalAlpha = 1; ctx.globalCompositeOperation = "source-over";
        if (!stretto) { actx.clearRect(0, 0, w, h); actx.drawImage(cv, 0, 0); }
        chiaveFerma = fermo ? chiave : "";
      };
      leggi();
      raf = requestAnimationFrame(passo);
      this.ferma = () => cancelAnimationFrame(raf);
      this.pezzi = [alone, cv, ing, pun];
    },
    spegni() {
      this.ferma();
      removeEventListener("pointermove", this.muovi); removeEventListener("pointerdown", this.muovi);
      document.removeEventListener("pointerleave", this.esci); removeEventListener("blur", this.esci);
      this.via.forEach(f => f());
      this.pezzi.forEach(e => e.remove());
    }
  }
};

/* ---------- scelta degli stili: ?stile=A+B+E+G oppure la barra delle prove ---------- */
let stiliAttivi = new Set();
function applicaStili(lettere) {
  const nuovi = new Set([...lettere].filter(l => STILI[l]));
  [...stiliAttivi].filter(l => !nuovi.has(l)).forEach(l => STILI[l].spegni());
  "ABCDEFGH".split("").filter(l => nuovi.has(l) && !stiliAttivi.has(l)).forEach(l => STILI[l].attiva());
  stiliAttivi = nuovi;
  const elenco = "ABCDEFGH".split("").filter(l => nuovi.has(l));
  document.documentElement.dataset.stile = elenco.join(" ");
  const q = new URLSearchParams(location.search);
  if (elenco.length) q.set("stile", elenco.join("+")); else q.delete("stile");
  try { history.replaceState(null, "", location.pathname + (q.toString() ? "?" + q.toString().replace(/%2B/g, "+") : "") + location.hash); } catch (e) {}
}
/* ---------- PROVE DI SFONDO (11/10/2026): texture tono su tono sul petrolio, da scegliere con ?sfondo=1…5 ---------- */
const svgDato = (w, h, corpo) => "url(\"data:image/svg+xml," + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'>${corpo.replace(/%23/g, "#")}</svg>`) + "\")";
const SFONDI = {
  1: { nome: "Luce dal centro", css: {
    backgroundImage: "radial-gradient(ellipse 62% 55% at 50% 50%, rgba(249,248,235,.075), rgba(249,248,235,0) 70%), radial-gradient(ellipse 110% 95% at 50% 50%, rgba(0,0,0,0) 50%, rgba(3,22,28,.6) 100%)" } },
  2: { nome: "Carta", css: {
    backgroundImage: svgDato(360, 360, "<filter id='a' x='0' y='0'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' seed='4' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 .98  0 0 0 0 .92  0 0 0 -1.2 .66'/></filter><filter id='b' x='0' y='0'><feTurbulence type='fractalNoise' baseFrequency='.05 .22' numOctaves='2' seed='9' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 .98  0 0 0 0 .92  0 0 0 1.6 -.82'/></filter><filter id='c' x='0' y='0'><feTurbulence type='fractalNoise' baseFrequency='.22 .05' numOctaves='2' seed='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 .98  0 0 0 0 .92  0 0 0 1.6 -.82'/></filter><rect width='100%' height='100%' filter='url(%23a)' opacity='.1'/><rect width='100%' height='100%' filter='url(%23b)' opacity='.07'/><rect width='100%' height='100%' filter='url(%23c)' opacity='.07'/>"),
    backgroundSize: "360px 360px" } },
  3: { nome: "Lino", css: {
    backgroundImage: svgDato(240, 240, "<filter id='o' x='0' y='0'><feTurbulence type='fractalNoise' baseFrequency='1.1 .045' numOctaves='2' seed='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 .98  0 0 0 0 .92  0 0 0 1.5 -.62'/></filter><filter id='v' x='0' y='0'><feTurbulence type='fractalNoise' baseFrequency='.045 1.1' numOctaves='2' seed='5' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 .98  0 0 0 0 .92  0 0 0 1.5 -.62'/></filter><rect width='100%' height='100%' filter='url(%23o)' opacity='.075'/><rect width='100%' height='100%' filter='url(%23v)' opacity='.075'/>"),
    backgroundSize: "240px 240px" } },
  4: { nome: "Incisione", css: {
    backgroundImage: "repeating-linear-gradient(135deg, rgba(249,248,235,.035) 0 1px, rgba(249,248,235,0) 1px 6px), radial-gradient(ellipse 110% 95% at 50% 50%, rgba(0,0,0,0) 55%, rgba(3,22,28,.45) 100%)" } },
  5: { nome: "Pietra", css: {
    backgroundImage: svgDato(300, 300, "<filter id='p' x='0' y='0'><feTurbulence type='fractalNoise' baseFrequency='.55' numOctaves='4' seed='13' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 .98  0 0 0 0 .92  0 0 0 -1.6 .9'/></filter><filter id='q' x='0' y='0'><feTurbulence type='fractalNoise' baseFrequency='.55' numOctaves='4' seed='13' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 .06  0 0 0 0 .08  0 0 0 1.6 -.7'/></filter><rect width='100%' height='100%' filter='url(%23p)' opacity='.1'/><rect width='100%' height='100%' filter='url(%23q)' opacity='.25'/>") + ", radial-gradient(ellipse 110% 95% at 50% 50%, rgba(0,0,0,0) 55%, rgba(3,22,28,.4) 100%)",
    backgroundSize: "300px 300px, cover" } }
};
function applicaSfondo(n) {
  let d = $("sfondo-prova");
  if (!d) { d = document.createElement("div"); d.id = "sfondo-prova"; d.setAttribute("aria-hidden", "true"); document.body.insertBefore(d, document.body.firstChild); }
  d.removeAttribute("style");
  // ?sfondo=foto:stucco → una delle texture fotografiche ricolorate (cartella texture/, da Unsplash)
  if (n && String(n).startsWith("foto:")) {
    Object.assign(d.style, { backgroundImage: `url("texture/${String(n).slice(5)}.webp")`, backgroundSize: "cover", backgroundPosition: "center" });
    return;
  }
  const S = SFONDI[n];
  if (S) Object.assign(d.style, S.css);
}
applicaSfondo(new URLSearchParams(location.search).get("sfondo"));

/* ---------- la barra delle prove ---------- */
const PROVE = [
  { lettere: "", nome: "Base", aiuto: "La versione senza effetti. Premi «Entra», poi scegli una delle tre parti." },
  { lettere: "A", nome: "Fasci", aiuto: "Premi «Entra» e guarda i tratti: ognuno è un fascio di linee sottilissime." },
  { lettere: "B", nome: "Luce", aiuto: "Premi «Entra»: la stanza si illumina dal centro e ogni tratto si accende quando si chiude." },
  { lettere: "C", nome: "Fumo", aiuto: "Guarda l'ingresso: una luce calda dietro il cerchio e un velo di fumo che si muove piano." },
  { lettere: "D", nome: "Incisione", aiuto: "Premi «Entra» e muovi il mouse sul cerchio: la luce scorre sui tratti incisi. Qui ci sono i numeri." },
  { lettere: "E", nome: "Riquadri", aiuto: "Premi «Entra», scegli una parte e poi una voce: nella pagina, guarda le carte (persone, corsi) e passaci sopra col mouse." },
  { lettere: "F", nome: "Triangolo 3D", aiuto: "Premi «Entra»: il triangolo arriva ruotando nello spazio e si appoggia sul cerchio." },
  { lettere: "G", nome: "Grana", aiuto: "Guarda il fondo: un velo di grana fotografica su tutta la pagina." },
  { lettere: "H", nome: "Polvere di luce", aiuto: "Le luci nascono dal centro e si posano sulle linee mentre la penna traccia; poi restano ferme. Passando col mouse (o col dito) si scostano piano e tornano al loro posto. Premi «Entra»." },
  { lettere: "ABCEG", nome: "Proposta", aiuto: "La combinazione che propongo: Fasci, Luce, Fumo, Riquadri e Grana insieme. Premi «Entra»." },
  { lettere: "EGH", nome: "Proposta luce", aiuto: "Polvere di luce, Riquadri e Grana insieme. Premi «Entra», muovi il mouse sulla figura, scegli una parte e poi una voce." }
];
const chiave = l => "ABCDEFGH".split("").filter(x => l.includes(x)).join("");
function segnaProva() {
  const ora = chiave([...stiliAttivi].join(""));
  const p = PROVE.find(x => chiave(x.lettere) === ora);
  $("riga-stili").querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", b.dataset.l === ora ? "true" : "false"));
  $("aiuto-prove").textContent = p ? p.aiuto : "Combinazione " + ora.split("").join("+") + ". Premi «Entra».";
}
PROVE.forEach(p => {
  const b = document.createElement("button"); b.type = "button"; b.dataset.l = chiave(p.lettere);
  if (p.lettere.length === 1) { const k = document.createElement("b"); k.textContent = p.lettere; b.append(k); }
  b.append(p.nome);
  // ogni prova riparte dall'ingresso, così si vede anche l'effetto dell'entrata
  b.addEventListener("click", () => { scegliProva(p); $("prove").classList.remove("tutti"); $("tutti-stili").setAttribute("aria-expanded", "false"); });
  $("riga-stili").appendChild(b);
});
function scegliProva(p) { applicaStili(p.lettere); segnaProva(); rivedi(); }
function provaVicina(passo) {
  const ora = chiave([...stiliAttivi].join(""));
  let i = PROVE.findIndex(x => chiave(x.lettere) === ora);
  i = ((i < 0 ? 0 : i) + passo + PROVE.length) % PROVE.length;
  scegliProva(PROVE[i]);
}
$("stile-prima").addEventListener("click", () => provaVicina(-1));
$("tutti-stili").addEventListener("click", () => { const t = $("prove").classList.toggle("tutti"); $("tutti-stili").setAttribute("aria-expanded", t); });
$("stile-dopo").addEventListener("click", () => provaVicina(1));
// l'altezza della barra decide quanto scende la figura
new ResizeObserver(() => { const pr = $("prove"); if (pr) document.documentElement.style.setProperty("--alto-prove", pr.offsetHeight + "px"); }).observe($("prove"));
[["1", "1 · in trasparenza"], ["2", "2 · nascoste"]].forEach(([v, t]) => {
  const b = document.createElement("button"); b.type = "button"; b.dataset.v = v; b.textContent = t;
  b.addEventListener("click", () => { scegliOpzione(v); segnaOpzione(); });
  $("riga-opzioni").appendChild(b);
});
MODI_IMMAGINI.forEach(([v, t]) => {
  const b = document.createElement("button"); b.type = "button"; b.dataset.v = v; b.textContent = t;
  b.addEventListener("click", () => { scegliImmagini(v); segnaImmagini(); });
  $("riga-immagini").appendChild(b);
});
function segnaImmagini() { $("riga-immagini").querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", b.dataset.v === immagini ? "true" : "false")); }
function segnaOpzione() { $("riga-opzioni").querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", b.dataset.v === opzione ? "true" : "false")); }
$("chiudi-prove").addEventListener("click", () => { $("prove").classList.add("chiusa"); document.documentElement.classList.add("prove-chiuse"); });
$("riapri-prove").addEventListener("click", () => { $("prove").classList.remove("chiusa"); document.documentElement.classList.remove("prove-chiuse"); });
document.documentElement.classList.add("con-prove");

if (window.VERSIONE_PULITA) {
  // la copia da mostrare (per Mauro, 11/10/2026): niente prove, la luce, la pietra, le altre voci in trasparenza
  $("prove").remove();
  $("varianti").remove();
  document.documentElement.classList.remove("con-prove");
  opzione = "1";
  applicaStili("H");
} else {
  applicaStili((new URLSearchParams(location.search).get("stile") || "").toUpperCase().replace(/[^A-H]/g, ""));
  segnaProva(); segnaOpzione(); segnaImmagini();
}
avvio();

/* ===== Integrazione con WordPress (sito/nuova-home/sorgente/integrazione.js) ===== */

// Nel prototipo ogni link si apriva in una scheda nuova. Sul sito vero le pagine del sito si aprono
// nella stessa scheda; quelle fuori (YouTube, Instagram) restano in una scheda nuova.
document.addEventListener("click", e => {
  const a = e.target.closest && e.target.closest('a[target="_blank"]');
  if (!a) return;
  try { if (new URL(a.href, location.href).origin === location.origin) a.removeAttribute("target"); } catch (_) {}
}, true);
