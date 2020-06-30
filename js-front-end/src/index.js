// bread & butter

// domc content loaded\

let api = new ApiService;



document.addEventListener('DOMContentLoaded', function(event) {
    
    api.getProducts()
    .then(products => console.log(products))
})

