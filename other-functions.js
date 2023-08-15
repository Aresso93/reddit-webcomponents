const localStorageKey = 'checked-subreddits';

function updateNavbar(checkboxes){
    const selectedSubreddits = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked){
            selectedSubreddits.push(checkbox.value);
        }
    });

    const customHeader = document.querySelector('super-header');
    const navbarContainer = customHeader.shadowRoot.querySelector('.navbar-container'); // Usa la classe o l'id che hai definito

    navbarContainer.innerHTML = '';
    selectedSubreddits.forEach(subreddit => {
        const link = document.createElement('a');
        link.appendChild(document.createTextNode(`r/${subreddit} - `))
        link.href = `./${subreddit}.html`;
        navbarContainer.appendChild(link);
    })

    return customHeader;
}


function saveLocally(){
    const checkboxes = document.querySelectorAll('dialog input[type="checkbox"]')
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const selectedSubreddits = [];
            checkboxes.forEach(cb => {
                if (cb.checked) {
                    selectedSubreddits.push(cb.value);
                }
               
            })
            localStorage.setItem(localStorageKey, JSON.stringify(selectedSubreddits))
    })
  

 });

}

function loadLocally(){
    const dialog = document.querySelector('dialog')
    const data = localStorage.getItem(localStorageKey)
    
    if (!data){
        dialog.showModal();
    } else {

        const savedSubreddits = JSON.parse(data);
        savedSubreddits.forEach(savedSubreddit => {
            const savedCheckbox = dialog.querySelector(`input[value="${savedSubreddit}"]`)
            if (savedCheckbox) {
                savedCheckbox.checked = true;

    }
    
   

        
        
       
        })
    };

}


saveLocally();

loadLocally();

// const navbarContainer = document.querySelector('.tatsumaki'); // Cambia la selezione in base al tuo setup
//     navbarContainer.innerHTML = ''; // Rimuovi il contenuto esistente

//     const navbar = document.createElement('ul'); // O <div>
//     const listItem = document.createElement('li');
//     listItem.textContent = 'Test Subreddit';
//     navbar.appendChild(listItem);

//     navbarContainer.appendChild(navbar);
