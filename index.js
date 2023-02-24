"use-strinct;";

const ContentToShow = document.querySelectorAll(".ImgListner");

ContentToShow.forEach((a) =>
  a.addEventListener("mouseenter", function () {
    console.log(a.parentElement.classList);
    // a.parentElement.classList;
    // a.style.visibility = "visible";
  })
);
