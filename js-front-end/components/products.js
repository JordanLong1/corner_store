// products clazz

class Products {
    constructor(title, description, price, quantity, category, cart_id) {
        this.title = title; 
        this.description = description;
        this.price = price; 
        this.quantity = quantity;
        this.category = category;
        this.cartId = cart_id;
    }

    collectionOfProducts() {
        // console.log(this) // last line working. 

        let productDiv = document.getElementById('product-id') // this line is working. gets product div

        productDiv.classList.add('productDiv') // this is working


        let titleHeader = document.createElement('h4') // this is working

        titleHeader.textContent = this.title.title // this is working

        let pricePtag = document.createElement('p') // this is working

        console.log(pricePtag)


        
    }

}