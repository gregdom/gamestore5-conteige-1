const formid = document.getElementById('formid');
const user_name = document.getElementById('user_name');
const user_email = document.getElementById('user_email');
const user_password = document.getElementById('user_password');
const user_cpf = document.getElementById('user_cpf');

formid.addEventListener("submit", (e) => {
  e.preventDefault()

  if (verifyEntries()) {
    e.target.submit();
  }
})

function verifyEntries() {

  let status = true;

  const nameValue = user_name.value.trim();
  const emailValue = user_email.value.trim();
  const passwordValue = user_password.value.trim();
  const cpfValue = user_cpf.value.trim();

  if (nameValue === "") {
    showError(user_name, 'Preencha esse campo')
    status = false;
  } else {
    showSuccess(user_name)
  }


  if (emailValue === "") {
    showError(user_email, "O campo não pode estar vazio");
    status = false;
  } else if (!isEmail(emailValue)) {
    showError(user_email, 'Email inválido');
    status = false;
  } else {
    showSuccess(user_email)
  }


  if (passwordValue === '') {
    showError(user_password, 'Preencha esse campo');
    status = false;
  } else if (passwordValue.length < 8) {
    showError(user_password, 'Senha deve ter 8 ou mais caracteres');
    status = false;
  } else {
    showSuccess(user_password);
  }


  if (cpfValue === '') {
    showError(user_cpf, 'Preencha esse campo');
    status = false;
  } else if (cpfValue.length < 11) {
    showError(user_cpf, 'CPF deve ter 11 dígitos');
    status = false;
  } else if (isNaN(cpfValue)) {
    showError(user_cpf, 'Apenas números são permitidos');
    status = false;
  } else {
    showSuccess(user_cpf);
  }

  return status;
}


function showError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small')

  small.innerText = message

  formControl.className = 'form-control error'
}

function showSuccess(input) {
  const formControl = input.parentElement;

  formControl.className = 'form-control success'
}

function isEmail(email) {
  return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}