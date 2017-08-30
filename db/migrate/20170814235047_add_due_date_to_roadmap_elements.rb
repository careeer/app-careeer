class AddDueDateToRoadmapElements < ActiveRecord::Migration[5.1]
  def change
    add_column :roadmap_elements, :due_date, :string
  end
end
