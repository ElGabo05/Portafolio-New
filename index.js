
const quienSoyHeader = document.querySelector('.QuienSoy2');

quienSoyHeader.addEventListener('click', () => {
    quienSoyHeader.style.color = 'blue';
    alert('¡Hola! Ahora sabes más sobre mí.');
});

const gaboImage = document.querySelector('.GaboCara');

const proyectos = document.querySelector('.Proyectos');
const tituloProyectos = proyectos.querySelector('h1');

tituloProyectos.addEventListener('click', () => {
    const listaProyectos = proyectos.querySelector('ol');
    listaProyectos.style.display = listaProyectos.style.display === 'none' ? 'block' : 'none';
});

const iframeVideo = document.querySelector('iframe');

iframeVideo.addEventListener('mouseenter', () => {
    iframeVideo.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
});