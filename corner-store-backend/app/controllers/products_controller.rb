class ProductsController < ApplicationController

  
    def index 
        products = Product.all 
        render json: products

    end

    def show 
        product = Product.find_by(id: params[:id])
        render json: product
    end



    private 

    def products_params 
        params.require(:products).permit(:title, :description, :price, :cart_id, :category, :id)
    end


end
