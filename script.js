const accordionHeadings = document.querySelectorAll('.accordion__question[aria-expanded]')
const accordionAnswers = document.querySelectorAll('.accordion__answer[aria-hidden]')

accordionHeadings.forEach(heading => {
    heading.addEventListener('click', expandAccordion)
})

const acc = document.querySelector('.accordion')

function expandAccordion(e) {
    const { target } = e
    const targetSibling = target.nextElementSibling
    const targetIsExpanded = target.getAttribute('aria-expanded')

    if (targetIsExpanded === "false") {
        target.setAttribute('aria-expanded', true)
        targetSibling.setAttribute('aria-hidden', false)
    } else {
        target.setAttribute('aria-expanded', false)
        targetSibling.setAttribute('aria-hidden', true)
    }
    console.log(targetItemAnswer)
}