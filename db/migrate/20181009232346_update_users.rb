class UpdateUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :follows_id
  end
end
