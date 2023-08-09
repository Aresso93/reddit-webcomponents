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
    });

        if (atLeastOneSelected) {
        updateNavbar(checkboxes);
        dialog.close();
        } else {
        alert('Seleziona almeno un subreddit!')
        }
    });

const dialogButton = document.getElementById('dialog-btn')
dialogButton.addEventListener('click', () => {
    dialog.showModal();
    });
}

function updateNavbar(checkboxes){
    console.log('SHORYUKEN!!!');
    const selectedSubreddits = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked){
            selectedSubreddits.push(checkbox.value);
        }
    });


    const customHeader = document.querySelector('#header');
    customHeader.innerHTML = '';
    selectedSubreddits.forEach(subreddit => {
        const link = document.createElement('a');
        link.appendChild(document.createTextNode(`r/${subreddit} - `))
        link.href = `./${subreddit}.html`;
        customHeader.appendChild(link);
    })


    return customHeader;

}

const dialogButton = document.getElementById('dialog-btn')
const dialog = document.querySelector('dialog')
dialogButton.addEventListener('click', () => {dialog.showModal()})


// const navbarContainer = document.querySelector('.tatsumaki'); // Cambia la selezione in base al tuo setup
//     navbarContainer.innerHTML = ''; // Rimuovi il contenuto esistente

//     const navbar = document.createElement('ul'); // O <div>
//     const listItem = document.createElement('li');
//     listItem.textContent = 'Test Subreddit';
//     navbar.appendChild(listItem);

//     navbarContainer.appendChild(navbar);
