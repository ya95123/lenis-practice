const bg1 = document.getElementById("bg-1");
const bannerBtn = document.querySelector(".banner-btn");
const openBtn = document.querySelector(".open-btn");
const openContent = document.querySelector(".open-content");
const lenis = new Lenis();

const raf = (time) => {
  lenis.raf(time);
  requestAnimationFrame(raf);
};

requestAnimationFrame(raf);

// lenis.on("scroll", (e) => {
//   console.log(e);
// });

bannerBtn.addEventListener("click", () => {
  lenis.scrollTo(bg1, {
    duration: 1.8,
  });
});

openBtn.addEventListener("click", () => {
  openContent.style.height = "auto";
});
