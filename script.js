// Aggiunge un effetto parallasse leggero sulle card fluttuanti
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.floating-card');
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    cards.forEach((card, index) => {
        const factor = (index + 1) * 15;
        card.style.transform = `translate(${mouseX * factor}px, ${mouseY * factor}px)`;
    });
});