const tagline = document.querySelector(".tagline");
const words = ["Discovery", "Exploration", "Advancement"];
const Detail0 = document.querySelector("#Detail-0");
const Detail1 = document.querySelector("#Detail-1");
const Detail2 = document.querySelector("#Detail-2");
const Detail3 = document.querySelector("#Detail-3");
const Detail4 = document.querySelector("#Detail-4");
const details = document.querySelectorAll(".image-details");

words.forEach((word, index) => {
  const span = document.createElement("span");
  span.textContent = word;
  span.style.animationDelay = `${index * 0.5}s`;
  tagline.appendChild(span);
});
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const carouselItems = document.querySelectorAll(".carousel-item");

let currentIndex = 2; // Start with the center item

function showSlide(index) {
  carouselItems.forEach((item, i) => {
    const distance = Math.abs(index - i);
    item.style.opacity = distance === 0 ? 1 : 0.5;
  });

  const centerItem = carouselItems[currentIndex];
  centerItem.classList.remove("center-item");

  currentIndex = index;
  const newCenterItem = carouselItems[currentIndex];
  newCenterItem.classList.add("center-item");
}

function rotateCarousel(direction) {
  if (direction === "prev") {
    currentIndex =
      currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1;
    details[currentIndex].style.display = "flex";
  } else {
    currentIndex =
      currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1;
    console.log(currentIndex);
    details[currentIndex].style.display = "flex";
  }

  showSlide(currentIndex);
}

prevButton.addEventListener("click", () => rotateCarousel("prev"));
nextButton.addEventListener("click", () => rotateCarousel("next"));

showSlide(currentIndex);
