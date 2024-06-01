import showModal from "./modal.js";

export let datesSelect = document.getElementById('reservation__date'); //полная форма бронирования
export let peopleSelect = document.getElementById('reservation__people');

export let datesForm = document.getElementById('tour__date'); //первая краткая форма бронирования
export let peopleSelectForm = document.getElementById('tour__people');

export let reservationDate = document.querySelector('.reservation__data'); //Информация о бронировании и цена
export const reservationInfoContainer = document.querySelector('.reservation__info');
export let priceDate = document.querySelector('.reservation__price');
export const reservationBtn = document.querySelector('.reservation__button');

export const form = document.querySelector('.reservation__form');
export const footerForm = document.querySelector('.footer__form');
export const footerTitle = document.querySelector('.footer__form-title');
export const footerText = document.querySelector('.footer__text');
export const footerDiv = document.querySelector('.footer__input-wrap');

export const url = 'db.json';

export const loadGoods = async (callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', () => {
    const data = JSON.parse(xhr.response);
    callback(data);
  });

  xhr.addEventListener('error', () => {
    console.log('error');
  });

  xhr.send();
};

export const sentData = (body, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
  xhr.addEventListener('load', () => {
    const data = JSON.parse(xhr.response);
    callback(data);
  });

  xhr.addEventListener('error', () => {
    console.log('error');
  });

  xhr.send(JSON.stringify(body));
};

export const renderGoods = (data) => {
  datesForm.innerHTML = '';
  const datesFormText = document.createElement('option');
  datesFormText.textContent = 'Выбери дату';
  datesForm.append(datesFormText);

  datesSelect.innerHTML = '';
  const datesSelectText = document.createElement('option');
  datesSelectText.textContent = 'Дата путешествия';
  datesSelect.append(datesSelectText);

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

    const peopleSelectFormText = document.createElement('option');
    peopleSelectFormText.textContent = 'Количество человек';
    peopleSelectForm.append(peopleSelectFormText);
  
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
reservationBtn.setAttribute('data-id', 'reservation__button');


form.addEventListener('submit', async (e) => {
  e.preventDefault();
  let postData = {
    title: form.querySelector('.reservation__input_name').value,
    body: form.querySelector('.reservation__input').value,
    date: datesSelect.value,
    countPeople: peopleSelect.value,
  };

  sentData(postData, data => {
    console.log(postData);
    showModal(postData, data);
  });
});

footerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  sentData({
    mail: footerForm.querySelector('.footer__input').value,
  }, (data) => {
    footerTitle.textContent = `Ваша заявка успешно отправлена`;
    footerText.textContent = `Наши менеджеры свяжутся с вами в течение 3-х рабочих дней`;
    footerDiv.innerHTML = '';
  });
});

