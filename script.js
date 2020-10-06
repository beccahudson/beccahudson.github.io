$(window).scroll(() => {
  fontFade();
  parallax();
  sectionTabs();
});

parallax = () => {
  var value = $(window).scrollTop();
  $("#confetti").css("top", -value * 0.95 + "px");
  $("#circles").css("top", -value * 0.25 + "px");
};

fontFade = () => {
  $("#headerFont").css("opacity", 1 - $(window).scrollTop() / 250);
};

sectionTabs = () => {
  $("section").css("top", "100vh" + "-50px");
};
