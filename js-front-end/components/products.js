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
        console.log(this)
    }

}