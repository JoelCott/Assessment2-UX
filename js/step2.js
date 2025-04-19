const toggles = document.querySelectorAll('.payment-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      toggles.forEach(other => {
        if (other !== toggle) {
          other.checked = false;
        }
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const durationPara = document.querySelector(".content p:nth-of-type(2)");
  const costPara = document.querySelector(".content p:nth-of-type(3)");

  const label = localStorage.getItem("parkingDurationLabel");
  const mins = parseInt(localStorage.getItem("parkingDurationMins"), 10);

  if (label && !isNaN(mins)) {
    durationPara.innerHTML = `<i class="fas fa-clock"></i> <b>Duration:</b> ${label}`;

    const blocks = Math.ceil(mins / 30);
    const cost = blocks * 2.5;
    costPara.innerHTML = `<i class="fas fa-pound-sign"></i> <b>Cost:</b> £${cost.toFixed(2)}`;
  }
});




