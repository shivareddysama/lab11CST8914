const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion, index) => {
  // Set initial ARIA attributes
  accordion.setAttribute("aria-expanded", "false");
  accordion.setAttribute("aria-controls", `accordion-content-${index}`);
  
  const content = accordion.nextElementSibling;
  content.setAttribute("id", `accordion-content-${index}`);
  content.setAttribute("role", "region");
  content.setAttribute("aria-hidden", "true");

  // Add event listener for click
  accordion.onclick = function () {
    const isExpanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !isExpanded);
    this.classList.toggle("is-open");

    if (isExpanded) {
      content.style.maxHeight = null;
      content.setAttribute("aria-hidden", "true");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.setAttribute("aria-hidden", "false");
    }
  };

  // Add keyboard interactivity
  accordion.addEventListener("keydown", (event) => {
    const key = event.key;

    if (key === "ArrowDown") {
      // Focus the next accordion button
      const nextAccordion = accordionBtns[index + 1] || accordionBtns[0];
      nextAccordion.focus();
    } else if (key === "ArrowUp") {
      // Focus the previous accordion button
      const prevAccordion = accordionBtns[index - 1] || accordionBtns[accordionBtns.length - 1];
      prevAccordion.focus();
    } else if (key === "Home") {
      // Focus the first accordion button
      accordionBtns[0].focus();
    } else if (key === "End") {
      // Focus the last accordion button
      accordionBtns[accordionBtns.length - 1].focus();
    }
  });
});
