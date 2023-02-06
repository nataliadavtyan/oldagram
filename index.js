import { posts } from '/data.js'

const newsfeedEl = document.getElementById("newsfeed-el")

document.addEventListener('click', function(e){
    if(e.target.dataset.like){
        handleLikeClick(e.target.dataset.like)
    }
})

document.addEventListener('dblclick', function(e){
    if(e.target.dataset.doubleLike){
        handleDoubleClickLike(e.target.dataset.doubleLike)
    }
})

function handleLikeClick(postId){
    const targetObject = posts.filter(function(post){
        return post.uuid === postId
    })[0]
        
    if(targetObject.isLiked){
        targetObject.likes--
    } else {
        targetObject.likes++
    }
    targetObject.isLiked = !targetObject.isLiked
    render()
}

function handleDoubleClickLike(postId){
    const targetObject = posts.filter(function(post){
        return post.uuid === postId
    })[0]
    
    let heartOverImage = ''
        
    if(!targetObject.isLiked){
        targetObject.likes++
        targetObject.isLiked = !targetObject.isLiked
        render()
    }
}

function render(){
    let posted = ''
    
    posts.forEach(function(post) {
        
        let likedClass = ''
        
        if (post.isLiked) {
            likedClass = 'liked'
        }
        
        posted += `
        <div id="post">    
            <header class="header">
                <img class="avatar" src="${post.avatar}" alt="Avatar of Vincent Van Gogh">
                <div class="user-info">
                    <div><span class="name bold">${post.name}</span></div>
                    <span class="location">${post.location}</span>
                </div>
            </header>
            <div class="image-container">
                <img class="img" id="img-el" data-double-like="${post.uuid}" src="${post.post}">
            </div>
            <footer>
                <div class="icon-bar">
                    <i class="fa-solid fa-heart icon icon-like ${likedClass}" id="likess" data-like="${post.uuid}"></i>
                    <i class="fa-regular fa-comment icon"></i>
                    <i class="fa-regular fa-paper-plane icon"></i>
                </div>
                <div class="like-counter">
                    <span class="bold" id="likes-el">${post.likes} likes</span>
                </div>
                <div>
                    <span><span class="bold" id="comment-el">${post.username}</span> ${post.comment}</span>
                </div>
            </footer>
        </div>
        `
    })
    newsfeedEl.innerHTML = posted
}

render()



// Heart icon over image when double click on image but I don't know how to do it
// <i class="fa-solid fa-heart heart-over-image"></i>
