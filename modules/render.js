export const renderGoods = (data) => {
  const datesSelect = document.getElementById('reservation__date');
  let option = document.querySelectorAll('.reservation__option');

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

    if (index < 6) {
      datesSelect.appendChild(newOption);
    } else if (index > 5) {
      for (let i = item['min-people']; i <= item['max-people']; i++) {
        const subOption = document.createElement('option');
        subOption.value = i;
        subOption.textContent = i;
        subOption.classList.add('tour__option', 'reservation__option');
        datesSelect.appendChild(subOption);
        console.log(subOption, 'subOption');
      }
    }
    console.log(newOption, 'newOption');
  });
}