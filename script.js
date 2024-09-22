window.addEventListener('resize', adjustObjects);
window.addEventListener('load', adjustObjects);

function adjustObjects() {
  const objects = [
    { id: 'folder', bottom: 0, left: 50, href: 'resume.html' },
    { id: 'tab', top: 0, left: 1150, href: 'about.html' },
    { id: 'tea', top: 150, left: 30, href: 'projects.html' },
    { id: 'notes', top: 300, right: 80, href: 'https://linkedin.com/in/yaara-aybar' },
    { id: 'headline', top: 300, right: 80, href: 'index.html'},
    { id: 'menu', top: 0, left: 0, href: '#' } // Add the menu bar
  ];

  objects.forEach(obj => {
    const element = document.getElementById(obj.id);
    const originalWidth = element.naturalWidth;
    const originalHeight = element.naturalHeight;
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;

    const scaleX = currentWidth / originalWidth / 1.8;
    const scaleY = currentHeight / originalHeight / 1.8;
    const scale = Math.min(scaleX, scaleY); // Maintain aspect ratio

    if (obj.id === 'folder') {
      element.style.bottom = '0px'; // Align the bottom of the folder with the bottom of the window
      element.style.left = `${obj.left * scale}px`;
      element.style.width = `${originalWidth * scale}px`;
      element.style.height = `${originalHeight * scale}px`;
    } else if (obj.id === 'tab') {
      element.style.top = '0px'; // Align the top of the tab with the top of the window
      element.style.right = '0px'; // Align the right of the tab with the right of the window
      element.style.width = `${originalWidth * scale}px`;
      element.style.height = `${originalHeight * scale}px`;
    } else if (obj.id === 'notes') {
        element.style.right = '40px';
        element.style.bottom = '40px';
        element.style.width = `${originalWidth/2 * scale}px`;
        element.style.height = `${originalHeight/2 * scale}px`;
    } else if (obj.id === 'tea') {
        element.style.top = `150px`;
        element.style.left = `${obj.left * scale}px`;
        element.style.width = `${originalWidth/1.5 * scale}px`;
        element.style.height = `${originalHeight/1.5 * scale}px`;
    } else if (obj.id === 'headline') {
        // Calculate the largest open space and position the headline
        positionHeadline(element);
    } else {
      element.style.top = `${obj.top * scale}px`;
      element.style.left = `${obj.left * scale}px`;
      element.style.width = `${originalWidth * scale}px`;
      element.style.height = `${originalHeight * scale}px`;
    }

    // Add click event listener to each element
    element.addEventListener('click', () => {
        window.location.href = obj.href;
      });

    // Add CSS to make the element appear clickable
    element.style.cursor = 'pointer';
    });
}

function positionHeadline(element) {
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;
    
    // Adjust the size of the headline to be half its original size
    const headlineOriginalWidth = element.naturalWidth;
    const headlineOriginalHeight = element.naturalHeight;
    const headlineWidth = headlineOriginalWidth / 2;
    const headlineHeight = headlineOriginalHeight / 2;

    // Determine if the window is small
    const isSmallWindow = currentWidth < 750;
    const isBigWindow = currentWidth > 1400;

    if (isSmallWindow) {
        // Center the headline
        element.style.position = 'absolute';
        element.style.top = `${(currentHeight - headlineHeight) / 1.8}px`;
        element.style.left = `${(currentWidth - headlineWidth) / 2}px`;
        element.style.display = 'block';
    } else if (isBigWindow) {
        // Center the headline
        element.style.position = 'absolute';
        element.style.width = `${currentWidth / 1.5}px`;
        element.style.top = `${(currentHeight - headlineHeight)/4}px`;
        element.style.left = `${(currentWidth - headlineWidth) / 2}px`;
        element.style.display = 'block';
    } else {
        // Position the headline at the top
        element.style.display = 'none';
    }

    element.style.width = `${headlineWidth}px`;
    element.style.height = `${headlineHeight}px`;
}
  // Initial adjustment
  adjustObjects();