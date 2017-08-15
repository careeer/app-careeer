class AddIndexToRoadmapElements < ActiveRecord::Migration[5.1]
  def change
    add_column :roadmap_elements, :index, :int
  end
end
