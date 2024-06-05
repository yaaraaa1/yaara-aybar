// script.js

window.onload = function() {
    const img = document.getElementById('desk');
    const map = document.getElementById('image-map');
    const areas = map.getElementsByTagName('area');
    const hoverImages = document.getElementsByClassName('hover-image');

    const originalWidth = 1600; // Original width of the image
    const originalHeight = 1200; // Original height of the image

    function resizeMap() {
        const widthRatio = img.clientWidth / originalWidth;
        const heightRatio = img.clientHeight / originalHeight;

        for (let i = 0; i < areas.length; i++) {
            const coords = areas[i].dataset.coords.split(',');
            const newCoords = coords.map((coord, index) => {
                return index % 2 === 0 ? coord * widthRatio : coord * heightRatio;
            });
            areas[i].coords = newCoords.join(',');
        }

        for (let i = 0; i < hoverImages.length; i++) {
            hoverImages[i].style.width = img.clientWidth + 'px';
            hoverImages[i].style.height = img.clientHeight + 'px';
            hoverImages[i].style.left = img.offsetLeft + 'px';
            hoverImages[i].style.top = img.offsetTop + 'px';
            hoverImages[i].style.display = 'none'; // Ensure hover images are hidden initially
        }
    }

    window.addEventListener('resize', resizeMap);
    resizeMap();

    // Handle hover events
    for (let i = 0; i < areas.length; i++) {
        areas[i].addEventListener('mouseover', function() {
            const targetId = this.getAttribute('data-hover-target');
            if (targetId) {
                document.getElementById(targetId).style.display = 'block';
            }
        });
        areas[i].addEventListener('mouseout', function() {
            const targetId = this.getAttribute('data-hover-target');
            if (targetId) {
                document.getElementById(targetId).style.display = 'none';
            }
        });
    }
};
