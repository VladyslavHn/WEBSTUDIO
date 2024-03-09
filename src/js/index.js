const sub = document.querySelector('.send-button');
const order = document.querySelector('.button');
const close = document.querySelector('.close-but');
const modalContainer = document.querySelector('.container-modal-window')

order.addEventListener('click', (e) => {
    modalContainer.classList.add('is-open');
})

close.addEventListener('click', (e) => {
    modalContainer.classList.remove('is-open');
})