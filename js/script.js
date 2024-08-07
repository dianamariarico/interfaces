var videos = document.querySelectorAll('iframe');



function detenerVideos() {
    // Obtén todos los elementos iframe con la clase 'contenido'
    var videos = document.querySelectorAll('.contenido iframe');

    // Itera sobre cada iframe
    videos.forEach(function(video) {
        var videoSrc = video.src;

        // Modifica la URL del video para detener la reproducción
        video.src = videoSrc.replace('?autoplay=1', ''); // Reemplaza '?autoplay=1' con una cadena vacía
        video.src = videoSrc.replace('&autoplay=1', ''); // En caso de que haya otros parámetros en la URL

        // Pausa el video si ya se ha cargado
        if (typeof video.contentWindow.postMessage === 'function') {
            video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
    });
}

function cambiarContenido(seleccionado) {
    detenerVideos();

    var contenidos = document.getElementsByClassName('contenido');

    for (var i = 0; i < contenidos.length; i++) {
        if (i + 1 === seleccionado) {
            contenidos[i].style.display = 'block';
        } else {
            contenidos[i].style.display = 'none';
        }
    }
    // Mostrar el enlace para descargar el PDF
    document.getElementById('pdfLink').style.display = 'block';

    // Cambiar la URL del PDF según la ubicación de tu archivo PDF
    // En este caso, asumimos que el PDF está en la misma carpeta que el HTML
    document.getElementById('pdfLink').href = 'pdf/FDBD0_U2.pdf';
}

function abrirPagina() {
    // Redirecciona a la página "Unidad-clase1"
    window.location.href = "Unidad1-clase1.html";

}

Inicio

function Inicio() {
    // Redirecciona a la página "Index"
    window.location.href = "index.html";

}