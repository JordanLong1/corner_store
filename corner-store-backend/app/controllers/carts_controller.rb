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
                # binding.pry
                render json: cart 
            else 
                render json: {error: "Test error"}
            end
        end

        def edit 
            cart = Cart.find_by(id: params[:id])
        end

        def update
            cart = Cart.find_by(id: params[:id])
            cart.products.build(title: params[:title], description: params[:description], price: params[:price], quantity: params[:quantity], category: params[:category])
            cart.save
            render json: cart 
        
        end

    private 

    def cart_params
        params.require(:cart).permit(:item_count, :total_price, :product)

    end

    
end
