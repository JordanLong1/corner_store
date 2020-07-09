class ProductsController < ApplicationController

    # def create 
    #     # product = Product.create(products_params)
    # end
    def index 
        # products = Product.all 
        products = Product.distinct.pluck(:title)
        unique_products = products.map do |p|
            Product.unique_titles(p)
        end
        render json: unique_products.sort
    end

    def show 
        product = Product.find_by(id: params[:id])
        render json: product
    end



    private 

    def products_params 
        params.require(:products).permit(:title, :description, :price, :quantity, :cart_id, :category, :id)
    end


end
