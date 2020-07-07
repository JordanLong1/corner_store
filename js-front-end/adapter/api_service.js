// fetch 

class ApiService {
    constructor() {

        this.baseUrl = "http://localhost:3000" 
    }

    getProducts() {
        return fetch(`${this.baseUrl}/products`) 
        .then(resp => resp.json())
    }

    getCertainProduct(prodId) {
        return fetch(`${this.baseUrl}/products/${prodId}`)
        .then(resp => resp.json())
    }

    createNewCart() {
       
        return fetch(`${this.baseUrl}/carts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                item_count: 0,
                total_price: 0.00
         })
        }) 
        .then(resp => resp.json())
        
    }

    updateCartWithProduct(cartDivId, item) {
        return fetch (`${this.baseUrl}/carts/${cartDivId}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, 
            body: JSON.stringify({
                title: item.title, 
                description: item.description, 
                price: item.price, 
                quantity: item.quantity, 
                category: item.category
            })
        })
        .then(resp => resp.json())
        console.log(cartDivId) // WORKING
    }



}


