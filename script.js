/* =========================
WISHIE WEDDING WEBSITE
JavaScript
========================= */

// Get the screens
const welcomeScreen = document.getElementById("welcomeScreen");
const detailsScreen = document.getElementById("detailsScreen");

// Get the buttons
const openBtn = document.getElementById("openBtn");
const celebrateBtn = document.getElementById("celebrateBtn");
const backBtn = document.getElementById("backBtn");
const closeWedding = document.getElementById("closeWedding");
const replayBtn = document.getElementById("replayBtn");

// Get the celebration elements
const weddingScene = document.getElementById("weddingScene");
const confettiLayer = document.getElementById("confettiLayer");

// Open the invitation
openBtn.addEventListener("click", function () {
welcomeScreen.classList.remove("active");
detailsScreen.classList.add("active");

window.scrollTo({
top: 0,
behavior: "smooth"
});
});

// Go back to the first screen
backBtn.addEventListener("click", function () {
detailsScreen.classList.remove("active");
welcomeScreen.classList.add("active");

window.scrollTo({
top: 0,
behavior: "smooth"
});
});

// Create confetti
function createConfetti() {
confettiLayer.innerHTML = "";

const pieces = 75;

for (let i = 0; i < pieces; i++) {
const piece = document.createElement("span");

piece.classList.add("confetti");

piece.style.left = Math.random() * 100 + "%";

piece.style.animationDelay = Math.random() * 1.5 + "s";

piece.style.setProperty(
  "--fall-time",
  2.5 + Math.random() * 2 + "s"
);

piece.style.setProperty(
  "--drift",
  (Math.random() * 200 - 100) + "px"
);

piece.style.transform =
  "rotate(" + Math.random() * 360 + "deg)";

confettiLayer.appendChild(piece);

}
}

// Open the bride and groom celebration
function celebrate() {
weddingScene.classList.add("show");
weddingScene.setAttribute("aria-hidden", "false");

createConfetti();

document.body.style.overflow = "hidden";
}

// Close the celebration
function closeCelebration() {
weddingScene.classList.remove("show");
weddingScene.setAttribute("aria-hidden", "true");

confettiLayer.innerHTML = "";

document.body.style.overflow = "";
}

// Celebrate button
celebrateBtn.addEventListener("click", function () {
celebrate();
});

// Close button
closeWedding.addEventListener("click", function () {
closeCelebration();
});

// Celebrate again
replayBtn.addEventListener("click", function () {
createConfetti();
});

// Close when clicking the dark background
weddingScene.addEventListener("click", function (event) {
if (event.target === weddingScene) {
closeCelebration();
}
});

// Close with the Escape key
document.addEventListener("keydown", function (event) {
if (event.key === "Escape" &&
weddingScene.classList.contains("show")) {
closeCelebration();
}
});

console.log("Wishie Wedding Website loaded successfully! ❤️");
