class AddClientNameToRoadmapElements < ActiveRecord::Migration[5.1]
  def change
    add_column :roadmap_elements, :name, :string
  end
end
