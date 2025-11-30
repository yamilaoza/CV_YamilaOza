document.addEventListener('DOMContentLoaded', function() {
    const foto = document.getElementById('foto');
    
    // Hacer click en la foto para zoom
    foto.addEventListener('click', function() {
        if (foto.style.transform === 'scale(1.5)') {
            foto.style.transform = 'scale(1)';
        } else {
            foto.style.transform = 'scale(1.5)';
            foto.style.transition = 'transform 0.3s';
            
            setTimeout(function() {
                foto.style.transform = 'scale(1)';
            }, 2000);
        }
    });
});
