const inputTel = document.getElementById("reservation__phone");
const telMask = new Inputmask({
  mask: "+79999999999",
});

telMask.mask(inputTel);
