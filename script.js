const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.show-modal')

//function
const closeModal = () => {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
};

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden')
};

//open modal
btnOpenModal.addEventListener('click', openModal)


//close modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// closing with esc keyboard
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
})