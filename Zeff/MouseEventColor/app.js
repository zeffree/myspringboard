let screenLog = document.querySelector('#screen-log');
document.addEventListener('mousemove', logKey);

let body = document.querySelector('body');

function logKey(e) {
    let r = Math.floor((e.pageX/window.innerWidth) * 256);
    let b = Math.floor((e.pageY/window.innerHeight) * 256);
    
    screenLog.innerText = `
    Page X/Y: ${e.pageX}, ${e.pageY}
    InnerWidth: ${window.innerWidth}
    InnerHeight: ${window.innerHeight}
    RGB : ${r},g, ${b}`;

    document.body.style.backgroundColor = `rgb(${r},0,${b})`;
    
}