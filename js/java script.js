function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    const menuIcon = document.getElementById('menu-icon'); // Obtén el ícono del menú

    if (sideMenu.style.left === '0px') {
        // Si el menú está abierto, ciérralo
        closeMenu();
    } else {
        // Si el menú está cerrado, ábrelo
        sideMenu.style.left = '0px';
        menuIcon.style.display = 'none'; // Oculta el ícono
    }
}

function closeMenu() {
    const sideMenu = document.getElementById('side-menu');
    const menuIcon = document.getElementById('menu-icon');

    sideMenu.style.left = '-250px'; // Oculta el menú
    menuIcon.style.display = 'block'; // Muestra el ícono
}

// Agrega un evento para cerrar el menú al hacer clic fuera de él
document.addEventListener('click', function (event) {
    const sideMenu = document.getElementById('side-menu');
    const menuIcon = document.getElementById('menu-icon');

    // Si el menú está abierto y se hace clic fuera de él
    if (sideMenu.style.left === '0px' && !sideMenu.contains(event.target) && !menuIcon.contains(event.target)) {
        closeMenu();
    }
});

// Función para expandir la imagen
function expandImage(img) {
    const expandedImage = document.getElementById('expanded-image');
    const largeImage = document.getElementById('large-image');

    // Cambia la fuente de la imagen ampliada
    largeImage.src = img.src;
    expandedImage.style.display = 'flex'; // Cambia a flex para centrar la imagen
}

// Función para cerrar la imagen ampliada
function closeExpandedImage() {
    const expandedImage = document.getElementById('expanded-image');
    expandedImage.style.display = 'none'; // Oculta la imagen ampliada
}

// Imágenes
let currentImageIndex = 0; // Índice de la imagen actual
const images = document.querySelectorAll('.gallery-image');

function showImage(index) {
    currentImageIndex = (index + images.length) % images.length; // Asegura el ciclo
    const galleryImages = document.querySelector('.gallery-images');
    galleryImages.style.transform = `translateX(-${currentImageIndex * 500}px)`; // Mueve las imágenes
}

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length; // Calcula el nuevo índice
    showImage(currentImageIndex); // Cambia la imagen
}

// Función para abrir la imagen en tamaño expandido
function openImage(imageSrc) {
    const expandedImage = document.getElementById('expanded-image');
    const largeImage = document.getElementById('large-image'); // Asegúrate de que el ID coincida

    largeImage.src = imageSrc; // Establece la imagen expandida
    expandedImage.style.display = 'flex'; // Muestra la imagen expandida
}

// Función para cerrar la imagen expandida
function closeImage() {
    const expandedImage = document.getElementById('expanded-image');
    expandedImage.style.display = 'none'; // Oculta la imagen expandida
}

// Muestra la primera imagen al cargar
showImage(currentImageIndex);

// Agregar evento click a las imágenes para abrir la imagen expandida
images.forEach((img) => {
    img.addEventListener('click', () => openImage(img.src));
});

// Intervalo para cambiar automáticamente las imágenes cada 5 segundos
setInterval(() => {
    changeImage(1); // Cambia a la siguiente imagen automáticamente
}, 5000);
