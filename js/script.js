const timeline = anime.timeline({
  duration: 500,
  easing: "easeInOutQuad",
  direction: "alternate",
  loop: true,
});

timeline
  .add({
    targets: "#stem",
    scaleY: [0, 1],
    transformOrigin: "auto",
  })
  .add({
    targets: "#flower",
    scale: [0, 1],
    easing: "spring",
    endDelay: 1000,
  });
