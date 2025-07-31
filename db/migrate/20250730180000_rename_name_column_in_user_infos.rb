class RenameNameColumnInUserInfos < ActiveRecord::Migration[6.0]
  def change
    rename_column :user_infos, :Name, :name
  end
end
