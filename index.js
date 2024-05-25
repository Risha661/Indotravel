import {timer} from './modules/timer.js';
import './modules/burger.js';
import './modules/scroll.js';
import {renderGoods, loadGoods} from './modules/render.js';

{
  const init = () => {
    timer('2024/05/21 18:00');
  }

  loadGoods(renderGoods);

  init();
}

