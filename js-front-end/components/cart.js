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
        let cartContainer = document.getElementById('cart-div-id');
         
        // move this into another function
        let sideNavDiv = document.createElement('div');
        sideNavDiv.setAttribute('class', 'side-nav');
        sideNavDiv.setAttribute('id', 'side-nav-id');
        sideNavDiv.style.display = 'none';

        let sideNavHeader = document.createElement('h2'); 
        sideNavHeader.textContent = 'My Cart'

        let sideNavUl = document.createElement('ul'); 

        // move this block of code into another function
        let liForItemCount = document.createElement('li'); 
        liForItemCount.setAttribute('class', 'item-count');
        liForItemCount.setAttribute('id', 'item-count-id');
        liForItemCount.textContent = `Number of items - ${this.itemCount}`
        
        //move this block of code into another function
        let liForCartTotalPrice = document.createElement('li'); 
        liForCartTotalPrice.setAttribute('class', 'total-price');
        liForCartTotalPrice.setAttribute('id', 'total-price-id')
        liForCartTotalPrice.textContent = `Total Price - ${this.totalPrice}`;

        // move this block of code into another function
        let closeBtn = document.createElement("BUTTON"); 
        closeBtn.setAttribute('id', 'close-btn-id')
        closeBtn.setAttribute('class', 'close-btn')
        closeBtn.textContent = "Close"

        sideNavUl.appendChild(liForItemCount); 
        sideNavUl.appendChild(liForCartTotalPrice); 
    
        sideNavDiv.appendChild(sideNavUl);  
        sideNavDiv.appendChild(sideNavHeader);
        sideNavDiv.appendChild(closeBtn);
        cartContainer.appendChild(sideNavDiv);

        this.sideNavPopsOnClickOfIcon();
        this.closeSideNavOnClickOnMainPage();
        this.closeSideNavOnClickOfCloseButton(); 
            
    }

    sideNavPopsOnClickOfIcon() {
        let cartContainer = document.getElementById('cart-div-id')
        let sideNavDiv = document.getElementById('side-nav-id')
        cartContainer.addEventListener('click', function(e) {
            sideNavDiv.style.display = 'block'; 
            
        })
    }

    closeSideNavOnClickOnMainPage() {
        let pageContainer = document.getElementById('container'); 
        let sideNavDiv = document.getElementById('side-nav-id')

        pageContainer.addEventListener('click', function(e) {
            sideNavDiv.style.display = 'none';

        })
    }

    closeSideNavOnClickOfCloseButton() {
        let closeBtn = document.getElementById('close-btn-id')
        let sideNavDiv = document.getElementById('side-nav-id')

        closeBtn.addEventListener('click', function(e) {
            sideNavDiv.style.display = 'none';
        })
    }

    putProductInCart(cartWithProduct) {
      
        const productInfo = cartWithProduct.products[cartWithProduct.products.length - 1]
        console.log(productInfo.id)
        let cartDiv = document.getElementById('cart-div-id'); 
        let sideNavDiv = document.getElementById('side-nav-id');  
        

        // move this block of code into another function
        let cartProduct = document.createElement('div'); 
        cartProduct.setAttribute('class', 'product-in-cart');
        cartProduct.setAttribute('id', 'carts-product-id');
        cartProduct.setAttribute('data-id', productInfo.id)
        console.log(cartProduct)
        let cartProductHeader = document.createElement('h5'); 
        cartProductHeader.textContent = `${productInfo.title}`; 

        let cartProductPrice = document.createElement('p'); 
        cartProductPrice.textContent = `Price - ${productInfo.price}`

        // move this block of code into another function
        let addBtn = document.createElement("BUTTON") // SEPERATE FUNCTION for event listener
        addBtn.setAttribute("id", "plus")
        addBtn.setAttribute('class', 'product-in-cart-btns')
        addBtn.textContent = "Add Another +"
        addBtn.addEventListener('click', function(e) {
            event.preventDefault();

            let cartDivId = document.getElementById('cart-div-id').dataset.id

            let api = new ApiService; 

            api.updateCartWithProduct(cartDivId, productInfo) 
            .then(cartObject => {
                // console.log(cartObject)
                const productInCart = new Cart(cartObject)
                productInCart.rebuildCartBasedOnAddOrSubtract(cartObject)
          
            })

            
         
        })

        // move all of this code into another seperate function
        let minusBtn = document.createElement("BUTTON") 
        minusBtn.setAttribute("id", "minus")
        minusBtn.setAttribute('class', 'product-in-cart-btns')

        minusBtn.textContent = "Take one off - "
        minusBtn.addEventListener('click', function(e) {
            event.preventDefault(); 
            let cartDivId = document.getElementById('cart-div-id').dataset.id


            let api = new ApiService; 

            api.subtractProductFromCart(cartDivId, productInfo)

            .then(updatedCart => {
                let foundProduct = updatedCart.products.find(p => p.id === productInfo.id)
                if (!foundProduct) {
                    let divsInCart = document.querySelectorAll('.product-in-cart');
                    let divArr = Array.from(divsInCart)
                    let foundDiv = divArr.find(div => div.dataset.id == productInfo.id)
                    let parentDiv = document.getElementById('side-nav-id'); 
                    parentDiv.removeChild(foundDiv)
                } 
                const newlyUpdatedCart = new Cart(updatedCart)

                newlyUpdatedCart.rebuildCartBasedOnAddOrSubtract()
            })
        })
      

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

    rebuildCartBasedOnAddOrSubtract() {
        let cartDiv = document.getElementById('carts-product-id')

        let newItemCount = document.getElementById('item-count-id'); 
        newItemCount.textContent = `Number of items - ${this.itemCount}`; 
    
        let newTotalPrice = document.getElementById('total-price-id'); 
        newTotalPrice.textContent = `Total Price - ${this.totalPrice}`; 

     }

   
   
    

}