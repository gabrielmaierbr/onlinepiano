const keys = document.querySelectorAll(".key");

    const notes = {
        "C": new Audio("sons/C.mp3"),
        "C#": new Audio("sons/Cs.mp3"),
        "D": new Audio("sons/D.mp3"),
        "D#": new Audio("sons/Ds.mp3"),
        "E": new Audio("sons/E.mp3"),
        "F": new Audio("sons/F.mp3"),
        "F#": new Audio("sons/Fs.mp3"),
        "G": new Audio("sons/G.mp3"),
        "G#": new Audio("sons/Gs.mp3"),
        "A": new Audio("sons/A.mp3"),
        "A#": new Audio("sons/As.mp3"),
        "B": new Audio("sons/B.mp3"),
    };

    function playNote(note, element) {
        if (notes[note]) {
            notes[note].currentTime = 0;
            notes[note].play();
        }
        element.classList.add("active");
        setTimeout(() => element.classList.remove("active"), 200);
    }

    keys.forEach(key => {
        key.addEventListener("click", () => {
            playNote(key.dataset.note, key);
        });
    });

    document.addEventListener("keydown", e => {
        const key = [...keys].find(k => k.dataset.key === e.key);
        if (key) playNote(key.dataset.note, key);
    });