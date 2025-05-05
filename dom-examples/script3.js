// Import array of objects from speeches.js
import { allData } from "./data/speeches.js";
import { getRandomNumber } from "./utils/utilityFuncs.js";

window.onload = () => {

    // DECLARE OBJECTS REPRESENTING HTML ELEMENTS ON PAGE
    const main = document.querySelector("main");

    // Add object to represent select
    const speechSelect = document.getElementById("speech-select");

    const title = document.getElementById("title");
    const speaker = document.getElementById("speaker");
    const date = document.getElementById("date");

    const speechBox = document.createElement("div");
    main.appendChild(speechBox);
    speechBox.id = "speech-box"; // for CSS


    // RENDER ITEMS NOT YET ON PAGE
    Object.values(allData).forEach(speech => {
        speechSelect.innerHTML += `<option id=${speech.id} value=${speech.id}>"${speech.title}" by ${speech.speaker}</option>`;
    });
    
    // Default to first speech in object
    let currentSpeechData = allData["1"];

    renderPage(currentSpeechData);


    // EVENT LISTENERS

    // Event listener for change to select by user
    speechSelect.addEventListener("change", (event) => {
        console.log(event.target.value); // Always check for event firing first
        currentSpeechData = allData[speechSelect.value];
        clearSpeechInfo();
        renderPage(currentSpeechData);
    });
    
    // FUNCTIONS BELOW
    function renderPage(speechData) {

        title.innerText = speechData.title;
        speaker.innerText = speechData.speaker;
        date.innerText = speechData.date;

        let interval;
        let idx = 0;
        let text = speechData.text;

        function printNextChar() {
            if (idx < text.length) {
                let currChar = text[idx];
                if (currChar === "," || currChar === ".") {
                    interval = 160;
                } else {
                    interval = getRandomNumber(80);
                }
                let id = `character-${idx+1}`;
                speechBox.innerHTML += `<span id=${id} class="animate new-char">${currChar}</span>`;

                const charSpan = document.getElementById(id);
                charSpan.style.backgroundColor = "rgba(248, 248, 255, 0.8)";

                setTimeout(() => {
                    charSpan.classList.remove("animate");
                    charSpan.style.opacity = 1;
                }, interval);

                idx++;
                setTimeout(printNextChar, interval); // recursion to preserve async
            }
        }
        
        printNextChar();
    }

    // Write a function to clear the current innerText and innerHTML from the four elements in <main>
    function clearSpeechInfo() {
        title.innerText = "";
        speaker.innerText = "";
        date.innerText = "";
        speechBox.innerHTML = "";

        // FIXME
        // Clear async rendering from previous speech
        const controller = new AbortController();
        controller.abort();
    }

}
