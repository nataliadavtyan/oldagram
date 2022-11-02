import { posts } from '/data.js'

const newsfeedEl = document.getElementById("newsfeed-el")
let imgEl = []
let heartEl = []

function renderPost(){
    let posted = ""
    for (let i = 0; i < posts.length; i++) {
        heartEl[i] = `heart-el-${i}`
        imgEl[i] = `img-el-${i}`
        posted += `
        <div id="post">    
            <header class="header">
                <img class="avatar" src="${posts[i].avatar}" alt="Avatar of Vincent Van Gogh">
                <div class="user-info">
                    <div><span class="name bold">${posts[i].name}</span></div>
                    <span class="location">${posts[i].location}</span>
                </div>
            </header>
            <img class="img" id="img-el-${i}" src="${posts[i].post}">
            <footer>
                <div class="icon-bar">
                    <img class="icon" id="heart-el-${i}" src="images/icon-heart.png">
                    <img class="icon" src="images/icon-comment.png">
                    <img class="icon" src="images/icon-dm.png">
                </div>
                <div class="like-counter">
                    <span class="bold" id="likes-el">${posts[i].likes} likes</span>
                </div>
                <div>
                    <span><span class="bold" id="comment-el">${posts[i].username}</span> ${posts[i].comment}</span>
                </div>
            </footer>
        </div>
        `
    }
    newsfeedEl.innerHTML = posted
}

renderPost()

newsfeedEl.addEventListener('click', function(e){
    for (let i = 0; i < posts.length; i++) {
        if(e.target.id === heartEl[i]){
            posts[i].likes += 1
            renderPost()
        }
    }
})

newsfeedEl.addEventListener('dblclick', function(e){
    for (let i = 0; i < posts.length; i++) {
        if(e.target.id === imgEl[i]){
            posts[i].likes += 1
            renderPost()
        }
    }
})