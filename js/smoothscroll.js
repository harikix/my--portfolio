(() => {
  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');

  for (let i = 0; i < smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener("click", (e) => {
      // 一瞬で飛ぶのを防ぐため
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute("href");
      let targetElement = document.getElementById(href.replace("#", ""));

      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 20;
      const target = rect + offset - gap;

      window.scrollTo({
        top: target,
        behavior: "smooth",
      });
    });
  }
})();
