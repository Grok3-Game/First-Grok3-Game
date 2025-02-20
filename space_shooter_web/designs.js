const designGallery = document.getElementById('designGallery');
const changeDesignButton = document.getElementById('changeDesign');

// Available ship designs
const designs = [
    { name: 'Default', src: 'assets/images/spaceship1.png' },
    { name: 'Stealth', src: 'assets/images/spaceship2.png' },
    { name: 'Heavy', src: 'assets/images/spaceship3.png' }
];

let currentDesignIndex = 0;

// Populate design gallery
designs.forEach(design => {
    const div = document.createElement('div');
    div.classList.add('design-item');
    const img = document.createElement('img');
    img.src = design.src;
    img.alt = design.name;
    img.onerror = () => { img.src = 'assets/images/spaceship1.png'; }; // Fallback
    const p = document.createElement('p');
    p.textContent = design.name;
    p.style.color = '#fff';
    div.appendChild(img);
    div.appendChild(p);
    designGallery.appendChild(div);
});

// Change ship design on button click
changeDesignButton.addEventListener('click', () => {
    currentDesignIndex = (currentDesignIndex + 1) % designs.length;
    currentDesign = new Image();
    currentDesign.src = designs[currentDesignIndex].src;
    currentDesign.onload = () => {
        spaceshipImg = currentDesign; // Update game design
    };
    currentDesign.onerror = () => {
        currentDesign.src = 'assets/images/spaceship1.png'; // Fallback
    };
});