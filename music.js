let bgMusic;

window.addEventListener("load", () => {
  const music = document.getElementById("bgMusic");
  if (!music) return;

  // Restore time
  const savedTime = localStorage.getItem("musicTime");
  if (savedTime) music.currentTime = parseFloat(savedTime);

  // If music was playing before, continue
  const wasPlaying = localStorage.getItem("musicPlaying");
  if (wasPlaying === "true") {
    music.play().catch(() => {});
  }

  // Save time continuously
  setInterval(() => {
    if (!music.paused) {
      localStorage.setItem("musicTime", music.currentTime);
    }
  }, 200);
});

function startMusic() {
  const music = document.getElementById("bgMusic");
  if (!music) return;

  music.play().then(() => {
    localStorage.setItem("musicPlaying", "true");
  }).catch(() => {});
}


