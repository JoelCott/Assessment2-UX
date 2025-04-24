document.addEventListener("DOMContentLoaded", function () {
  // Define variables for elements in the DOM
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

  // Cost per 30-minute block of parking
  const costPerBlock = 2.5;
  // Store the initial timestamp when the parking session started
  const startTimestamp = Date.now();

  // Get location and initial duration from localStorage, or set default values
  const location = localStorage.getItem("parkingLocation") || "Victoria Leeds Car Park";
  const initialMins = parseInt(localStorage.getItem("parkingDurationMins"), 10) || 72;

  // Set the parking location text
  locationText.textContent = location;

  // Calculate the initial end timestamp based on the duration
  let endTimestamp = startTimestamp + initialMins * 60 * 1000;

  // Function to update the countdown for remaining parking time and cost
  function updateCountdown() {
    const now = Date.now();
    const diff = endTimestamp - now;

    if (diff <= 0) {
      durationText.textContent = "Expired"; // Display "Expired" if the time is up
      return;
    }

    // Calculate the remaining minutes and convert to hours and minutes
    const minsLeft = Math.floor(diff / 60000);
    const hours = Math.floor(minsLeft / 60);
    const minutes = minsLeft % 60;
    durationText.textContent = `${hours}h ${minutes}m left`;

    // Calculate the cost based on the number of 30-minute blocks
    const blocks = Math.ceil((endTimestamp - startTimestamp) / (30 * 60 * 1000));
    const cost = blocks * costPerBlock;
    if (costText) costText.textContent = `£${cost.toFixed(2)}`; // Update the cost text
  }

  // Update the countdown every second
  setInterval(updateCountdown, 1000);
  updateCountdown();

  // Event listener for the "End" button to show the end parking session popup
  document.querySelector(".end-btn").addEventListener("click", () => {
    endPopup.style.display = "flex";
  });

  // Event listener for the "Yes" button to end the parking session
  yesBtn.addEventListener("click", () => {
    alert("Parking session ended. Thank you for parking with us :)");
    window.location.href = "homePageJoel.html"; // Redirect to the home page
  });

  // Event listener for the "No" button to close the end popup
  noBtn.addEventListener("click", () => {
    endPopup.style.display = "none";
  });

  // Event listener for the "Extend" button to show the extend parking session popup
  extendBtn.addEventListener("click", () => {
    extendPopup.style.display = "flex";
  });

  // Event listener for the "Cancel" button to close the extend popup without making changes
  extendCancelBtn.addEventListener("click", () => {
    extendPopup.style.display = "none";
    extendInput.value = ""; // Reset the input field
  });

  // Event listener for the "Confirm" button to extend the parking session
  extendConfirmBtn.addEventListener("click", () => {
    const additionalMinutes = parseInt(extendInput.value, 10); // Get the number of additional minutes

    // Validate the input to ensure it's a valid multiple of 30 minutes
    if (
      isNaN(additionalMinutes) ||
      additionalMinutes < 30 ||
      additionalMinutes % 30 !== 0
    ) {
      alert("Please enter a valid number of minutes (30, 60, 90, etc.).");
      return;
    }
    
    // Update the end timestamp by adding the additional minutes
    endTimestamp += additionalMinutes * 60 * 1000;
    alert(`✅ Parking session successfully extended by ${additionalMinutes} minutes.`);
    extendPopup.style.display = "none"; // Close the extend popup
    extendInput.value = ""; // Reset the input field
  });
});
