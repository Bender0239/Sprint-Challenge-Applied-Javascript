// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container')


//make array of 
const topicsArray = ['bootstrap', 'javascript', 'jquery', 'node', 'technology']

topicsArray.forEach(topic => {
    //insertTopicArray(topic)
})

function insertTopicArray(topic){
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        const articleData = `${response}.data.articles.${topic}`
        console.log(articleData)

    })
    .catch(error => {
        console.log('error')
    })
    .finally(() => {
        //console.log('done')
    })
}

insertTopicData('bootstrap')



function makeCard(author){
    
    //create all elements
    
    const card = document.createElement('div')
    const headlineDiv = document.createElement('div')
    const authorDiv = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const nameSpan = document.createElement('span')

    //define structure
    
    card.appendChild(headlineDiv)
    card.appendChild(authorDiv)
    authorDiv.appendChild(imgContainer)
    authorDiv.appendChild(nameSpan)
    imgContainer.appendChild(img)

    //set content 
    headlineDiv.textContent = author.headline
    img.src = author.authorPhoto
    nameSpan.textContent = author.authorName

    //add proper class names
    card.classList.add('card')
    headlineDiv.classList.add('headline')
    authorDiv.classList.add('author')
    imgContainer.classList.add('img-container')
    
    //return card

    return card 

}

//authorName: "FIDO WALKSALOT"
//authorPhoto: "./assets/fido.jpg"
//headline: "Bootstrap 5: Get a Sneak Peak at all the New Features"