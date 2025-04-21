document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const locationText = document.getElementById("location-text");
  const durationText = document.getElementById("duration-text");
  const costText = document.getElementById("cost-text");
  const endPopup = document.getElementById("endPopup");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const extendPopup = document.getElementById("extendPopup");
  const extendBtn = document.querySelector(".extend-btn");
  const extendConfirmBtn = document.getElementById("extendConfirmBtn");
  const extendCancelBtn = document.getElementById("extendCancelBtn");
  const extendInput = document.getElementById("extendInput");

  const costPerBlock = 2.5; // £2.50 per 30 mins
  const startTimestamp = Date.now();

  // Load from localStorage
  const location = localStorage.getItem("parkingLocation") || "Victoria Leeds Car Park";
  const initialMins = parseInt(localStorage.getItem("parkingDurationMins"), 10) || 72;

  locationText.textContent = location;

  // Store endTimestamp globally
  let endTimestamp = startTimestamp + initialMins * 60 * 1000;

  // Countdown function
  function updateCountdown() {
    const now = Date.now();
    const diff = endTimestamp - now;

    if (diff <= 0) {
      durationText.textContent = "Expired";
      return;
    }

    const minsLeft = Math.floor(diff / 60000);
    const hours = Math.floor(minsLeft / 60);
    const minutes = minsLeft % 60;
    durationText.textContent = `${hours}h ${minutes}m left`;

    const blocks = Math.ceil((endTimestamp - startTimestamp) / (30 * 60 * 1000));
    const cost = blocks * costPerBlock;
    if (costText) costText.textContent = `£${cost.toFixed(2)}`;
  }

  // Start countdown
  setInterval(updateCountdown, 1000);
  updateCountdown();

  // End session popup
  document.querySelector(".end-btn").addEventListener("click", () => {
    endPopup.style.display = "flex";
  });

  yesBtn.addEventListener("click", () => {
    alert("Parking session ended.");
    window.location.href = "homePageJoel.html";
  });

  noBtn.addEventListener("click", () => {
    endPopup.style.display = "none";
  });

  // Extend popup
  extendBtn.addEventListener("click", () => {
    extendPopup.style.display = "flex";
  });

  extendCancelBtn.addEventListener("click", () => {
    extendPopup.style.display = "none";
    extendInput.value = "";
  });

  extendConfirmBtn.addEventListener("click", () => {
    const additionalMinutes = parseInt(extendInput.value, 10);

    if (
      isNaN(additionalMinutes) ||
      additionalMinutes < 30 ||
      additionalMinutes % 30 !== 0
    ) {
      alert("Please enter a valid number of minutes (30, 60, 90, etc.).");
      return;
    }
    

    endTimestamp += additionalMinutes * 60 * 1000;
    alert(`Parking session successfully extended by ${additionalMinutes} minutes.`);
    extendPopup.style.display = "none";
    extendInput.value = "";
  });
});
