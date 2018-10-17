class AddDimensionsToPhotos < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :dimensions, :string
  end
end
