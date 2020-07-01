// products clazz

class Products {
    constructor({title, description, price, quantity, category, cart_id}) {
        this.title = title; 
        this.description = description;
        this.price = price; 
        this.quantity = quantity;
        this.category = category;
        this.cartId = cart_id;
    }

    collectionOfProducts() {

        let productDiv = document.getElementById('product-id') // this line is working. gets product div

        productDiv.classList.add('productDiv') // this is working


        let titleHeader = document.createElement('h4') // this is working

        titleHeader.textContent = this.title // this is working

        let pricePtag = document.createElement('p') // this is working

        pricePtag.textContent = this.price // this is working

        let moreInfoBtn = document.createElement("BUTTON") // works 
        moreInfoBtn.classList.add('btn') // works
        moreInfoBtn.textContent = 'Click to get more info!' // works
        

        titleHeader.appendChild(pricePtag) //working
        titleHeader.appendChild(moreInfoBtn)
        
        productDiv.appendChild(titleHeader)
        
        
        console.log(productDiv)

        

        // create a button to get more info?
        // come back to BUTTON to add EVENT LISTENER

        
    }

}