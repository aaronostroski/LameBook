class AddFirstNameToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :firstName, :string
  end
end
