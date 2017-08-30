class ChangeColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :roadmap_elements, :index, :dnd_index
  end
end
