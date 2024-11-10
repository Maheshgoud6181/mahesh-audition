window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + "px";
  leaf.style.top = value * -1.5 + "px";
  leaf.style.left = value * 1.5 + "px";
  hill5.style.left = value * 1.5 + "px";
  hill4.style.left = value * -1.5 + "px";
  hill1.style.top = value * 1 + "px";

  let fadeStart = 300;
  let fadeEnd = 600;
  let fadeEffect = 1 - (value - fadeStart) / (fadeEnd - fadeStart);

  if (value > fadeStart) {
    text.style.opacity = fadeEffect;
    leaf.style.opacity = fadeEffect;
    hill5.style.opacity = fadeEffect;
    hill4.style.opacity = fadeEffect;
    hill1.style.opacity = fadeEffect;
  } else {
    text.style.opacity = 1;
    leaf.style.opacity = 1;
    hill5.style.opacity = 1;
    hill4.style.opacity = 1;
    hill1.style.opacity = 1;
  }
});
