// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const topicsDiv = document.querySelector('.topics')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        const topicArray = response.data.topics
        topicArray.forEach(item => {
            const topicTab = makeTopic(item)
            topicsDiv.appendChild(topicTab)
        })
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        console.log('done')
    })

    function makeTopic(topic){
        //create element
        const topicTab = document.createElement('div')
        //define structure

        //set content 
        topicTab.textContent = topic
        //add class names
        topicTab.classList.add('tab')

        return topicTab
    }