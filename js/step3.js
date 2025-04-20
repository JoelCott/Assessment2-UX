document.addEventListener("DOMContentLoaded", function () {
  const locationText = document.getElementById("location-text");
  const durationText = document.getElementById("duration-text");
  const costText = document.getElementById("cost-text");

  const location = localStorage.getItem("parkingLocation") || "Victoria Leeds Car Park";
  const duration = localStorage.getItem("parkingDurationLabel") || "1.2 hours";
  const mins = parseInt(localStorage.getItem("parkingDurationMins"), 10) || 72;
  const blocks = Math.ceil(mins / 30);
  const cost = blocks * 2.5;

  locationText.textContent = location;
  durationText.textContent = duration;
  costText.textContent = `£${cost.toFixed(2)}`;
});
