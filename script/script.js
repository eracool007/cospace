$(document).ready(function () {
  $(".nav-button").click(function () {
    $(".nav-button").toggleClass("change");
  });
});
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    document.getElementById("main-navbar").style.padding = "5px 0";
    document.getElementById("main-navbar").style.opacity = "95%";
  } else {
    document.getElementById("main-navbar").style.padding = "30px 0";
    document.getElementById("main-navbar").style.opacity = "80%";
  }
}
