

const API_URL = "http://localhost:3003/api/posts";
const API_BASE_URL = "http://localhost:3003/";

window.onload = () => {
    getPosts();
}

const getPosts = () => {
    fetch(API_URL, {
        method:'GET'
    }).then((response) => {
        return response.json()
    }).then((data)=>{
        buildPosts(data)
    })
}

const buildPosts = (blogPosts) => {
    console.log(blogPosts);
    let blogPostContent = ''
for(blogPost of blogPosts){
    const postDate = new Date(parseInt(blogPost.added_date)).toDateString();
    const postImage = `${API_BASE_URL}${blogPost.post_image}`
     blogPostContent += `
     <div class="post" id=${blogPost.id}>
     <div class="post-image" style="background-image:url(${postImage})"></div>
     <div class="post-content">
         <div class="post-date">${postDate}</div>
         <div class="post-title"><h3>${blogPost.title}</h2></div>
         <div class="post-text">${blogPost.content}</div>
     </div>
 </div>`

}
document.querySelector('.main-container').innerHTML = blogPostContent;

}