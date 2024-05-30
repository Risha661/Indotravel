import loadStyle from "./loadStyle.js";
import './render.js';

const showModal = (data) => {
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
  reservText.textContent = `Бронирование путешествия в Индию на  человек`;
  dateText.classList.add('modal__text');
  dateText.textContent = `В даты: `;
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


  document.body.append(overlay);
};

export default showModal;