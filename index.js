const form = document.querySelector('.questions__form');
const requiredInputs = document.querySelectorAll('.required');

function formValidation(event) {
  let isValid = true;

  requiredInputs.forEach(input => {
    if (input.value.trim() === '') {
      isValid = false;
      input.classList.add('error');
      input.classList.remove('success');
      input.nextElementSibling.classList.add('questions__required-field-show');
    } else {
      input.classList.remove('error');
      input.classList.add('success');
      input.nextElementSibling.classList.remove('questions__required-field-show');
    }
  });

  if (!isValid) {
    event.preventDefault();
  }
}

requiredInputs.forEach(input => {
  input.addEventListener('input', function() {
    if (input.value.trim() === '') {
      input.classList.remove('success');
      input.classList.add('error');
      input.nextElementSibling.classList.add('questions__required-field-show');
    } else {
      input.classList.remove('error');
      input.classList.add('success');
      input.nextElementSibling.classList.remove('questions__required-field-show');
    }
  });
});

form.addEventListener('submit', formValidation);
