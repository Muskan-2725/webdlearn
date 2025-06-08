// Theme/background color change
const themeSelect = document.getElementById('theme-select');
themeSelect.addEventListener('change', function() {
  document.body.className = this.value;
});

// Spin wheel for random mood
const moods = [
  { value: "happy", label: "😊 happy" },
  { value: "sad", label: "😢 sad" },
  { value: "energetic", label: "⚡ energetic" },
  { value: "angry", label: "🔥 angry" },
  { value: "love", label: "😍 love/romantic" },
  { value: "lonely", label: "😔 lonely" },
  { value: "chill", label: "😎 chill" },
  { value: "tense", label: "😬 tense" },
  { value: "thrill", label: "🎢 thrill-seeking" },
  { value: "gloomy", label: "😶‍🌫️ gloomy" }
];
const moodSelect = document.getElementById('mood-select');
const spinBtn = document.getElementById('spin-btn');
spinBtn.addEventListener('click', function() {
  spinBtn.classList.add('spinning');
  setTimeout(() => {
    spinBtn.classList.remove('spinning');
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    moodSelect.value = randomMood.value;
    // Optionally trigger recommendations update here
  }, 700);
});

// Mood form submit
document.getElementById('mood-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // You can handle the selected mood here (e.g., show recommendations)
  alert("Mood submitted: " + moodSelect.options[moodSelect.selectedIndex].text);
});

// Highlight modal logic
const highlights = document.querySelectorAll('.highlight-card');
const modal = document.getElementById('highlight-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const movieDesc = document.getElementById('movie-description');
const watchFullBtn = document.getElementById('watch-full-btn');

highlights.forEach(card => {
  card.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalTitle.textContent = card.dataset.title || 'Highlight';
    movieDesc.textContent = '';
  });
});
closeModalBtn.onclick = () => { modal.style.display = 'none'; };
watchFullBtn.onclick = () => {
  movieDesc.textContent = "Here you can show the complete description of the movie or drama.";
};
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
