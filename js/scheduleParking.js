  const customRadio = document.getElementById('timeCustom');
  const customPopup = document.getElementById('customPopup');
  const confirmCustomBtn = document.getElementById('confirmCustom');
  const cancelCustomBtn = document.getElementById('cancelCustom');
  const customInput = document.getElementById('customInput');
  const customLabel = document.getElementById('customLabel');

  customRadio.addEventListener('change', () => {
    if (customRadio.checked) {
      customPopup.style.display = 'flex';
    }
  });

  confirmCustomBtn.addEventListener('click', () => {
    const value = parseInt(customInput.value);
    if (value % 30 === 0 && value >= 30) {
      let hrs = Math.floor(value / 60);
      let mins = value % 60;
      let text = hrs > 0 ? `${hrs} hr${hrs > 1 ? 's' : ''}` : '';
      if (mins > 0) text += ` ${mins} min${mins > 1 ? 's' : ''}`;
      customLabel.innerText = text.trim();
      customPopup.style.display = 'none';
    } else {
      alert('Please enter time in 30-minute intervals (e.g. 30, 60, 90)');
    }
  });

  cancelCustomBtn.addEventListener('click', () => {
    customPopup.style.display = 'none';
    document.querySelector('input[name="time"]:checked').checked = false;
  });