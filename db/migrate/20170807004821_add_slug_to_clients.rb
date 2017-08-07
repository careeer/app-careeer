class AddSlugToClients < ActiveRecord::Migration[5.1]
  def change
    add_column :clients, :slug, :string
    add_index :clients, :slug, unique: true
  end
end
