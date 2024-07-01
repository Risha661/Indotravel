const fly = document.createElement("div");
const docEl = document.documentElement;
let lastScrollTop = 0;

fly.style.cssText = `
position: fixed;
width: 50px;
height: 50px;
right: 0;
bottom: 0;
pointer-events: none;
background: url('img/fly.svg') center/contain no-repeat;
transition: 0.5s;
`;

document.body.append(fly);

const calcPositionFly = () => {
  if (window.innerWidth >= 758) {
    const scrollHeight = docEl.scrollHeight;
    const clientHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    const screenHeight = clientHeight - fly.clientHeight;
    const progress = scrollTop / (scrollHeight - clientHeight);
    const translateY = screenHeight * progress;

    fly.style.transform = `translateY(-${translateY}px)`;
  } else {
    fly.style.display = "none";
  }
};

window.addEventListener("scroll", calcPositionFly);

calcPositionFly();
