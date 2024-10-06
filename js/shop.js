

let allproducts = document.querySelector(".allproducts")

let products = [
    {
        id:1,
        title:"Solo Leveling Case",
        price:"120.00",
        imageURL : "images/products/phone cases/20240428_102255.jpg"
    },
    {
        id:2,
        title:"Cartoon Car Case",
        price:"120.00",
        imageURL : "images/products/phone cases/20240319_132549.jpg"
    },
    {
        id:3,
        title:"Simple Heart Case",
        price:"120.00",
        imageURL : "images/products/phone cases/20240211_090333.jpg"
    },

    {
        id:4,
        title:"Gojo Stary night Case",
        price:"120.00",
        imageURL : "images/products/phone cases/20240519_072005.jpg"
    },
    {
        id:5,
        title:"Sasuke Case",
        price:"120.00",
        imageURL : "images/products/phone cases/20240421_072019.jpg"
    },
    {
        id:6,
        title:"Tom & Jerry Couple Case ",
        price:"120.00",
        imageURL : "images/products/phone cases/20240319_013054.jpg"
    },
]


function createItem() {
    
    let i = products.map((item)=>{
        return `<div class="box-parent">
                        <div class="box position-relative">  
                            <div class="add-cart">
                               <a href="#" onClick="addToCart(${item.id})"> <i class=" item fa-solid fa-cart-shopping"></i></a> 
                            </div>
                            <img src="${item.imageURL}" alt="" class="img-fluid itemimg">
                        </div>
                       <div class="info ps-3 pt-2">
                        <div class="product-name">
                            <p class="fs-4 fw-semibold mb-0">${item.title}</p>
                        </div>
                        <div class="product-price mt-0">
                            <p class="fs-5 text-danger">LE ${item.price}</p>
                        </div>
                       </div>
                    </div>`
    }).join("")

    allproducts.innerHTML = i;
}
createItem()

let cartItems = document.querySelector(".order-box .cartitems")
let cart = []
let badge = document.querySelector(".badge")
let totalPriceElement = document.querySelector(".price")



    if(localStorage.getItem("username")){
        function addToCart(id){

            let selectedItem = products.find((item)=>item.id===id);
            if (cartItems.innerHTML.includes("There are no items in the cart")) {
                cartItems.innerHTML = "";
            }
            
            cart.push(selectedItem)
            
            localStorage.setItem("AddedProducts",JSON.stringify(cart))
            updateCart()
            calculateTotalPrice()

        } 

        function loadCart(){
            let storedItems = JSON.parse(localStorage.getItem("AddedProducts"))||[];
            cart = storedItems
            updateCart()
            calculateTotalPrice()
        }
        
        function updateCart(){
            cartItems.innerHTML="";
            cart.forEach((item)=>{
                cartItems.innerHTML += `
                <div class="line"></div>
                <div class="box-parent" style="display: flex; justify-content: space-between; align-items: center; gap: 10px; height:auto;">
            
                  <div class="box position-relative" style="width: 80px; height: 80px; overflow: hidden;">
                    <img src="${item.imageURL}" alt="" class="img-fluid" style="width: 100%; height: auto;">
                  </div>
         
                  <div class="d-flex" style="flex-grow: 1; justify-content: space-between; align-items: center;">
                
                    <div class="ps-3" style="flex-grow: 1;">
                      <p style="font-size: 18px;" class="fw-semibold mb-0">${item.title}</p>
                      <p style="font-size: 18px; color: red; margin-bottom: 0;">LE ${item.price}</p>
                    </div>
                    <button class="btn add-to-cart" onClick="RemoveFromCart(${item.id})">
                    <i class="fa-solid fa-trash" style="color: #d62e3f; cursor: pointer;"></i>
                    </button>
                    </div>
                    </div>
                    
            `;
            
            
                badge.style.display="block";
                badge.innerHTML=cart.length
              
            })
        }
     
       

        function calculateTotalPrice() {
            let totalPrice = cart.reduce((total,item) => {
                return total + parseFloat(item.price)
            },0)
        
            totalPriceElement.innerHTML= `LE ${totalPrice.toFixed(2)}`
        }
        function RemoveFromCart(id){
            cart = cart.filter(item=>item.id !==id)
            localStorage.setItem("AddedProducts",JSON.stringify(cart))
            badge.innerHTML=cart.length
            updateCart()
            calculateTotalPrice()

        }
    }

    else{
        window.location="login.html"
    }

    window.addEventListener("load",loadCart);

   

    





