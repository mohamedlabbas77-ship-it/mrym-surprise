const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => { navMenu.classList.toggle('active'); });
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => { if (navMenu) navMenu.classList.remove('active'); });
});

const letterCard = document.getElementById('letterBody');
const progressBar = document.getElementById('progressBar');
if (letterCard && progressBar) {
    letterCard.addEventListener('scroll', () => {
        const scrollTop = letterCard.scrollTop;
        const scrollHeight = letterCard.scrollHeight - letterCard.clientHeight;
        progressBar.style.width = (scrollTop / scrollHeight) * 100 + '%';
    });
}

const instantReadBtn = document.getElementById('instantReadBtn');
if (instantReadBtn && letterCard) {
    instantReadBtn.addEventListener('click', () => { letterCard.scrollTo({ top: letterCard.scrollHeight, behavior: 'smooth' }); });
}

const frenchCardsData = [
    { title: "Un jour difficile", text: "Même si aujourd’hui est compliqué, n’oublie pas qu’une journée difficile ne définit pas toute ta vie. Prends ton temps, respire doucement et avance à ton rythme." },
    { title: "Besoin de courage", text: "Tu es capable d’apprendre, de progresser et de recommencer autant de fois que nécessaire. N’aie pas peur d’avancer petit à petit." },
    { title: "Besoin de sourire", text: "Petit rappel : tu as le droit de rire pour rien, d’écouter ta chanson préférée en boucle et de transformer un moment ordinaire en beau souvenir." },
    { title: "Petit rappel", text: "Tu mérites le respect, la sincérité, la tranquillité et des personnes avec lesquelles tu peux être toi-même." }
];

let currentModalIndex = 0;
function openFrenchModal(index) {
    currentModalIndex = index;
    document.getElementById('modalTitle').textContent = frenchCardsData[index].title;
    document.getElementById('modalText').textContent = frenchCardsData[index].text;
    document.getElementById('frenchModal').classList.add('active');
}
function closeFrenchModal() { document.getElementById('frenchModal').classList.remove('active'); }
function randomFrenchCard() {
    let randomIndex;
    do { randomIndex = Math.floor(Math.random() * frenchCardsData.length); } while (randomIndex === currentModalIndex);
    currentModalIndex = randomIndex;
    document.getElementById('modalTitle').textContent = frenchCardsData[currentModalIndex].title;
    document.getElementById('modalText').textContent = frenchCardsData[currentModalIndex].text;
}

window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('frenchModal')) closeFrenchModal();
});

const surpriseMessages = [
    "Tu mérites une journée remplie de petites joies.",
    "N’oublie pas de sourire à toi-même aujourd’hui.",
    "Les petits progrès sont aussi des victoires.",
    "Prends une grande respiration. Tu peux avancer à ton rythme.",
    "J’espère qu’une jolie surprise viendra illuminer ta journée.",
    "Tu n’as pas besoin d’être parfaite pour être une personne formidable.",
    "Accorde-toi un peu de douceur aujourd’hui.",
    "Même les journées ordinaires peuvent cacher de beaux moments.",
    "Tu as le droit de te reposer sans culpabiliser.",
    "Que ta journée soit plus douce que tu ne l’imagines.",
    "Un petit pas en avant reste un pas en avant.",
    "Garde une place pour les choses qui te font vraiment sourire.",
    "Tu mérites des relations sincères et respectueuses.",
    "N’oublie pas de célébrer les petites choses que tu réussis.",
    "J’espère que demain t’apportera une belle raison de sourire."
];

function openGiftBox() {
    document.getElementById('giftBox').classList.add('hidden');
    const reveal = document.getElementById('surpriseReveal');
    reveal.classList.remove('hidden');
    document.getElementById('surpriseText').textContent = surpriseMessages[Math.floor(Math.random() * surpriseMessages.length)];
}

function newSurprise() {
    const textElem = document.getElementById('surpriseText');
    let msg;
    do { msg = surpriseMessages[Math.floor(Math.random() * surpriseMessages.length)]; } while (msg === textElem.textContent);
    textElem.textContent = msg;
}

function resetGiftBox() {
    document.getElementById('surpriseReveal').classList.add('hidden');
    document.getElementById('giftBox').classList.remove('hidden');
}

const skyPhrases = [
    "Chaque étoile rappelle que la lumière brille même dans l'obscurité.",
    "Prends un moment pour souffler et apprécier le moment présent.",
    "Tes efforts silencieux portent toujours leurs fruits.",
    "Le bonheur se cache souvent dans les détails les plus simples.",
    "Aie confiance en ton propre chemin.",
    "Un sourire partagé illumine toute la journée.",
    "Sois indulgente envers toi-même.",
    "Les plus belles choses prennent le temps de grandir.",
    "Garde toujours une lueur d'optimisme en toi.",
    "Tu es capable de grandes et belles choses à ta façon.",
    "Respire, tout va bien se passer.",
    "Le monde est plus beau avec ta bonne humeur."
];

const constellationContainer = document.getElementById('constellationContainer');
const skyDisplay = document.getElementById('skyDisplay');
if (constellationContainer) {
    for (let i = 0; i < 12; i++) {
        const starBtn = document.createElement('button');
        starBtn.className = 'star-btn';
        starBtn.textContent = '✨';
        starBtn.addEventListener('click', () => {
            skyDisplay.textContent = `« ${skyPhrases[Math.floor(Math.random() * skyPhrases.length)]} »`;
        });
        constellationContainer.appendChild(starBtn);
    }
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}