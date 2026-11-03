const revealButton = document.querySelector("#reveal-letter");
const loveLetter = document.querySelector("#love-letter");

revealButton.addEventListener("click", () => {
  loveLetter.hidden = false;
  revealButton.setAttribute("aria-expanded", "true");
  revealButton.querySelector("span").textContent = "Your letter is open";
  revealButton.disabled = true;
  loveLetter.focus();
});
