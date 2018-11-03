import { home } from "./js/home.template";
$(function() {
  $(".menu-bars").click(function() {
    $(".header__nav__list").toggleClass("collapse-menu");
  });
});
