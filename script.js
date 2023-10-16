function createFallingElement() {
    const element = document.createElement('h1');
    element.className = 'element';
    element.innerHTML = `❄️`;
    element.style.left = `${Math.random() * 100}%`;
    element.style.width = `${Math.random() * 50 + 10}px`; // Tamaño aleatorio entre 10px y 60px
    element.style.height = element.style.width; // Para que no deforme el icono
    document.querySelector('.container').appendChild(element);

    element.addEventListener('animationend', () => {
        element.remove();
    });
}

setInterval(createFallingElement, 2000);



