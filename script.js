// script.js

window.onload = function() {
    const img = document.getElementById('desk');
    const map = document.getElementById('image-map');
    const areas = map.getElementsByTagName('area');

    const originalWidth = 1600; // Original width of the image
    const originalHeight = 1200; // Original height of the image (if known)

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
    }

    window.addEventListener('resize', resizeMap);
    resizeMap();
};
