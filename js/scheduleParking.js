document.addEventListener("DOMContentLoaded", function () {
  const customRadio = document.getElementById("timeCustom");
  const customLabel = document.getElementById("customLabel");
  const customPopup = document.getElementById("customPopup");
  const confirmCustom = document.getElementById("confirmCustom");
  const cancelCustom = document.getElementById("cancelCustom");
  const customInput = document.getElementById("customInput");
  const bookButton = document.getElementById("bookButton");

  const dateInput = document.getElementById("date");
  const timeInput = document.querySelector("input[type='time']");

  customRadio.addEventListener("change", () => {
    customPopup.style.display = "flex";
  });

  cancelCustom.addEventListener("click", () => {
    customPopup.style.display = "none";
    customRadio.checked = false;
  });

  confirmCustom.addEventListener("click", () => {
    const value = parseInt(customInput.value);
    if (!isNaN(value) && value >= 30 && value % 30 === 0) {
      const hours = (value / 60).toFixed(1);
      customLabel.textContent = `${hours} Hour${hours !== "1.0" ? "s" : ""}`;
      customPopup.style.display = "none";
    } else {
      alert("Please enter a valid custom time in 30-minute steps.");
    }
  });
  

  bookButton.addEventListener("click", () => {
    const selected = document.querySelector('input[name="time"]:checked');
    const duration = selected ? selected.nextElementSibling.textContent.trim() : null;
    const dateVal = dateInput.value.trim();
    const timeVal = timeInput.value.trim();

    if (!duration || !dateVal || !timeVal) {
      alert("Please fill in all booking details before confirming.");
      return;
    }

    alert(`✅ Booking Confirmed!\n\n📅 Date: ${dateVal}\n⏰ Time: ${timeVal}\n🕒 Duration: ${duration}`);
    window.location.href = "/html/homePageJoel.html";
  });
});

