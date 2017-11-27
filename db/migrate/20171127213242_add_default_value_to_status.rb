class AddDefaultValueToStatus < ActiveRecord::Migration[5.1]
  def change
    change_column :roadmap_elements, :status, :boolean, default: false
  end
end
