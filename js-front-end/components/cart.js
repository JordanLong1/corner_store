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

            let cartDivUl = document.createElement('ul'); 

            let liForItemCount = document.createElement('li'); 
            liForItemCount.textContent = `Number of items - ${this.itemCount}`

            let liForCartTotalPrice = document.createElement('li'); 

            liForCartTotalPrice.textContent = `Total Price - ${this.totalPrice}`;

            cartDivUl.appendChild(liForItemCount); 
            cartDivUl.appendChild(liForCartTotalPrice); 

            cartDiv.appendChild(cartDivUl);    

            cartDiv.appendChild(iconTag)
            
            document.body.appendChild(cartDiv);


        this.createSideNavForCart();
    }

    createSideNavForCart() {
        let cartContainer = document.getElementById('cart-div-id'); // working
        let sideNavDiv = document.createElement('div');
        sideNavDiv.setAttribute('class', 'side-nav');
        sideNavDiv.setAttribute('id', 'side-nav-id');

        sideNavDiv.style.display = 'hidden';
        
        cartContainer.appendChild(sideNavDiv);

        cartContainer.addEventListener('click', function(e) {
            sideNavDiv.style.display = 'block'; 
            
        })

    }

    

}