  let currentSize = 16;

  const scrollableContent = document.querySelector('.scrollable-content');

  const applyFontSize = () => {
    scrollableContent.querySelectorAll('*').forEach(el => {
      el.style.fontSize = currentSize + 'px';
    });
  };

  document.getElementById('font-increase').addEventListener('click', () => {
    currentSize += 1;
    applyFontSize();
  });

  document.getElementById('font-decrease').addEventListener('click', () => {
    currentSize = Math.max(10, currentSize - 1);
    applyFontSize();
  });

  applyFontSize();
