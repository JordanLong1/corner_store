class CartsProductsController < ApplicationController

    def new
        carts_products = CartsProducts.new(carts_products_params)
    end

    def create 
        cp = CartsProducts.create(cart_id: params[:cart_id], product_id: params[:product_id])
        cart = Cart.find(params[:cart_id])
        cart.update(item_count: cart.products.count)
        total_price = cart.products.reduce(0) {|sum, product | sum + product.price }
        cart.update(total_price: total_price.round(2))
        render json: cart 


    end

    def destroy
        if params[:subtract_product_id]
            CartsProducts.where(cart_id: params[:cart_id], product_id: params[:subtract_product_id]).last.destroy
            cart = Cart.find(params[:cart_id])
            render json: cart
        end
    end

    private 

    def carts_products_params
        params.require(:carts_products).permit(:cart_id, :product_id)
    end
end
