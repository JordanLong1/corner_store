// fetch 

class ApiService {
    constructor() {

        this.baseUrl = "http://localhost:3000" 
    }

    getProducts() {
        return fetch(`${this.baseUrl}/products`) 
        .then(resp => resp.json())
    }



}


