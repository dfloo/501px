class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.string :photo_id, null: false
      t.string :user_id, null: false

      t.timestamps
    end
  end
end
