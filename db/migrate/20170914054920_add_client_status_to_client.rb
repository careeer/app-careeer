class AddClientStatusToClient < ActiveRecord::Migration[5.1]
  def change
    add_column :clients, :client_status, :string
  end
end
