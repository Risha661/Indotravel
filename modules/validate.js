const justValidate = new JustValidate('.reservation__form');

justValidate
  .addField('.reservation__input_name', [
    {
      rule: 'required',
      errorMessage: 'ФИО не введено!'
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Не короче 3 символов'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Слишком длинное имя!'
    },
  ])