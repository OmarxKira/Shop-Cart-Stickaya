document.addEventListener("DOMContentLoaded", function(){
    let cartItems = document.querySelector(".order-box .cartitems")
    let shoppingicon = document.querySelector(".icon i")
    let orderBox = document.querySelector(".order-box")
    
    
    shoppingicon.addEventListener("click",opencart)
    
    function opencart() {
        if (cartItems.innerHTML.trim() === "") {
            cartItems.innerHTML = `<p style="padding:30px 0;">There are no items in the cart</p>`;
        }
    
        if(cartItems.innerHTML)
    
        if (orderBox.style.display === "block") {
            orderBox.style.display = "none";
        } else {
            orderBox.style.display = "block";
        }
    }
    document.addEventListener("click",function(e){
        if(!orderBox.contains(e.target) && !shoppingicon.contains(e.target)){
            orderBox.style.display="none";
        }
    })

    let cart = []
    let badge = document.querySelector(".badge")
    let totalPriceElement = document.querySelector(".price")
    if(localStorage.getItem("username")){ 
    
            function loadCart(){
                let storedItems = JSON.parse(localStorage.getItem("AddedProducts"))||[];
                cart = storedItems
                updateCart()
                calculateTotalPrice()
            }
            
            function updateCart(){
                cartItems.innerHTML = "";
                cart.forEach((item) => {
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
                                <button class="btn remove-from-cart" data-id="${item.id}">
                                    <i class="fa-solid fa-trash" style="color: #d62e3f; cursor: pointer;"></i>
                                </button>
                            </div>
                        </div>
                    `;
                });
            
                badge.style.display = "block";
                badge.innerHTML = cart.length;
            
                const removeButtons = document.querySelectorAll('.remove-from-cart');
                removeButtons.forEach(button => {
                    button.addEventListener('click', function() {
                        const itemId = parseInt(this.getAttribute('data-id'));
                        RemoveFromCart(itemId);
                    });
                });
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
    
    
    
    })

  

