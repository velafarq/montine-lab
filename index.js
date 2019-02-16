$(function() {
  $(".menu-bars").click(function() {
    $(".header__nav__list")
      .toggleClass("collapse-menu")
      .toggleClass("header-collapse");

    $(".menu-bars").toggleClass("menu-bars-close");
  });
});

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
    document.getElementById("header").classList.add("box-shadow");
  } else {
    document.getElementById("myBtn").style.display = "none";
    document.getElementById("header").classList.remove("box-shadow");
  }
}

function topFunction() {
  $("html, body").animate({ scrollTop: 0 }, "slow");

  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
}
