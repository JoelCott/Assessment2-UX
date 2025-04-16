let fontSizeLevel = 0;

const updateFontSize = () => {
  const baseSize = 16;
  const newSize = baseSize + fontSizeLevel * 2;
  document.querySelector('.phone').style.fontSize = `${newSize}px`;
};

document.getElementById('font-increase').addEventListener('click', () => {
  fontSizeLevel++;
  updateFontSize();
});

document.getElementById('font-decrease').addEventListener('click', () => {
  fontSizeLevel--;
  updateFontSize();
});

// Visual-only toggles (no real effect yet)
document.querySelectorAll('.toggle-input').forEach(toggle => {
  toggle.addEventListener('change', (e) => {
    const toggleState = e.target.checked;
    console.log(`${e.target.id} is ${toggleState ? 'ON' : 'OFF'}`);
  });
});

