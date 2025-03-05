const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
  const btn = item.querySelector(".faq__btn");
  const answer = item.querySelector(".faq__answer");
  const plusIcon = item.querySelector(".plus__icon");
  const minusIcon = item.querySelector(".minus__icon");

  btn.addEventListener("click", () => {
    answer.classList.toggle("show");
    plusIcon.classList.toggle("hide");
    minusIcon.classList.toggle("show");
  });
});
