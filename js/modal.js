(() =>
{
    const refs =
    {
        openModalBtn: document.querySelector('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
     // body: document.querySelector('body'),
        modal: document.querySelector('[data-modal]'),
     // input: document.querySelector('.modal-input')
    };
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    function toggleModal()
    {
        refs.modal.classList.toggle('is-hidden');
        // refs.body.classList.toggle('no-scroll');
    }
})();
function Click_modal()
{
  // var element = document.getElementsByClassName("services__button");
  // element.style.backgroundColor = "red";
  // alert('!');
}