const toggles = document.querySelectorAll('.payment-toggle');

// When a payment toggle is changed, uncheck all other toggles
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

// Calculate and display the parking duration and cost
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

// Update parking details with highlighted values
document.addEventListener("DOMContentLoaded", function () {
  const durationPara = document.querySelector(".content p:nth-of-type(2)");
  const costPara = document.querySelector(".content p:nth-of-type(3)");

  const label = localStorage.getItem("parkingDurationLabel");
  const mins = parseInt(localStorage.getItem("parkingDurationMins"), 10);

  if (label && !isNaN(mins)) {
    durationPara.innerHTML = `<i class="fas fa-clock"></i> <b>Duration:</b> <span class="highlight-value">${label}</span>`;

    const blocks = Math.ceil(mins / 30);
    const cost = blocks * 2.5;
    costPara.innerHTML = `<i class="fas fa-pound-sign"></i> <b>Cost:</b> <span class="highlight-value">£${cost.toFixed(2)}</span>`;
  }

  const toggles = document.querySelectorAll('.payment-toggle');
  const visaToggle = document.querySelector('input[value="visa"]');
  const popup = document.getElementById('visa-popup');
  const submitCardBtn = document.getElementById('submit-card');

  // Handle payment toggle changes, especially for Visa toggle
  toggles.forEach(toggle => {
    toggle.addEventListener('change', (e) => {
      if (toggle === visaToggle && toggle.checked) {
        e.preventDefault();
        toggle.checked = false;
        popup.style.display = 'flex';
      } else if (toggle.checked) {
        toggles.forEach(other => {
          if (other !== toggle) {
            other.checked = false;
          }
        });
      }
    });
  });

  // Handle Visa card submission
  submitCardBtn.addEventListener('click', () => {
    const cardNumber = document.getElementById('card-number').value.trim();
    const expiry = document.getElementById('expiry').value.trim();
    const cvc = document.getElementById('cvc').value.trim();
  
    const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryPattern.test(expiry)) {
      alert("Please enter a valid expiry date in MM/YY format.");
      return;
    }
  
    if (!/^\d{3}$/.test(cvc)) {
      alert("Please enter a valid 3-digit CVC.");
      return;
    }
  
    popup.style.display = 'none';
    visaToggle.checked = true;
  
    toggles.forEach(other => {
      if (other !== visaToggle) {
        other.checked = false;
      }
    });
  });
});

// Format expiry input as MM/YY
const expiryInput = document.getElementById('expiry');

expiryInput.addEventListener('input', function (e) {
  let value = this.value.replace(/\D/g, '');
  if (value.length >= 2 && !this.value.includes('/')) {
    this.value = value.slice(0, 2) + '/' + value.slice(2, 4);
  } else {
    this.value = value;
  }
});

// Close Visa popup when back button is clicked
const popup = document.getElementById('visa-popup');
const visaToggle = document.querySelector('input[value="visa"]');
const backBtn = document.getElementById('popup-back-btn');

backBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  visaToggle.checked = false;
});

// Handle payment confirmation
document.addEventListener("DOMContentLoaded", function () {
  const confirmBtn = document.getElementById("confirm-pay-btn");

  confirmBtn.addEventListener("click", function () {
    alert("Payment successful!");
    window.location.href = "step3.html";
  });
});
