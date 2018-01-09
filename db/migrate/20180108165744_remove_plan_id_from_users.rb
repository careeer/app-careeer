class RemovePlanIdFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :plan_id, :integer
  end
end
