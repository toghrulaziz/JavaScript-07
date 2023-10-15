function trackMouse(event) {
    var tracker = document.getElementById('tracker');
    tracker.innerHTML = 'Mouse Coordinates: (' + event.clientX + ', ' + event.clientY + ')';
}

function detectMouseButton(event) {
    var tracker = document.getElementById('tracker');
    var buttonClicked = '';
    window.oncontextmenu = ()=> false;

    switch (event.button) {
        case 0:
            buttonClicked = 'Left';
            break;
        case 2:
            event.preventDefault();
            buttonClicked = 'Right';
            break;
        default:
            buttonClicked = 'Unknown';
            break;
    }

    tracker.innerHTML += '<br>Mouse Button Clicked: ' + buttonClicked;
}