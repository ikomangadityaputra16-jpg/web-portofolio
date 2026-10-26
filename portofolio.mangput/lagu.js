const audioMusik = document.getElementById("lagu");
const btnMusik = document.getElementById("playMusik");

btnMusik.addEventListener("click", function () {
    if (audioMusik.paused) {
        audioMusik.play();
        btnMusik.textContent = "⏸ Pause Musik";
    } else {
        audioMusik.pause();
        btnMusik.textContent = "▶ Putar Musik";
    }
});