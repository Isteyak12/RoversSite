document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('clickable-image');
    const smokeContainer = document.getElementById('smoke-container');
  
    image.addEventListener('click', (event) => {
      const rect = image.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
  
      for (let i = 0; i < 3; i++) {
        createSmoke(x, y);
      }
    });
  
    function createSmoke(x, y) {
      const smoke = document.createElement('div');
      smoke.className = 'smoke';
      smoke.style.left = `${x}px`;
      smoke.style.top = `${y}px`;
  
      // Generate random horizontal offset for the puff
      const horizontalOffset = (Math.random() - 0.5) * 50; // Random value between -25 and 25
      smoke.style.transform = `translate(${horizontalOffset}px, 0)`;
  
      smokeContainer.appendChild(smoke);
  
      smoke.addEventListener('animationend', () => {
        smokeContainer.removeChild(smoke);
      });
    }
  });
  