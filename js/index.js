let userinfo = document.getElementById("user-info")
let user = document.getElementById("user")
let logout = document.getElementById("logout")
let links = document.getElementById("links")

if(localStorage.getItem("username")){
    links.remove()
    user.innerHTML = localStorage.getItem("username")
}

logout.addEventListener("click", function(){
    localStorage.clear();
    setTimeout(() => {
        window.location="login.html"
    }, 1500);
})






  
