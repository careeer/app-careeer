class RemoveEmailFromClients < ActiveRecord::Migration[5.1]
  def change
    remove_column :clients, :email, :string
  end
end
