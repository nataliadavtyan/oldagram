const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const newsfeedEl = document.getElementById("newsfeed-el")
let posted = ""

function renderPost(){
    for (let i = 0; i < posts.length; i++) {
        posted += `
        <div id="post">    
            <header class="header">
                <img class="avatar" src="${posts[i].avatar}" alt="Avatar of Vincent Van Gogh">
                <div class="user-info">
                    <div><span class="name bold">${posts[i].name}</span></div>
                    <span class="location">${posts[i].location}</span>
                </div>
            </header>
            <img class="img" id="img-el" src="${posts[i].post}">
            <footer>
                <div class="icon-bar">
                    <img class="icon" id="heart-el" src="images/icon-heart.png">
                    <img class="icon" src="images/icon-comment.png">
                    <img class="icon" src="images/icon-dm.png">
                </div>
                <div class="like-counter">
                    <span class="bold" id="likes-el">${posts[i].likes} likes</span>
                </div>
                <div>
                    <span><span class="bold">${posts[i].username}</span> ${posts[i].comment}</span>
                </div>
            </footer>
        </div>
        `
    }
    newsfeedEl.innerHTML = posted
}

renderPost()

let likesEl = document.getElementById("likes-el")
const heartEl = document.getElementById("heart-el")
const imgEl = document.getElementById("img-el")
// console.log(likesEl)


function addLikePost0() {
    posts[0].likes += 1
    likesEl.textContent = `${posts[0].likes} likes`
}

// function addLikePost1() {
//     posts[1].likes += 1
//     likesEl.textContent = `${posts[1].likes} likes`
// }

// function addLikePost2() {
//     posts[2].likes += 1
//     likesEl.textContent = `${posts[2].likes} likes`
// }

heartEl.addEventListener("click", function() {
    addLikePost0()
})

imgEl.addEventListener("dblclick", function(){
    addLikePost0()
})