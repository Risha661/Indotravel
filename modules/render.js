export let datesSelect = document.getElementById('reservation__date'); //полная форма бронирования
export let peopleSelect = document.getElementById('reservation__people');

export let datesForm = document.getElementById('tour__date'); //первая краткая форма бронирования
export let peopleSelectForm = document.getElementById('tour__people');

export let reservationDate = document.querySelector('.reservation__data'); //Информация о бронировании и цена
export const reservationInfoContainer = document.querySelector('.reservation__info');
export let priceDate = document.querySelector('.reservation__price');

export const loadGoods = async (cb) => {
  const result = await fetch('db.json');
  const data = await result.json();
  cb(data);
  return data;
}

export const renderGoods = (data) => {
  const dateToRemove = datesForm.querySelector('option[value="4.02 - 18.02"]');
  const optionToRemove = datesSelect.querySelector('option[value="4.02 - 18.02"]');
  if (optionToRemove) {
    datesSelect.removeChild(optionToRemove);
    datesForm.removeChild(dateToRemove);
  }
  const dateToRemove1 = datesForm.querySelector('option[value="7.02 - 21.02"]');
  const optionToRemove1 = datesSelect.querySelector('option[value="7.02 - 21.02"]');
  if (optionToRemove1) {
    datesSelect.removeChild(optionToRemove1);
    datesForm.removeChild(dateToRemove1);
  }
  const dateToRemove2 = datesForm.querySelector('option[value="12.02 - 26.02"]');
  const optionToRemove2 = datesSelect.querySelector('option[value="12.02 - 26.02"]');
  if (optionToRemove2) {
    datesSelect.removeChild(optionToRemove2);
    datesForm.removeChild(dateToRemove2);
  }
  const dateToRemove3 = datesForm.querySelector('option[value="20.02 - 6.03"]');
  const optionToRemove3 = datesSelect.querySelector('option[value="20.02 - 6.03"]');
  if (optionToRemove3) {
    datesSelect.removeChild(optionToRemove3);
    datesForm.removeChild(dateToRemove3);
  }

  data.forEach((item, index) => {
    const newOption = document.createElement('option');
    newOption.value = item.date;
    newOption.textContent = item.date;
    newOption.classList.add('tour__option', 'reservation__option');

    const newOptionForm = document.createElement('option');
    newOptionForm.value = item.date;
    newOptionForm.textContent = item.date;
    newOptionForm.classList.add('tour__option', 'reservation__option');

    if (index <= 5) {
      datesSelect.appendChild(newOption);
      datesForm.appendChild(newOptionForm);
    }
  });

  reservationDate.innerHTML = '';
  priceDate.innerHTML = '';
  const reservationDateNew = document.createElement('p');
  reservationDateNew.classList.add('reservation__data');
  reservationDateNew.textContent = 'Для бронирования необходимо выбрать дату';
  if (reservationInfoContainer.firstChild) {
    reservationInfoContainer.insertBefore(reservationDateNew, reservationInfoContainer.firstChild);
  } else {
    reservationInfoContainer.appendChild(reservationDateNew);
  }

  datesSelect.addEventListener('click', () => {
    const selectedDate = datesSelect.value;

    peopleSelect.value = '';
    data.forEach(item => {

      if (selectedDate === item.date) {
      peopleSelect.value = '';
      peopleSelect.innerHTML = '';
      const optionFirst = document.createElement('option');
      optionFirst.textContent = 'Количество человек';
      peopleSelect.append(optionFirst);

      reservationDateNew.value = item.date;
      reservationDateNew.textContent = item.date;

      for (let i = item['min-people']; i <= item['max-people']; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = option.value;
        peopleSelect.append(option);
      }
      }
    });
  });

  datesForm.addEventListener('click', () => {
    const selectedDateForm = datesForm.value;
    peopleSelectForm.value = '';
    peopleSelectForm.innerHTML = '';
  
    data.forEach(item => {
      if (selectedDateForm === item.date) {
        for (let i = item['min-people']; i <= item['max-people']; i++) {
          const optionForm = document.createElement('option');
          optionForm.value = i;
          optionForm.textContent = i;
          peopleSelectForm.append(optionForm);
        }
      }
    });
  });

  const reservationPrice = document.createElement('p');
  reservationPrice.classList.add('reservation__price');
  reservationPrice.textContent = '0₽';
  reservationInfoContainer.append(reservationPrice);

  peopleSelect.addEventListener('change', () => {
    const selectedDate = datesSelect.value;
    const selectedPeople = parseInt(peopleSelect.value);
    let totalPrice = 0;

    data.forEach(item => {
      if (selectedDate === item.date) {
        if (!isNaN(selectedPeople)) {
          totalPrice = selectedPeople * item.price;
        } else {
          totalPrice = 0;
        }
      }
    }

  );
    reservationPrice.textContent = `${totalPrice}₽`;
  });
};



