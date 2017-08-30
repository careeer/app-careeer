class AddClientToRoadmapElements < ActiveRecord::Migration[5.1]
  def change
    add_reference :roadmap_elements, :client, foreign_key: true
  end
end
