// const apiSource = 'http://localhost:3000'


document.addEventListener('DOMContentLoaded', () => {

    //get image data(title/likes/comments) from server

    fetch('http://localhost:3000/images/1')
    .then(response => response.json())
    .then((data) => putElement(data))

    // .then(data => {

    // })
})


function putElement(){
    //select dom element
    let card = document.querySelector('#card-title')
    card.innerText = `${data.title}`
}
























// fetch('http://localhost:3000/images',)
// .then(response => console.log(response))

// fetch('http://localhost:3000/comments')
// .then(response => console.log(response))


// function getTitle(){
//     fetch('http://localhost:3000/title',)
//     .then(res => json())
//     .then(element => element.title())
// }

// function putElement(title){
//     //select dom elemenent
//     card = document.querySelector('#card-title')
//     card.innerText = `${element.title}`
// }

// getTitle()