let bgMusic;

// Restore music on every page load
window.addEventListener("load", () => {
  bgMusic = document.getElementById("bgMusic");
  if (!bgMusic) return;

  bgMusic.volume = 0.35;
  bgMusic.preload = "auto";


  // Restore time
  const savedTime = localStorage.getItem("musicTime");
  if (savedTime) {
    bgMusic.currentTime = parseFloat(savedTime);
  }

  // If music was playing before, continue
  if (localStorage.getItem("musicPlaying") === "yes") {
    bgMusic.play().catch(() => {});
  }

  // Save time every second
  setInterval(() => {
    if (!bgMusic.paused) {
      localStorage.setItem("musicTime", bgMusic.currentTime);
    }
  }, 200);
});

// Start music ONLY when Begin button clicked
function startMusic() {
  if (!bgMusic) bgMusic = document.getElementById("bgMusic");

  bgMusic.play().then(() => {
    localStorage.setItem("musicPlaying", "yes");
  }).catch(() => {});
}
