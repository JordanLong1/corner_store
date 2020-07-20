// products clazz

class Products {
    constructor({title, description, price, quantity, category, id, product_image}) {
        this.title = title; 
        this.description = description;
        this.price = price; 
        this.quantity = quantity;
        this.category = category;
        this.id = id;
        this.productImage = product_image;
    }

    collectionOfProducts() {

        let container = document.getElementById('container') 

        container.classList.add('container-div') 

        let eachProductDiv = document.createElement('div')
        eachProductDiv.classList.add('each-product')

        let titleHeader = document.createElement('h4') 

        titleHeader.textContent = this.title 

        let productPic = document.createElement("IMG"); 
        productPic.setAttribute('class', 'products-images')
        productPic.setAttribute('id', this.id); 

        productPic.src = this.productImage

        let ulTag = document.createElement('ul')
        
        let priceLiTag = document.createElement('li') 
        priceLiTag.setAttribute('certain-product-id', this.id)
        priceLiTag.textContent = `Price - $${this.price}` 

        // move this into another seperate function
        let moreInfoBtn = document.createElement("BUTTON");
        moreInfoBtn.classList.add('btn');
        moreInfoBtn.textContent = 'Click to get more info!' 
        moreInfoBtn.addEventListener("click", function(event) { 
            event.preventDefault()
            container.style.display = 'none';
            let prodId = this.previousElementSibling.firstChild.attributes[0].value 
            let api = new ApiService;
     

            api.getCertainProduct(prodId)
            .then(product => {
                

                const newProd = new Products(product)

                newProd.singleProduct(product)
            })
        })

        ulTag.appendChild(priceLiTag)
        
        eachProductDiv.appendChild(titleHeader)
        eachProductDiv.appendChild(productPic)
        eachProductDiv.appendChild(ulTag)
        eachProductDiv.appendChild(moreInfoBtn)
        container.appendChild(eachProductDiv)

        return container
    }

    singleProduct() {

        let certainProductDiv = document.createElement('div');

        certainProductDiv.classList.add('certain-product');

        let productName = document.createElement('h2');

        productName.textContent = this.title // working

        let prodPic = document.createElement("IMG")
        prodPic.src = this.productImage

        // move everything pertaining to this block of code below to its own function
        let closeSpan = document.createElement('span'); 
        closeSpan.setAttribute('class', 'close'); 
        closeSpan.textContent = 'Close (X)';
        closeSpan.addEventListener('click', function(event) {
            event.preventDefault();
            certainProductDiv.style.display = 'none';
            let allProductsDiv = document.getElementById('container'); 
            allProductsDiv.style.display = 'grid';
        })

        let newUl = document.createElement('ul');
        // move this block to its own func
        let newLi = document.createElement('li');
        newLi.setAttribute('class', 'single-product-li')
        newLi.textContent = `Price - $${this.price}`;
        newUl.appendChild(newLi)

        // maybe think about moiving this block
        let productDescription = document.createElement('p');
        productDescription.setAttribute('class', 'description-ptag')
        productDescription.textContent = `About - ${this.description}`; 
        
        let productCategory = document.createElement('p');
        productCategory.setAttribute('class', 'category-ptag')
        productCategory.textContent = `Category - ${this.category}`;

        let cartBtn = document.createElement("BUTTON");
        cartBtn.classList.add('add-cart');
        cartBtn.setAttribute('id', 'cart-button-id')
    
        // move this to its own func
        cartBtn.textContent = "Add to cart"
        let obj = this;
        cartBtn.addEventListener('click', function(e) { //SEPERATE FUNCTION
            event.preventDefault()

            let cartNavigation = document.getElementById('side-nav-id'); 
            cartNavigation.style.display = 'block';

            let cartDivId = document.getElementById('cart-div-id').dataset.id
            let api = new ApiService;

            api.updateCartWithProduct(cartDivId, obj)
            .then(cartObject => {

                const productInCart = new Cart(cartObject)
                
                
                productInCart.putProductInCart(cartObject)
                

            })
            
                
        })
       
    
        certainProductDiv.appendChild(productName); 
        certainProductDiv.appendChild(prodPic)
        certainProductDiv.appendChild(closeSpan);
        certainProductDiv.appendChild(newUl);
        certainProductDiv.appendChild(productDescription);
        certainProductDiv.appendChild(productCategory);
        certainProductDiv.appendChild(cartBtn);
        
        document.body.appendChild(certainProductDiv)
    }

   
    

}