const objects = [
    { name: 'Manzana', image: 'https://images.unsplash.com/photo-1560806674-d257cac6e4ee?w=400&h=400&fit=crop' },
    { name: 'Gato', image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop' },
    { name: 'Playa', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop' },
    { name: 'Montaña', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop' },
    { name: 'Flor', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop' },
    { name: 'Perro', image: 'https://images.unsplash.com/photo-1633722715463-d30628519d29?w=400&h=400&fit=crop' },
    { name: 'Bosque', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop' },
    { name: 'Atardecer', image: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=400&h=400&fit=crop' },
    { name: 'Océano', image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=400&fit=crop' },
    { name: 'Café', image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=400&fit=crop' }
];

const selectButton = document.getElementById('selectButton');
const randomImage = document.getElementById('randomImage');
const objectName = document.getElementById('objectName');

selectButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * objects.length);
    const selectedObject = objects[randomIndex];
    
    randomImage.src = selectedObject.image;
    objectName.textContent = selectedObject.name;
});