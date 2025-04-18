const customRadio = document.querySelector('.radio-group input[type="radio"]:last-of-type');
  const popup = document.getElementById('custom-popup');
  const confirmBtn = document.getElementById('confirm-custom');
  const input = document.getElementById('custom-hours');
  const customLabel = customRadio.closest('label');

  customRadio.addEventListener('change', () => {
    popup.style.display = 'flex';
    input.value = '';
  });

  confirmBtn.addEventListener('click', () => {
    const hours = input.value;
    if (hours && parseInt(hours) > 0) {
      customLabel.textContent = `${hours} hours`;
      const newRadio = document.createElement('input');
      newRadio.type = 'radio';
      newRadio.name = 'duration';
      newRadio.checked = true;
      customLabel.prepend(newRadio);
      popup.style.display = 'none';
    }
  });