class CartsController < ApplicationController

    
        def show 
            cart = Cart.find_by(id: params[:id])
            render json: cart
        end

        def new 
            cart = Cart.new(cart_params)

        end
        
        def create 
            cart = Cart.new(cart_params)
            if cart
                cart.save 
                render json: cart 
            else 
                render json: {error: "Test error"}
            end
        end

        def edit 
            cart = Cart.find_by(id: params[:id])
        end

        def update
            
            cp = CartsProducts.create(cart_id: params[:cart_id], product_id: params[:product_id])
            cart = Cart.find(params[:cart_id])
            cart.update(item_count: cart.products.count)
            total_price = cart.products.reduce(0) {|sum, product | sum + product.price }
            cart.update(total_price: total_price.round(2))
            render json: cart 
        
        end

    private 

    def cart_params
        params.require(:cart).permit(:item_count, :total_price, :product)

    end

    
end
