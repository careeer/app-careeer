class RemoveNameFromRoadmapElements < ActiveRecord::Migration[5.1]
  def change
    remove_column :roadmap_elements, :name, :string
  end
end
