import {timer} from './modules/timer.js';
import './modules/burger.js';
import './modules/scroll.js';
import {renderGoods, loadGoods} from './modules/render.js';
import './modules/listener.js';

fetch('./db.json');

loadGoods(renderGoods);

{
  const init = () => {
    timer('2024/05/21 18:00');
  }

  init();
}

