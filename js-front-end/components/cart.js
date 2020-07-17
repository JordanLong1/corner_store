// cart class 

class Cart {
    constructor({item_count, total_price, id}) {
        this.itemCount = item_count;
        this.totalPrice = total_price;
        this.id = id;
    }

    createCartIcon() {
        let iTag = document.createElement('i');
        iTag.setAttribute("class", "fas fa-shopping-cart");
        iTag.setAttribute("id", "icon-id");

        document.body.appendChild(iTag)


        this.createDivForCartIcon()

    }

    createDivForCartIcon() {

        let iconTag = document.getElementById('icon-id')

        let cartDiv = document.createElement('div');
            cartDiv.setAttribute('class', 'cart-div');
            cartDiv.setAttribute("id", 'cart-div-id'); 
            cartDiv.setAttribute("data-id", this.id)  

            cartDiv.appendChild(iconTag)
            
            document.body.appendChild(cartDiv);


        this.createSideNavForCart();
    }

    createSideNavForCart() {
        let cartContainer = document.getElementById('cart-div-id'); // working
        let sideNavDiv = document.createElement('div');
        sideNavDiv.setAttribute('class', 'side-nav');
        sideNavDiv.setAttribute('id', 'side-nav-id');
        sideNavDiv.style.display = 'none';

        let sideNavUl = document.createElement('ul'); 

        let liForItemCount = document.createElement('li'); 
        liForItemCount.setAttribute('class', 'item-count');
        liForItemCount.setAttribute('id', 'item-count-id');
        liForItemCount.textContent = `Number of items - ${this.itemCount}`
        

        let liForCartTotalPrice = document.createElement('li'); 
        liForCartTotalPrice.setAttribute('class', 'total-price');
        liForCartTotalPrice.setAttribute('id', 'total-price-id')

        liForCartTotalPrice.textContent = `Total Price - ${this.totalPrice}`;

        sideNavUl.appendChild(liForItemCount); 
        sideNavUl.appendChild(liForCartTotalPrice); 

        sideNavDiv.appendChild(sideNavUl);  
        
        cartContainer.appendChild(sideNavDiv);

        cartContainer.addEventListener('click', function(e) {
            sideNavDiv.style.display = 'block'; 

        })

        let pageContainer = document.getElementById('container'); 

        pageContainer.addEventListener('click', function(e) {
            sideNavDiv.style.display = 'none';

        })
    }

    putProductInCart(cartWithProduct) {
      
        // console.log(cartWithProduct)
        const productInfo = cartWithProduct.products[cartWithProduct.products.length - 1]
        let cartDiv = document.getElementById('cart-div-id'); 
        let sideNavDiv = document.getElementById('side-nav-id');  
        

        let cartProduct = document.createElement('div'); 
        cartProduct.setAttribute('class', 'product-in-cart');
        cartProduct.setAttribute('id', 'carts-product-id');

        let cartProductHeader = document.createElement('h5'); 
        cartProductHeader.textContent = `${productInfo.title}`; 

        // will need to create image info

        let cartProductPrice = document.createElement('p'); 
        cartProductPrice.textContent = `Price - ${productInfo.price}`

        let addBtn = document.createElement("BUTTON") // SEPERATE FUNCTION for event listener
        addBtn.setAttribute("id", "plus")
        addBtn.textContent = "+"
        // this.addButtonInCart(); 
        addBtn.addEventListener('click', function(e) {
            event.preventDefault();

            // cart id & product & then pass to api serv to update the cart?
            let cartDivId = document.getElementById('cart-div-id').dataset.id

            let api = new ApiService; 

            api.updateCartWithProduct(cartDivId, productInfo) 
            .then(cartObject => {
                const productInCart = new Cart(cartObject)
                
                
                productInCart.putProductInCart(cartObject)
            })

            
         
        })


        cartWithProduct.removeProductFromCart(); 

        let minusBtn = document.createElement("BUTTON") // SEPERATE FUNCTION for event listener
        minusBtn.setAttribute("id", "minus")
        minusBtn.textContent = "-"
        minusBtn.addEventListener('click', function(e) {
            event.preventDefault(); 
            let cartDivId = document.getElementById('cart-div-id').dataset.id


            let api = new ApiService; 

            api.subtractProductFromCart(cartDivId, productInfo)

            .then(resp => console.log(resp))
        })
        // this.minusButtonInCart();
        // in the event listener 

        cartProduct.appendChild(cartProductHeader); 
        cartProduct.appendChild(cartProductPrice); 
        cartProduct.appendChild(addBtn); 
        cartProduct.appendChild(minusBtn);
        sideNavDiv.appendChild(cartProduct); 

        let cartCount = document.getElementById('item-count-id')
        cartCount.textContent = `Number of items - ${this.itemCount}`

        let cartPrice = document.getElementById('total-price-id')
        cartPrice.textContent = `Total Price - ${this.totalPrice}`

    }

    // addButtonInCart() {
    //     // console.log(this)
    //     // this = Cart object with item count & total price
    //     // on every click it should increment the total price and item count

    //     // let addBtn = document.createElement("BUTTON") // SEPERATE FUNCTION for event listener
    //     // addBtn.setAttribute("id", "plus")
    //     // addBtn.textContent = "+"
    // }

    // minusButtonInCart() {
    //     console.log(this)
    //     // this = Cart Object with item count, total price and an id 
    //     // on click it should decrement the item count and subtract the price

    //     // let minusBtn = document.createElement("BUTTON") // SEPERATE FUNCTION for event listener
    //     // minusBtn.setAttribute("id", "minus")
    //     // minusBtn.textContent = "-"
    // }

   
    

}