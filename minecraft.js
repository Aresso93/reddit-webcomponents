fetch('https://www.reddit.com/r/minecraft/new.json')
.then(resp => resp.json())
.then(res => {
    const data = res.data;
    const posts = data.children;
    console.log(posts);
})

function render(){
    if (this.post) {
      console.log(this.post)
        
      this.shadowRoot.innerHTML = `
      <style>
      .card{
        display: flex;
        flex-direction: column;
        background-color: rgba(41, 27, 233, 0.842);
        border: 2px solid rgb(209, 155, 8);
        border-radius: 16px;
        padding: 16px;
        margin-bottom: 4px;
       
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

render()
