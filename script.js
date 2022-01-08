const accordionItemTitles = document.querySelectorAll('[data-toggled-content]');
const accordionItemContents = document.querySelectorAll('.accordion__item--content');

accordionItemTitles.forEach((title) => {
    title.addEventListener('click', toggleAccordionItem);
});

function toggleAccordionItem(event) {
    const { target: targetElement } = event;
    const targetContent = targetElement.nextElementSibling;
    const isContentExpanded = targetContent.getAttribute('aria-expanded');

    collapseAccordionItems();

    if (isContentExpanded === "false") {
        targetContent.setAttribute('aria-hidden', false);
        targetContent.setAttribute('aria-expanded', true);
        targetElement.setAttribute('data-toggled-content', true);
    } else {
        targetContent.setAttribute('aria-hidden', true);
        targetContent.setAttribute('aria-expanded', false);
        targetElement.setAttribute('data-toggled-content', false);
    }
}

// Collapse All Accordion Items
function collapseAccordionItems() {
    accordionItemContents.forEach((item) => {
        item.setAttribute('aria-expanded', false);
        item.setAttribute('aria-hidden', true);
    });

    accordionItemTitles.forEach((title) => {
        title.setAttribute('data-toggled-content', false);
    })
}