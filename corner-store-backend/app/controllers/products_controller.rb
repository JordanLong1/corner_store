class ProductsController < ApplicationController

    def create 
        product = Product.create(products_params)
    end

    def show 

    end

    def index 

    end

    private 

    def products_params 
        params.require(:products).require(:title, :description, :price, :quantity)
    end

end
