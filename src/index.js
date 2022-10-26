console.log("Launching script");
const anchors = document.querySelectorAll(".thumbnails-anchor");
const detailsImage = document.querySelector(".details-image");
const audio = document.querySelector(".audio-sound");
const detailsTitle = document.querySelector(".details-title");
const mainClass = document.querySelector(".main-class");
const detailsContainer = document.querySelector(".details-container");
const HIDDEN = "hidden";
const IS_POINT = "is-point";

function setDetails(anchor) {
    detailsImage.setAttribute('src', anchor.getAttribute('data-details-image'));
    pauseAudio(1);
    audio.setAttribute("src", anchor.getAttribute('data-details-audio'));
    detailsTitle.innerHTML = anchor.getAttribute('data-details-title');
}

for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function () {
        console.log("event - click on ", anchors[i]);
        setDetails(anchors[i]);
        showDetails();
    })
}

function showDetails() {
    mainClass.classList.remove(HIDDEN);
    detailsContainer.classList.add(IS_POINT);
    setTimeout(function () {
        detailsContainer.classList.remove(IS_POINT);
    }, 1);

    playAudio();
    pauseAudio(5000);
}
function hideDetails() {
    mainClass.classList.add(HIDDEN);
    pauseAudio(1);
}

function playAudio() {
    setTimeout(function () {
        audio.play();
    }, 1);
}

function pauseAudio(msec) {
    setTimeout(function () {
        audio.pause();
    }, msec);
}

