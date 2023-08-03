fetch('https://www.reddit.com/r/aww/new.json')
.then(resp => resp.json())
.then(res => {
    const data = res.data;
    const posts = data.children;
    console.log(posts);
})

// function toHumanTime(timestamp){

//     let seconds = parseInt(timestamp / 1000);

//     if (seconds < 60) {
//         return seconds + 'secondi fa';
//     }

//     let minutes = parseInt(seconds / 60)

//     if (minutes < 60) {
//         return minutes + 'secondi fa';
//     }

//     let hours = parseInt(minutes /60)

//     if (hours < 24) {
//         return hours + 'ore fa'
//     }

//     return parseInt(hours / 24) + 'giorni fa';
    
// }

// console.log(toHumanTime(2000000));