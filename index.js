import {timer} from './modules/timer.js';
import './modules/burger.js';
import './modules/scroll.js';

fetch('./db.json');

const loadGoods = async (cb) => {
  const result = await fetch('db.json');
  const data = await result.json();
  console.log('data', data);

  cb(data);
}

const renderGoods = (data) => {
  console.log(data);
  const datesSelect = document.getElementById('reservation__date');
  let option = document.querySelectorAll('.reservation__option');

  data.forEach((item) => {
    const option = document.createElement('option');
    option.value = item.date;
    option.textContent = item.date;
    option.classList.add('tour__option', 'reservation__option');
    datesSelect.appendChild(option);
    console.log(option);

    const optionToRemove = datesSelect.querySelector('option[value="4.02 - 18.02"]');
    if (optionToRemove) {
      datesSelect.removeChild(optionToRemove);
    }
    const optionToRemove1 = datesSelect.querySelector('option[value="7.02 - 21.02"]');
    if (optionToRemove1) {
      datesSelect.removeChild(optionToRemove1);
    }
    const optionToRemove2 = datesSelect.querySelector('option[value="12.02 - 26.02"]');
    if (optionToRemove2) {
      datesSelect.removeChild(optionToRemove2);
    }
    const optionToRemove3 = datesSelect.querySelector('option[value="20.02 - 6.03"]');
    if (optionToRemove3) {
      datesSelect.removeChild(optionToRemove3);
    }
  });
}

loadGoods(renderGoods);

{
  const init = () => {
    timer('2024/05/21 18:00');
  }

  init();
}

