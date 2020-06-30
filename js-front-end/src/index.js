// bread & butter

// domc content loaded\

let api = new ApiService;



document.addEventListener('DOMContentLoaded', function(event) {
    
    api.getProducts()
    .then(products =>  {
        products.forEach(product => {
            const newProd = new Products(product)

            // make func pass newProd
            newProd.collectionOfProducts()
        })
    })
})

