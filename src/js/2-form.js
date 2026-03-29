const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData = {
    email: parsedData.email || '',
    message: parsedData.message || '',
  };

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', event => {
  const { name, value } = event.target;

  // сохраняем реальное значение
  formData[name] = value;

  // в localStorage записываем без пробелов по краям
  const trimmedData = {
    email: formData.email.trim(),
    message: formData.message.trim(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmedData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (
    formData.email.trim() === '' ||
    formData.message.trim() === ''
  ) {
    alert('Fill please all fields');
    return;
  }

  console.log({
    email: formData.email.trim(),
    message: formData.message.trim(),
  });

  localStorage.removeItem(STORAGE_KEY);
  form.reset();

  formData = {
    email: '',
    message: '',
  };
});