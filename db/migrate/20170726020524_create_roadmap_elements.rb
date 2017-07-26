class CreateRoadmapElements < ActiveRecord::Migration[5.1]
  def change
    create_table :roadmap_elements do |t|
      t.string :card_type
      t.string :title
      t.string :description
      t.string :call_to_action
      t.string :call_to_action_url

      t.timestamps
    end
  end
end
