function subredditSelector(){

const dialog = document.querySelector('dialog')
const submitButton = document.getElementById('submit-button')

submitButton.addEventListener('click', function(event){
    event.preventDefault();

    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="subreddit"]');

    let atLeastOneSelected = false;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            atLeastOneSelected = true;
        }
    })
    if (atLeastOneSelected) {
        dialog.close()
    } else {
        alert('Seleziona almeno un subreddit!')
    }
})
}

const dialogButton = document.getElementById('dialog-btn')
const dialog = document.querySelector('dialog')
dialogButton.addEventListener('click', () => {dialog.showModal()})