import {timer} from './modules/timer.js';
import './modules/burger.js';
import './modules/scroll.js';
import './modules/validate.js';
import './modules/inputmask.js';
import './modules/swiper.js';

import {renderGoods, loadGoods} from './modules/render.js';

{
  const init = () => {
    timer('2024/07/21 18:00');
  }

  loadGoods(renderGoods);

  init();
}

