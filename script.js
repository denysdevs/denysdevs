let audioUnlocked = false;

// First click anywhere unlocks audio
document.body.addEventListener("click", () => {
  audioUnlocked = true;
});

document.querySelectorAll(".emote-card").forEach(card => {
  const video = card.querySelector("video");
  video.src = card.dataset.video;
  video.loop = true;
  video.playsInline = true;

  card.addEventListener("mouseenter", () => {
    video.muted = !audioUnlocked; // mute only if user hasn’t clicked
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
