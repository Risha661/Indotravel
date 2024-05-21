import './listener.js';

let datesSelect = document.getElementById('reservation__date');
let peopleSelect = document.getElementById('reservation__people');

export const loadGoods = async (cb) => {
  const result = await fetch('db.json');
  const data = await result.json();
  cb(data);
  return data;
}

export const renderGoods = (data) => {
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

  data.forEach((item, index) => {
    const newOption = document.createElement('option');
    newOption.value = item.date;
    newOption.textContent = item.date;
    newOption.classList.add('tour__option', 'reservation__option');

    if (index <= 5) {
      datesSelect.appendChild(newOption);
    }
  });

  datesSelect.addEventListener('click', () => {
    const selectedDate = datesSelect.value;
    console.log('!!!');
    peopleSelect.value = '';
    data.forEach(item => {

      if (selectedDate === item.date) {
      console.log(selectedDate);
      console.log(item.date);
      peopleSelect.value = '';
      peopleSelect.innerHTML = '';
      for (let i = item['min-people']; i <= item['max-people']; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = option.value;
        peopleSelect.append('Количество человек');
        peopleSelect.append(option);
      }
      }
    });
  });
};



