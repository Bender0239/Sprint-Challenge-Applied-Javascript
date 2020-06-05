// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(date, title, temp) {
    
    //Create all elements
    const headerDiv = document.createElement('div')
    const dateSpan = document.createElement('span')
    const titleHeader = document.createElement('h1')
    const tempSpan = document.createElement('span')

    //Define structure 
    headerDiv.appendChild(dateSpan)
    headerDiv.appendChild(titleHeader)
    headerDiv.appendChild(tempSpan)

    //Add class names 
    headerDiv.classList.add('header')
    dateSpan.classList.add('date')
    tempSpan.classList.add('temp')

    //Set content 
    dateSpan.textContent = date
    titleHeader.textContent = title 
    tempSpan.textContent = temp

    return headerDiv
}

const headerContainer = document.querySelector('.header-container')

headerContainer.appendChild(Header('SMARCH 28, 2019', 'Lambda Times', '98'))