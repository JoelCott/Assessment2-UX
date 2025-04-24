function saveParkingDuration(label, totalMinutes) {
  // Save parking duration label and minutes to localStorage
  localStorage.setItem("parkingDurationLabel", label);
  localStorage.setItem("parkingDurationMins", totalMinutes.toString());
}

const customRadio = document.querySelector('.radio-group input[type="radio"]:last-of-type');
const popup = document.getElementById('custom-popup');
const confirmBtn = document.getElementById('confirm-custom');
const input = document.getElementById('custom-hours');
const customLabel = customRadio.closest('label');

// Show custom popup when custom radio is selected
customRadio.addEventListener('change', () => {
  popup.style.display = 'flex';
  input.value = ''; // Clear the input field
});

// Confirm custom duration and save it
confirmBtn.addEventListener('click', () => {
  const hours = parseFloat(input.value);

  // If input is valid, save and update the label
  if (hours && hours > 0) {
    const totalMinutes = Math.round(hours * 60);
    const label = `${hours} Hour${hours !== 1 ? 's' : ''}`;

    saveParkingDuration(label, totalMinutes);

    // Update the label with the new duration
    customLabel.textContent = label;

    // Create a new radio button for the custom duration
    const newRadio = document.createElement('input');
    newRadio.type = 'radio';
    newRadio.name = 'duration';
    newRadio.checked = true;
    newRadio.dataset.mins = totalMinutes;
    newRadio.value = label;
    customLabel.prepend(newRadio);

    // Hide the popup
    popup.style.display = 'none';
  }
});

// Listen for changes on other radio buttons and save selected duration
document.querySelectorAll('input[name="duration"]').forEach(radio => {
  radio.addEventListener('change', function () {
    const label = this.value;
    const mins = parseInt(this.dataset.mins);

    saveParkingDuration(label, mins);
  });
});

// Close the popup when back button is clicked
document.getElementById("back-custom").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("custom-popup").style.display = "none";
});
