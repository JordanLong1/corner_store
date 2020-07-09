class Product < ApplicationRecord
  # belongs_to :cart, optional: true
    has_and_belongs_to_many :carts

    def self.unique_titles(title)
      self.find_by(title: title)
    end

end
