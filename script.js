const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    updateMessage("Aaaaa, I love you too");
    updateGif("https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp");
});

noBtn.addEventListener("mouseover", () => {
    moveNoButtonRandomly();
});

function updateMessage(message) {
    question.textContent = message;
}

function updateGif(source) {
    gif.src = source;
}

function moveNoButtonRandomly() {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}
