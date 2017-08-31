class ChangeVisionToBeStringInClients < ActiveRecord::Migration[5.1]
  def change
    change_column :clients, :vision, :string
  end
end
