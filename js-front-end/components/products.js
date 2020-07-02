// products clazz

class Products {
    constructor({title, description, price, quantity, category, cart_id, id}) {
        this.title = title; 
        this.description = description;
        this.price = price; 
        this.quantity = quantity;
        this.category = category;
        this.cartId = cart_id;
        this.id = id;
    }

    collectionOfProducts() {

        let productDiv = document.getElementById('product-id') // this line is working. gets product div

        productDiv.classList.add('productDiv') // this is working


        let titleHeader = document.createElement('h4') // this is working

        titleHeader.textContent = this.title // this is working

        let ulTag = document.createElement('ul')

        let priceLiTag = document.createElement('li') // this is working
        priceLiTag.setAttribute('certain-product-id', this.id)
        priceLiTag.textContent = this.price // this is working

        let moreInfoBtn = document.createElement("BUTTON") // works 
        moreInfoBtn.classList.add('btn') // works
        moreInfoBtn.textContent = 'Click to get more info!' // works

        moreInfoBtn.addEventListener("click", function(event) {
            event.preventDefault()
            let prodId = this.previousElementSibling.firstChild.attributes[0].value // target

            let api = new ApiService;
     

            api.getCertainProduct(prodId)
            .then(product => {
                
                const newProd = new Products(product)

                newProd.singleProduct(product)
            })
        })

        ulTag.appendChild(priceLiTag)
        

        titleHeader.appendChild(ulTag) //working
        titleHeader.appendChild(moreInfoBtn)
        
        productDiv.appendChild(titleHeader)
    }

    singleProduct(prod) {
        console.log(prod)

        let certainProductDiv = document.createElement('div')

        certainProductDiv.classList.add('certain-product')

        
    }

}