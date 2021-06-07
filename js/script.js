const check = document.querySelector("#checkbox");
const menuList = document.querySelector("#menuList");

check.addEventListener("click", function () {
  if (check.checked === true) {
    menuList.style.left = 0;
  } else {
    menuList.style.left = "-100%";
  }
});

// Smooth Scroll
const scroll = new SmoothScroll('#menuList li a[href*="#"]', {
  speed: 900,
});
