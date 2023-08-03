class PostCardComponent extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
    this.render();
    }

    render(){
        if (this.post) {
          console.log(this.post)
            
          this.shadowRoot.innerHTML = `
          <style>
          .card{
              display: flex;
              flex-direction: column;
              background-color: wheat;
              border-radius: 16px;
              padding: 16px;
              margin-bottom: 4px;
              width: 30%;
              justify-content: center;
            }
            
            .card-title{
              font-size: x-large;
              font-weight: bold;
            }
            
            post-card{
            width: 50px;
            }
            
            </style>
            `;

            this.shadowRoot.innerHTML += `
            <div class="card">
              <span class="card-title">${'Titolo del post: ' + this.post.data.title}</span>
              <span class="card-author">${'Autore del post: u/' + this.post.data.author}</span>
                <div class="card-details">
                  <span class="card-detail">${'Il post è stato creato ' + this.toHumanTime(this.post.data.created)}<br></span>
                  <span class="card-detail">${'URL dell\'immagine: ' + this.post.data.url}</span>
                  <img class="thumbnail-img" src="${this.post.data.thumbnail}" alt="Thumbnail">
                </div>
            </div>
          `;
        
          

        }
      }

      toHumanTime(timestamp){

        const now = Date.now();
        //new Date().getTime() anche questo ci dà l'ora corrente, prendendo una data nuova e facendo il getTime
        const delta = now - (timestamp * 1000);

        console.log(timestamp);
        let seconds = parseInt(delta / 1000);
    
        if (seconds < 60) {
            return seconds + ' secondi fa';
        }
    
        let minutes = parseInt(seconds / 60)
    
        if (minutes < 60) {
            return minutes + ' minuti fa';
        }
    
        let hours = parseInt(minutes /60)
    
        if (hours < 24) {
            return hours + ' ore fa'
        }
    
        return parseInt(hours / 24) + ' giorni fa';
        
    }
     
      
}



customElements.define('post-card', PostCardComponent);