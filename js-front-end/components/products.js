// products clazz

class Products {
    constructor({title, description, price, quantity, category, id}) {
        this.title = title; 
        this.description = description;
        this.price = price; 
        this.quantity = quantity;
        this.category = category;
        // this.cartId = cart_id;
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
        priceLiTag.textContent = `Price - $${this.price}` 
        

        let moreInfoBtn = document.createElement("BUTTON") // works 
        moreInfoBtn.classList.add('btn') // works
        moreInfoBtn.textContent = 'Click to get more info!' // works

        moreInfoBtn.addEventListener("click", function(event) { //TAKE THIS OUT AND SEPERATE IT 
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

    singleProduct() {

        let certainProductDiv = document.createElement('div');

        certainProductDiv.classList.add('certain-product');

        let productName = document.createElement('h2');

        productName.textContent = this.title // working

        let newUl = document.createElement('ul');

        let newLi = document.createElement('li');

        newLi.textContent = `Price - $${this.price}`;

        newUl.appendChild(newLi)

        let productDescription = document.createElement('p');
        productDescription.textContent = `About - ${this.description}`; 
        
        let productCategory = document.createElement('p');
        productCategory.textContent = `Category - ${this.category}`;


        
        let addBtn = document.createElement("BUTTON") // SEPERATE FUNCTION for event listener
        addBtn.setAttribute("id", "plus")
        addBtn.textContent = "+"

        // create function to pass event listener to. 

        let minusBtn = document.createElement("BUTTON") // SEPERATE FUNCTION for event listener
        addBtn.setAttribute("id", "minus")
        minusBtn.textContent = "-"

        // create function to add event listener to 
        // this.addToCart()

        let cartBtn = document.createElement("BUTTON");
        cartBtn.classList.add('add-cart');
        cartBtn.setAttribute('id', 'cart-button-id')
    
        cartBtn.textContent = "Add to cart"
        let obj = this;
        cartBtn.addEventListener('click', function(e) { //SEPERATE FUNCTION
            event.preventDefault()

            let cartDivId = document.getElementById('cart-div-id-on-click').dataset.id
            let api = new ApiService;

            api.updateCartWithProduct(cartDivId, obj)
            .then(product => {
                console.log(product)
            })
            
                
        })
       
    
        certainProductDiv.appendChild(productName); 

        certainProductDiv.appendChild(newUl);
        certainProductDiv.appendChild(productDescription);
        certainProductDiv.appendChild(productCategory);
        certainProductDiv.appendChild(addBtn)
        certainProductDiv.appendChild(minusBtn);
        certainProductDiv.appendChild(cartBtn);
        
        document.body.appendChild(certainProductDiv)
    }

    // addToCart() {


    //     let cartBtn = document.createElement("BUTTON");
    //     cartBtn.classList.add('add-cart');
    //     cartBtn.setAttribute('id', 'cart-button-id')
    
    //     cartBtn.textContent = "Add to cart"
    //     cartBtn.addEventListener('click', function(e) { //SEPERATE FUNCTION
    //         event.preventDefault()
    //         // console.log(this)
    //         // ALSO PASS PRODUCT ID
    //         console.log(obj)
    
    //     })
    // }
    

}