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
        liForItemCount.textContent = `Number of items - ${this.itemCount}`

        let liForCartTotalPrice = document.createElement('li'); 

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
        // grab cart div 
        // grab side nav div
        // append the div created with product info to the side bar div because side bar div is already appended to cart div
        // cartWithObject is the cart obbject with the product inside of it
        const productInfo = cartWithProduct.products[0]
        let cartDiv = document.getElementById('cart-div-id'); //working
        let sideNavDiv = document.getElementById('side-nav-id'); //working 
        

        let cartProduct = document.createElement('div'); //working
        cartProduct.setAttribute('class', 'product-in-cart');
        cartProduct.setAttribute('id', 'carts-product-id');

        let cartProductHeader = document.createElement('h5'); 
        cartProductHeader.textContent = `${productInfo.title}`; 

        // will need to create image info

        let cartProductPrice = document.createElement('p'); 
        cartProductPrice.textContent = `Price - ${productInfo.price}`

        cartProduct.appendChild(cartProductHeader); 
        cartProduct.appendChild(cartProductPrice); 
        sideNavDiv.appendChild(cartProduct); 

        console.log(sideNavDiv)


    }

    

}