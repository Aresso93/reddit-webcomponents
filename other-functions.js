
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



// const navbarContainer = document.querySelector('.tatsumaki'); // Cambia la selezione in base al tuo setup
//     navbarContainer.innerHTML = ''; // Rimuovi il contenuto esistente

//     const navbar = document.createElement('ul'); // O <div>
//     const listItem = document.createElement('li');
//     listItem.textContent = 'Test Subreddit';
//     navbar.appendChild(listItem);

//     navbarContainer.appendChild(navbar);
