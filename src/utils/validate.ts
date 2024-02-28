interface IValidate {
  isValid: boolean;
  errorMessages: string[];
}

function validateField(fieldName: string, value: string): IValidate {
  const errorMessages: string[] = [];

  switch (fieldName) {
    case 'first_name':
    case 'second_name':
      if (value.trim() === '') {
        errorMessages.push('Заполните поле');
      } else if (!/^[A-ZА-Я][a-zа-я\s-]*$/.test(value)) {
        if (!/^[A-ZА-Я]/.test(value)) {
          errorMessages.push('Первая буква должна быть заглавной');
        }
        if (/\d/.test(value)) {
          errorMessages.push('Цифры не допустимы');
        }
        if (/\s/.test(value)) {
          errorMessages.push('Пробелы не допустимы');
        }
        if (/[^A-Za-zА-Яа-я\s-\d]/.test(value)) {
          errorMessages.push('Допустимы только латиница, кириллица, пробел и дефис');
        }
      }
      break;

    case 'display_name':
    case 'login':
      if (value.trim() === '') {
        errorMessages.push('Заполните поле');
      } else if (value.length < 3 || value.length > 20) {
        errorMessages.push('От 3 до 20 символов');
      } else if (/\s/.test(value) || /-/.test(value)) {
        errorMessages.push('Без пробелов и дефисов');
      } else if (!/^[A-Za-z][A-Za-z0-9_-]*$/.test(value)) {
        errorMessages.push('Допустима только латиница');
      }
      break;

    case 'email':
      if (value.trim() === '') {
        errorMessages.push('Заполните поле');
      } else if (!/^[a-zA-Z0-9.@_-]+$/.test(value)) {
        errorMessages.push('Только латиница, допустимы символы "@ _ - ."');
      } else if (!/^[a-zA-Z0-9@_-]+@/.test(value)) {
        errorMessages.push('Должен содержать текст до @');
      } else if (!/^[a-zA-Z0-9@_-]+@.+?\..+?$/.test(value)) {
        errorMessages.push('Должен содержать текст и точку после @');
      }
      break;

    case 'newPassword':
    case 'oldPassword':
    case 'password':
      if (value.trim() === '') {
        errorMessages.push('Заполните поле');
      } else if (value.length < 8 || value.length > 40) {
        errorMessages.push('От 8 до 40 символов');
      } else if (!/(?=.*[A-Z])(?=.*\d)/.test(value)) {
        errorMessages.push('Хотя бы одна заглавная буква и цифра');
      }
      break;

    case 'phone':
      if (value.trim() === '') {
        errorMessages.push('Заполните поле');
      } else if (!/^\+?\d{10,15}$/.test(value)) {
        errorMessages.push('От 10 до 15 цифр');
      }
      break;

    case 'message':
      if (value.trim() === '') {
        errorMessages.push('Поле не должно быть пустым');
      }
      break;

    default:
      if (errorMessages.length === 0) {
        errorMessages.push('');
      }
      break;
  }

  return {
    isValid: errorMessages.length === 0,
    errorMessages,
  };
}

export function validateInput(input: HTMLInputElement) {
  const fieldName = input.name;
  const { value } = input;
  const errorDivClass = `${fieldName}-error`;
  const existingErrorDiv = input.parentNode?.querySelector(`.${errorDivClass}`);

  const { isValid, errorMessages } = validateField(fieldName, value);

  if (!isValid) {
    input.classList.add('invalid');
    input.setAttribute('dataValid', 'false');

    if (existingErrorDiv) {
      existingErrorDiv.textContent = errorMessages.join(', ');
    } else {
      const errorDiv = document.createElement('div');
      if (input.classList.contains('profile__input')) {
        errorDiv.classList.add('error__right');
      }
      errorDiv.classList.add('error__message');
      errorDiv.classList.add(errorDivClass);
      errorDiv.textContent = errorMessages.join(', ');
      input.parentNode?.insertBefore(errorDiv, input.nextSibling);
    }

    input.setAttribute('dataValid', 'false');
  } else {
    if (existingErrorDiv) {
      existingErrorDiv.remove();
    }

    input.classList.remove('invalid');
    input.removeAttribute('dataValid');
  }
}

export function validateForm() {
  const inputs = document.querySelectorAll('.validate-input') as NodeListOf<HTMLInputElement>;
  const formData: Record<string, string> = {};
  let valid = false;

  inputs.forEach((input) => {
    if (input.getAttribute('dataValid')) {
      valid = false;
    } else {
      valid = true;
    }

    formData[input.name] = input.value;

    validateInput(input);
  });

  if (valid) {
    console.log('Form data:', formData);
  }
}
