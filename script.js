
const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const traillerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", () => {
    traillerContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", () => {
    traillerContainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
});

