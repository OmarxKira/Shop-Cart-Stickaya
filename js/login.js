let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let lbutton = document.getElementById("login")


let getUsername = localStorage.getItem("username")
let getpassword = localStorage.getItem("password")

lbutton.addEventListener("click",function(e){

    e.preventDefault()
    if(username.value === "" || password.value === ""){
        alert("Please Enter valid username / password")
    }
    else{
        if(getUsername && getUsername.trim() === username.value  && getpassword && getpassword.trim() === password.value){

            setTimeout(() => {
                
                window.location="index.html"

            }, 1500);

        }
        else{
            alert("username or password are incorrect")
        }
    }

})