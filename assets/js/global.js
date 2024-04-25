const ratingCard = document.querySelector(".rating-card");
const thankyouCard = document.querySelector(".thankyou-card");
const ratingBtn = document.getElementById("rating-submit");
const rating = document.querySelectorAll(".rate-btn");
const selectedRating = document.getElementById("selected-rating");

ratingBtn.addEventListener("click", () => {
  const selected = document.querySelector(".rate-btn.selected");
  if (!selected) {
    alert("Please select a rating before submitting.");
    return;
  }
  ratingCard.classList.add("d-none");
  thankyouCard.classList.remove("d-none");
});

rating.forEach((rate) => {
  rate.addEventListener("click", (e) => {
    selectedRating.innerHTML = rate.innerHTML;
    rating.forEach((btn) => btn.classList.remove("selected"));
    rate.classList.add("selected");
  });
});
