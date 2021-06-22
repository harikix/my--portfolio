(() => {
  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => {
    if(!section.classList.contains("active")) {
      section.classList.add("hide");
    }
  })
})();