const sub = document.querySelector('.send-button');
const order = document.querySelector('.button');
const close = document.querySelector('.close-but');
const modalContainer = document.querySelector('.container-modal-window');

order.addEventListener('click', () => {
    modalContainer.classList.add('is-open');
});

close.addEventListener('click', () => {
    modalContainer.classList.remove('is-open');
});

sub.addEventListener('click', (e) => {
    e.preventDefault(); 

    const name = document.getElementById('user-name').value;
    const phone = document.getElementById('user-phone').value;
    const mail = document.getElementById('user-mail').value;
    const comment = document.getElementById('user-comment').value;
    const privacy = document.getElementById('user-privacy').checked;

    if (name === '' || phone === '' || mail === '' || comment === '' || !privacy) {
        alert('Please fill in all the form fields.');
    } else {
        document.querySelector('.modal-form').submit();
    }
});
