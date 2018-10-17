class UpdatePhotos < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :width, :integer
    add_column :photos, :height, :integer
    remove_column :photos, :dimensions
  end
end
