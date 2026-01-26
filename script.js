alert("js loaded");

const emoteFiles = [
  "it's me jessy and ari.mp4",
];

const grid = document.getElementById("grid");

emoteFiles.forEach(file => {
  const card = document.createElement("div");
  card.className = "emote-card";

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
  grid.appendChild(card);

  // Hover preview
  card.addEventListener("mouseenter", () => {
    video.muted = false;
    video.currentTime = 0;
    video.play();
  });

  card.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });

  // Click = sound
  card.addEventListener("click", () => {
    video.muted = false;
    video.currentTime = 0;
    video.play();
  });
});
