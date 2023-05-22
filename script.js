const tagline = document.querySelector('.tagline');
const words = ['Discovery', 'Exploration', 'Advancement'];

words.forEach((word, index) => {
  const span = document.createElement('span');
  span.textContent = word;
  span.style.animationDelay = `${index * 0.5}s`;
  tagline.appendChild(span);
});
