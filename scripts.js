document.getElementById('enviar').addEventListener('click', function () {
    const formulario = document.getElementById('formulario');
    const resultado = document.getElementById('resultado');

    const datos = {
        nombre: formulario.nombre.value,
        apellido: formulario.apellido.value,
        email: formulario.email.value,
        edad: formulario.edad.value,
        sexo: formulario.sexo.value,
        fechaNacimiento: formulario.fechaNacimiento.value,
        direccion: formulario.direccion.value,
        ciudad: formulario.ciudad.value,
        estado: formulario.estado.value,
        pais: formulario.pais.value
    };

    let html = '';

    for (const clave in datos) {
        html += `<p><strong>${clave}:</strong> ${datos[clave]}</p>`;
    }

    resultado.innerHTML = html;
});