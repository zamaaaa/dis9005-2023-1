console.log('Welcome to Mercy Howlett Portfolio');
//Comando para ocultar puntero//
document.body.style.cursor = 'none';
//Comando de nuevo puntero//
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
cursor.setAttribute("style",`top: ${e.pageY - 0}px; left: ${e.pageX - 0}px;`);
})