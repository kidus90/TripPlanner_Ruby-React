class CreateUserInfos < ActiveRecord::Migration[8.0]
  def change
    create_table :user_infos do |t|
      t.references :user, null: false, foreign_key: true
      t.string :Name
      t.string :Phone
      t.string :Country
      t.string :Travel_level
      t.text :Travel_preferences
      t.integer :Trip_taken

      t.timestamps
    end
  end
end
