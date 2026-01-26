document.querySelectorAll(".emote-card").forEach(card => {
  const video = card.querySelector("video");
  video.src = card.dataset.video;
  video.loop = true;
  video.playsInline = true;

  // Hover → just play (don’t mute)
  card.addEventListener("mouseenter", () => {
    video.currentTime = 0;
    video.play();
  });

  card.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });

  // Click → restart video (audio plays naturally)
  card.addEventListener("click", () => {
    video.currentTime = 0;
    video.play();
  });
});
