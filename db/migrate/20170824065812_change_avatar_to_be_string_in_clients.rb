class ChangeAvatarToBeStringInClients < ActiveRecord::Migration[5.1]
  def change
    change_column :clients, :avatar, :string
  end
end
