# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./design/desktop-preview.jpg)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- BEM

### What I learned

I have gained expertise in manipulating the DOM using JavaScript to implement a fully functional FAQ accordion..

```html
<button class="faq__btn">Is Frontend Mentor free?</button>
<div class="faq__answer">
  <p>
    Yes, Frontend Mentor offers both free and premium coding challenges, with
    the free option providing access to a range of projects suitable for all
    skill levels.
  </p>
</div>
```

```css
.faq__answer {
  display: none;
}
.faq__answer.show {
  display: block;
}
```

```js
const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
  const btn = item.querySelector(".faq__btn");
  const answer = item.querySelector(".faq__answer");

  btn.addEventListener("click", () => {
    answer.classList.toggle("show");
  });
});
```
