class AddVisionToClients < ActiveRecord::Migration[5.1]
  def change
    add_column :clients, :vision, :text
  end
end
