function saveParkingDuration(label, totalMinutes) {
  localStorage.setItem("parkingDurationLabel", label);
  localStorage.setItem("parkingDurationMins", totalMinutes.toString());
}

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
  const hours = parseFloat(input.value);

  if (hours && hours > 0) {
    const totalMinutes = Math.round(hours * 60);
    const label = `${hours} Hour${hours !== 1 ? 's' : ''}`;

    saveParkingDuration(label, totalMinutes);

    customLabel.textContent = label;
    const newRadio = document.createElement('input');
    newRadio.type = 'radio';
    newRadio.name = 'duration';
    newRadio.checked = true;
    newRadio.dataset.mins = totalMinutes;
    newRadio.value = label;
    customLabel.prepend(newRadio);

    popup.style.display = 'none';
  }
});

document.querySelectorAll('input[name="duration"]').forEach(radio => {
  radio.addEventListener('change', function () {
    const label = this.value;
    const mins = parseInt(this.dataset.mins);

    saveParkingDuration(label, mins);
  });
});

document.getElementById("back-custom").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("custom-popup").style.display = "none";
});

