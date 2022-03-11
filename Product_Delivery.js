let drawer_open = false;
document.querySelector(".cta-button").addEventListener("mouseup", function () {
  cta_button_hide.play();
});

document.querySelector(".back-btn").addEventListener("mouseup", function () {
  if (drawer_open) {
    slidedown.play();
    cta_button_show.play();
  }
});

let cta_button_show = anime({
  targets: ["cta-button", "cta-text"],
  translateY: ["-15", "0"],
  opacity: ["0", "1"],
  easing: "easeInOutSine",
  delay: anime.stagger(200),
  autoplay: false,
  duration: 500,
  complete: function () {},
});

let cta_button_hide = anime({
  targets: ["cta-button", "cta-text"],
  translateY: ["0", "-15"],
  opacity: ["1", "0"],
  easing: "easeInOutSine",
  delay: anime.stagger(200),
  autoplay: false,
  duration: 500,
  complete: function () {
    slideup.play();
    drawer_open = true;
  },
});
