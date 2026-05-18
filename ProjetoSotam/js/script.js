
// --------- Variables Defitions ---------
let images = document.querySelectorAll("img");

const btnPlus = document.getElementById('btn-plus');
const btnMinus = document.getElementById('btn-minus');

// Available sizes
const sizes = ['img-small', 'img-medium', 'img-large'];

// Set the MEDIUM size as default
let currentSize = 1;
images.forEach(function(img) {
    img.classList.add("img-large");
});

function updateSize() {
    images.forEach(img => {
        // Remove all size configuration on the images
        img.classList.remove(...sizes);
        // Apply the new size configuration to all images
        img.classList.add(sizes[currentSize]);
    });
}

// --------- Mapping buttons ---------
btnPlus.addEventListener('click', () => {
    if (currentSize < 2) { 
        currentSize++;
        updateSize();
    }
});

btnMinus.addEventListener('click', () => {
    if (currentSize > 0) { 
        currentSize--;
        updateSize();
    }
});
