const formulario = document.querySelector('#consulta');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    let formularioValido = true;

    const camposRequeridos = formulario.querySelectorAll('[required]');

    camposRequeridos.forEach(function(campo){
        const errorSpan = campo.nextElementSibling;

        if(campo.value.trim()===''){
            campo.classList.add('error');
            errorSpan.textContent = 'Campo obligatorio';
            formularioValido = false;
        } else {
            campo.classList.remove('error');
            errorSpan.textContent = '';
        }
    });

    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const correo = document.querySelector('#correo');
    const errorSpan = correo.nextElementSibling;

    if (correo.value.trim() !== '' && !patronCorreo.test(correo.value.trim())) {
        correo.classList.add('error');
        errorSpan.textContent = 'el correo NO tiene formato válido';
        formularioValido = false;
    }
});