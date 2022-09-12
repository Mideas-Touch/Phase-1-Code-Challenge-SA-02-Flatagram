document.addEventListener('DOMContentLoaded', () => {

    //get image data(title/likes/comments) from server

    fetch('http://localhost:3000/images/1')
    .then(response => response.json())
    .then(data => {
        const cardTitle = document.querySelector('#card-title');
        const cardImage = document.querySelector('#card-image');
        let likesCount = document.querySelector('#like-count')

        cardTitle.textContent = data.title
        likesCount.innerText = data.likes

        function getComments(){
            fetch('http://localhost:3000/comments')
            .then((response) => response.json())
            .then((data) => {
                data.forEach(comment => renderComment(comment.content))
            })
        }

        function renderComment(){
            //get comments-list
            // const comments = document.querySelector('#comments-list li')
            let commentList = document.querySelector('#comments-list li')
            commentContents.innerText = `
            <li>${comment}</li>`
            commentList.appendChild(commentContents)
            
        
        }

        //listen for a click event on like button
        document.querySelector('.like-button').addEventListener('click', increment)

        function increment(){
            // num = document.querySelector('.likes')
            // num.textContent++
            likesCount.textContent++
        }


        //Post comments
        // document.querySelector('.comment-button').addEventListener('click', addComment (e))

        // function addComment(e){
        //     let message = e.target.value
        //     let p = document.createElement('p').append(message)
        //     document.querySelector('comment-form').appendChild(p)
        // }

})
})



// async function 
//fetch comments
//     fetch('http://localhost:3000/images/')
//     .then(response => response.json())
//     .then(console.log(response))
//     // .then(data => data.forEach(comment => renderComment(comment)))
//     // .then(console.log(data))


// })


// function renderTitle(){
//     //select dom element
//     let card = document.querySelector('#card-title')
//     card.innerText = `${data.title}`
// }
























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