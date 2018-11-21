class Changefollowstablename < ActiveRecord::Migration[5.2]
  def change
    rename_column :follows, :followee_id, :followed_id
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
    rename_table :follows, :relationships
  end
end
