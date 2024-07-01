const inputTel = document.getElementById("reservation__phone");
const telMask = new Inputmask("+7 (999)-999-99-99");

telMask.mask(inputTel);
