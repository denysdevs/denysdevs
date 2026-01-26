const cards = document.querySelectorAll(".emote-card");

cards.forEach(card => {
  const video = card.querySelector("video");
  video.src = card.dataset.video;

  card.addEventListener("mouseenter", () => {
    video.play();
  });

  card.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});
