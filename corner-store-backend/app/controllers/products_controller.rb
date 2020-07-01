class ProductsController < ApplicationController

    # def create 
    #     # product = Product.create(products_params)
    # end
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
        params.require(:products).require(:title, :description, :price, :quantity, :cart_id, :category, :id)
    end


end
