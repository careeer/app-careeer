class RemoveStatusFromRoadmapElements < ActiveRecord::Migration[5.1]
  def change
    remove_column :roadmap_elements, :status
  end
end
