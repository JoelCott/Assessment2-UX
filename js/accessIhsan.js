// Initialize current font size
let currentSize = 16;

// Get the scrollable content element
const scrollableContent = document.querySelector('.scrollable-content');

// Function to apply the current font size to all elements inside scrollable content
const applyFontSize = () => {
  scrollableContent.querySelectorAll('*').forEach(el => {
    el.style.fontSize = currentSize + 'px';
  });
};

// Increase font size when button is clicked
document.getElementById('font-increase').addEventListener('click', () => {
  currentSize += 1;  // Increase size by 1
  applyFontSize();    // Apply updated font size
});

// Decrease font size when button is clicked
document.getElementById('font-decrease').addEventListener('click', () => {
  currentSize = Math.max(10, currentSize - 1);  // Ensure font size doesn't go below 10px
  applyFontSize();    // Apply updated font size
});

// Apply the initial font size
applyFontSize();
