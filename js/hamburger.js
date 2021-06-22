"use strict";
{
  const hamburger = document.getElementById("hamburger");
  const body = document.body;
  const link = document.querySelector('.nav-list');
  
  hamburger.addEventListener("click", () => {
    if(hamburger !== null){
      body.classList.toggle("active");
    }
  });

  link.addEventListener('click', () => {
    if(link !== null) {
      body.classList.remove('active')
    }
  })

}
