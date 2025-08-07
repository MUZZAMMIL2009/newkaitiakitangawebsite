const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const pollResult = document.getElementById('pollResult');

yesBtn.addEventListener('click', () => {
  pollResult.textContent = "Thanks for your support! Every little bit counts.";
  pollResult.classList.remove('hidden');
  yesBtn.disabled = true;
  noBtn.disabled = true;
});

noBtn.addEventListener('click', () => {
  pollResult.textContent = "We appreciate your honesty. Maybe you’ll join us next time!";
  pollResult.classList.remove('hidden');
  yesBtn.disabled = true;
  noBtn.disabled = true;
});