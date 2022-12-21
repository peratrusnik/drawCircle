window.addEventListener('click', createCircle)
let size = 0; 
    
    
    window.addEventListener('mousedown', function () {
        window.addEventListener('mousemove', updateSize)
    })


function updateSize(e) {
    let view = document.querySelector('.view')
    if (view) {
        view.remove();
    }
    size += 5;
    let box = document.createElement('div');
        box.className = 'view';
        box.style.width = size +'px';
        box.style.height = size +'px';
        box.style.top = e.y  + 'px';
        box.style.left = e.x + 'px';
    document.body.appendChild(box)
}
function createCircle(e) {
    window.removeEventListener('mousemove', updateSize)

    let box = document.createElement('div');
        box.className = 'box';
        box.style.width = size +'px';
        box.style.height = size +'px';
        box.style.top = e.y  + 'px';
        box.style.left = e.x + 'px';
        size = 0;
    document.body.appendChild(box);
}