const spinner = document.getElementById('spinner');
const  cardContainer = document.getElementById('card-container');
function showSpinner() {
    spinner.classList.remove('hidden');
    cardContainer.classList.add('hidden')
}
function hideSpinner() {
     spinner.classList.add('hidden')
     cardContainer.classList.remove('hidden')
}