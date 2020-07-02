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

        let container = document.getElementById('container') // this line is working. gets product div

        container.classList.add('container-div') // this is working

        let eachProductDiv = document.createElement('div')
        eachProductDiv.classList.add('each-product')


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
        
        eachProductDiv.appendChild(titleHeader)

        container.appendChild(eachProductDiv)


    }

    singleProduct(prod) {

        let certainProductDiv = document.createElement('div');

        certainProductDiv.classList.add('certain-product');

        let productName = document.createElement('h2');

        productName.textContent = this.title // working

        let newUl = document.createElement('ul');

        let newLi = document.createElement('li');

        newLi.textContent = `${this.price}`;

        newUl.appendChild(newLi)

        let productDescription = document.createElement('p');
        productDescription.textContent = `${this.description}`; 
        
        let productCategory = document.createElement('span');
        productCategory.textContent = this.category;

        productDescription.appendChild(productCategory)

        certainProductDiv.appendChild(productName); 

        certainProductDiv.appendChild(newUl);
        certainProductDiv.appendChild(productDescription);
        // certainProductDiv.appendChild(productCategory);
        
        document.body.appendChild(certainProductDiv)
        

        // console.log(certainProductDiv)

        
    }

}