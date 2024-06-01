import loadStyle from "./loadStyle.js";
import './render.js';

const showModal = (postData, form) => {
  loadStyle('css/modal.css');
  const overlay = document.createElement('div');
  const modalWindow = document.createElement('div');
  const modalTitle = document.createElement('h2');
  const reservText = document.createElement('p');
  const dateText = document.createElement('p');
  const priceText = document.createElement('p');
  const btnContainer = document.createElement('div');
  const btnConfirm = document.createElement('button');
  const btnChange = document.createElement('button');

  overlay.classList.add('overlay', 'overlay_confirm');
  modalWindow.classList.add('modal');
  modalTitle.classList.add('modal__title');
  modalTitle.textContent = 'Подтверждение заявки';
  reservText.classList.add('modal__text');
  reservText.textContent = `Бронирование путешествия в Индию на ${postData.countPeople} человек`;
  dateText.classList.add('modal__text');
  dateText.textContent = `В даты: ${postData.date}`;
  priceText.classList.add('modal__text');
  priceText.textContent = `Стоимость тура ₽`;
  btnContainer.classList.add('modal__button');
  btnConfirm.classList.add('modal__btn', 'modal__btn_confirm');
  btnConfirm.textContent = 'Подтверждаю';
  btnChange.classList.add('modal__btn', 'modal__btn_edit');
  btnChange.textContent = 'Изменить данные';

  overlay.append(modalWindow);
  modalWindow.append(modalTitle, reservText, dateText, priceText, btnContainer);
  btnContainer.append(btnConfirm, btnChange);

  btnChange.addEventListener('click', () => {
    overlay.remove();
  });

  btnConfirm.addEventListener('click', () => {
    overlay.remove();
    
    const form = document.querySelector('.reservation__form');
    const dateSelect = document.getElementById('reservation__date');
    dateSelect.disabled = true;
    const peopleSelect = document.getElementById('reservation__people');
    peopleSelect.disabled = true;
    const nameInput = document.getElementById('reservation__name');
    nameInput.disabled = true;
    const phoneInput = document.getElementById('reservation__phone');
    phoneInput.disabled = true;
    const buttonElement = document.querySelector('.reservation__button');
    buttonElement.disabled = true;
  });

  document.body.append(overlay);
};

export default showModal;