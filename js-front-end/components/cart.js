// cart class 

class Cart {
    constructor({item_count, total_price, id}) {
        this.itemCount = item_count;
        this.totalPrice = total_price;
        this.id = id;
    }

    createCartIcon() {
        // console.log(this)
        let iTag = document.createElement('i');
        iTag.setAttribute("class", "fas fa-shopping-cart");
    //    let cartBtn = document.createElement('BUTTON')

        document.body.appendChild(iTag)


        iTag.addEventListener('click', function(event) {
            console.log(event)
        })



    }


}