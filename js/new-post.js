/**
 * TODO: Finish submitNewPost function to submit form data to the API 
 */

 const API_URL = "http://localhost:3003/api/posts";



   const submitNewPost = () => {
        let titleinput = document.getElementById('form-post-title').value;
        let contentinput = document.getElementById('form-post-content').value;
        let imageinput = document.querySelector('input[type="file"]')
         const data = new FormData();

         data.append("post-image",  imageinput.files[0]);
         data.append('content', contentinput);
         data.append('title', titleinput)
          
         fetch(API_URL, {
             method: 'POST',
             body:data,
         }).then(()=>{
             setTimeout(()=>{
                 window.location.href = "index.html";
             }, 1000)
         })   
    }

