document.querySelectorAll(".emote-card").forEach(card => {
  const video = card.querySelector("video");
  video.src = card.dataset.video;

  card.addEventListener("click", () => {
    if (video.paused) {
      video.currentTime = 0;
      video.play(); // audio allowed because user clicked
    } else {
      video.pause();
    }
  });

  card.addEventListener("mouseenter", () => {
    video.muted = true;
    video.play();
  });

  card.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});
