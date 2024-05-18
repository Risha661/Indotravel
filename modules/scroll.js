const fly = document.createElement('div');
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
    const maxHeight = docEl.scrollHeight - fly.clientHeight;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const percentScroll = (window.pageYOffset * 100/ maxScroll) * 100;
    let top = percentScroll / 100;
  
    fly.style.transform = `translateY(-${top * 100}%)`;
  } else {
    fly.style.display = "none";
  }
  
};

window.addEventListener('scroll', calcPositionFly);

calcPositionFly();
