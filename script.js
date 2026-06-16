const emotes = [
  "Better in Denim.mp4",
  "Lush Life.mp4",
  "Phonky Turn.mp4",
];

const cutscenes = [
  "Cutscene1.mp4",
];

function createCards(files, containerId, isCutscene = false) {
  const container = document.getElementById(containerId);

  files.forEach(file => {
    const card = document.createElement("div");
    card.className = "emote-card";

    if (isCutscene) {
      card.classList.add("cutscene-card");
    }

    const video = document.createElement("video");
    video.src = `assets/emotes/${file}`;
    video.loop = true;
    video.playsInline = true;

    const name = document.createElement("p");
    name.textContent = file
      .replace(".mp4", "")
      .replace(/[-_]/g, " ");

    card.appendChild(video);
    card.appendChild(name);
    container.appendChild(card);

    card.addEventListener("mouseenter", () => {
      video.currentTime = 0;
      video.play();
    });

    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });

    card.addEventListener("click", () => {
      video.muted = false;
      video.currentTime = 0;
      video.play();
    });
  });
}

createCards(emotes, "emotes-grid");
createCards(cutscenes, "cutscenes-grid", true);