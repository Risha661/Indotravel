import {timer} from './modules/timer.js';
import './modules/burger.js';
import './modules/scroll.js';

fetch('./db.json');

const loadGoods = async () => {
  const result = await fetch('db.json');
  const data = await result.json();
  console.log('data', data);
}

loadGoods();

{
  const init = () => {
    timer('2024/05/21 18:00');
  }

  init();
}

