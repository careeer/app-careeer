class ChangeUserColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :users, :card_type, :card_brand
    change_column :users, :card_exp_month, :string
    change_column :users, :card_exp_year, :string
  end
end
