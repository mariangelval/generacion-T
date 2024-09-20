function seEjecutaEnEvento() {
    const body = document.querySelector('body');

    body.insertAdjacentHTML('beforeend', '<p>BEEP</p>');

    body.classList.toggle('color');
}

const beepButton = document.querySelector('button');

beepButton.addEventListener('click', seEjecutaEnEvento);
