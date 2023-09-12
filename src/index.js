import validator from 'validator';

const data = document.querySelector('#data');
const dataType = document.querySelector('#dataType');
const message = document.querySelector('h4');
const validateButton = document.querySelector('button');

validateButton.addEventListener('click', (event) => {
  event.preventDefault();

  const validateEmail = validator.isEmail(data.value);
  const validateCPF = validator.isTaxID(data.value, 'pt-BR');

  if (dataType.value === 'email') {
    message.innerHTML = `a validação retornou ${validateEmail}`;
  } else if (dataType.value === 'cpf') {
    message.innerHTML = `A validação retornou ${validateCPF}`;
  }
});
