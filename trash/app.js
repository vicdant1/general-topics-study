const cards = document.querySelectorAll(".fruit-card");


cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    e.target.classList.toggle("hidden");
  });
});

const hideCards = () => {
  cards.forEach((card) => {
    card.classList.add("hidden");
  });
}

const showCards = () => {
  cards.forEach((card) => {
    card.classList.remove("hidden");
  });
}

hideCards();