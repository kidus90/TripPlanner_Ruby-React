class RemoveTravelPreferencesFromUserInfos < ActiveRecord::Migration[6.0]
  def change
    remove_column :user_infos, :Travel_preferences, :text
  end
end
