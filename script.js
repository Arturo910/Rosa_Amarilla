document.addEventListener('DOMContentLoaded', function() {
    const contenedorPrincipal = document.getElementById('contenedorPrincipal');
    const btnIniciar = document.getElementById('btnIniciar');
    const contenedorRosa = document.getElementById('contenedorRosa');
    const mensajeSecundario = document.getElementById('mensajeSecundario');
    const btnRegresar = document.getElementById('btnRegresar');
    
    // Evento para el botón INICIAR
    btnIniciar.addEventListener('click', function() {
        contenedorPrincipal.classList.add('oculto');
        contenedorRosa.classList.add('activo');
        
        setTimeout(function() {
            mensajeSecundario.classList.add('activo');
            btnRegresar.classList.add('activo');
        }, 1500);
    });
    
    // Evento para el botón REGRESAR
    btnRegresar.addEventListener('click', function() {
        contenedorPrincipal.classList.remove('oculto');
        contenedorRosa.classList.remove('activo');
        mensajeSecundario.classList.remove('activo');
        btnRegresar.classList.remove('activo');
    });
});