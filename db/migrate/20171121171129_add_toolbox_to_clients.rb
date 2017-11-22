class AddToolboxToClients < ActiveRecord::Migration[5.1]
  def change
    add_column :clients, :toolbox, :string
  end
end
