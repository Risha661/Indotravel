import {timer} from './modules/timer.js';
import './modules/burger.js';
import './modules/scroll.js';
import {renderGoods} from'./modules/render.js';

fetch('./db.json');

const loadGoods = async (cb) => {
  const result = await fetch('db.json');
  const data = await result.json();

  cb(data);
}

loadGoods(renderGoods);

{
  const init = () => {
    timer('2024/05/21 18:00');
  }

  init();
}

