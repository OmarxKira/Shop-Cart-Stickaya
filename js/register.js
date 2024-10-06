let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let rbutton = document.getElementById("register")

rbutton.addEventListener("click",function(e){

    e.preventDefault()


    if(username.value ==="" || password.value===""){
        
        
    }
    else{
    localStorage.setItem("username" , username.value);
    localStorage.setItem("email" , email.value);
    localStorage.setItem("password" , password.value);

    setTimeout(() => {
       window.location = "login.html" 
    }, 1000);
    }
})