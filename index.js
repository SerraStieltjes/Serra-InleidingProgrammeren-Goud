// Constanten & variabele //
const zitKnop = document.querySelector("#zitten")
const ligKnop = document.querySelector("#liggen")
const loopKnop = document.querySelector("#lopen")
const staanKnop = document.querySelector("#stilstaan")

const afbeeldingHond = document.querySelector(".afbeeldingHond")

const beloningen = [
    "Goed gedaan!",
    "Braaf hondje!",
    "Je verdient een brokje!",
    "Wat een slimme hond!",
    "Perfect uitgevoerd!"
];

let aantalBrokjesElement = document.querySelector("figcaption")
let aantalBrokjes = 5 // houd aantal brokjes bij //
aantalBrokjesElement.textContent = aantalBrokjes // veranderd aantal brokjes op scherm //

// Met behulp van bron: https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984 //
let audio = new Audio('img/audioHond.mp3')

// functions //
function speelAudio() {
    audio.play();
    console.log(Audio)
}

function hondjeZit() {
    afbeeldingHond.src = "img/hondjeZit.gif";
    beloning()
}
function hondjeLiggen() {
    afbeeldingHond.src = "img/hondjeLiggen.gif";
    beloning()
}
function hondjeLopen() {
    afbeeldingHond.src = "img/hondjeLopen.gif";
    beloning()
}
function hondjeStilstaan() {
    afbeeldingHond.src = "img/hondjeStilstaan.gif";
    beloning()
}

function disableButton(button) {
    button.disabled = true;
    button.style.backgroundColor = "gray";
}

function beloning() {
    if (aantalBrokjes > 0) {
        aantalBrokjes--
        aantalBrokjesElement.textContent = aantalBrokjes

        // Met behulp van bron: https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/ //
        const randomBeloning = beloningen[Math.floor(Math.random() * beloningen.length)];
        beloningTekst.textContent = randomBeloning; // Toont de random beloning tekst van array op scherm //
    }
    else {
        disableButton(zitKnop);
        disableButton(ligKnop);
        disableButton(loopKnop);
        disableButton(staanKnop);
    }
}

// EventListeners //
zitKnop.addEventListener("click", hondjeZit)
ligKnop.addEventListener("click", hondjeLiggen)
loopKnop.addEventListener("click", hondjeLopen)
staanKnop.addEventListener("click", hondjeStilstaan)

// Rest //
setInterval(speelAudio, 10000);

// Afbeelding en GIF's van: https://dribbble.com/shots/10736771-Dog-Training-Animations //
// Audio van: https://pixabay.com/nl/sound-effects/search/woof/ //
