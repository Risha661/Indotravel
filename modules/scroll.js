const fly = document.createElement('div');
const docEl = document.documentElement;

fly.style.cssText = `
position: fixed;
width: 50px;
height: 50px;
right: 0;
bottom: 0;
pointer-events: none;
background: url('img/fly.svg') center/contain no-repeat;
`;

document.body.append(fly);

const calcPositionFly = () => {
  const maxHeight = docEl.scrollHeight - fly.clientHeight;
  const maxScroll = docEl.scrollHeight - docEl.clientHeight;
  const percentScroll = ((maxScroll - window.pageYOffset) * 100) / maxScroll;
  const percentHeight = maxHeight * (percentScroll / 100); 

  fly.style.transform = `translateY(- 100%)`;
};

window.addEventListener('scroll', calcPositionFly);

calcPositionFly();
