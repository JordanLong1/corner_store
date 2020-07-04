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

        let cartObject = this;
        iconTag.addEventListener("click", function(event) {

            let cartDiv = document.createElement('div');
            cartDiv.setAttribute('class', 'cart-div-on-click');

            let cartDivUl = document.createElement('ul'); 

            let liForItemCount = document.createElement('li'); 
            liForItemCount.textContent = `Number of items - ${cartObject.itemCount}`

            let liForCartTotalPrice = document.createElement('li'); 

            liForCartTotalPrice.textContent = `Total Price - ${cartObject.totalPrice}`;

            cartDivUl.appendChild(liForItemCount); 
            cartDivUl.appendChild(liForCartTotalPrice); 

            cartDiv.appendChild(cartDivUl);     

        })
    }

}