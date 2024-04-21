const ratingCard = document.querySelector(".rating-card");
const thankyouCard = document.querySelector(".thankyou-card");
const ratingBtn = document.getElementById("rating-submit");
const rating = document.querySelectorAll(".rate-btn");
const selectedRating = document.getElementById("selected-rating");

ratingBtn.addEventListener("click", () => {
  ratingCard.classList.add("d-none");
  thankyouCard.classList.remove("d-none");
});

rating.forEach((rate) => {
  rate.addEventListener("click", (e) => {
    selectedRating.innerHTML = rate.innerHTML;
  });
});
