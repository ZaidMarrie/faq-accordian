# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![Screenshot]('./images/icon-arrow-down.png')

### Links

- [Solution URL](https://github.com/ZaidMarrie/faq-accordian)
- [Live Site Demo](https://zaidmarrie.github.io/faq-accordian/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

That the CSS `transform: scale();` property does not affect the box-model of an element. I also used the grid layout tool, more specifically `grid-template-areas` which make it much simpler to change layouts across different screen sizes.

See below some snippets of the code I used:

```css
.grid--card {
    grid-template-areas: 'image' 'content';
}

@media (min-width: 50.75em) {
  .grid--card {
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas: 'image content';
    }
}
```

### Continued development

I have faced many problems positioning the images and background images as specified in the designs. I also have an issue with some space at the bottom of the page, which is caused by an element overflowing. As such I would like to take a deeper dive into these concepts to find effective solutions for solving these problems.

## Author

- Frontend Mentor - [@ZaidMarrie](https://www.frontendmentor.io/profile/ZaidMarrie)
- Twitter - [@LeKoels27](https://twitter.com/LeKoels27)