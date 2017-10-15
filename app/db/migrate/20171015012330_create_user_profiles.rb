class CreateUserProfiles < ActiveRecord::Migration[5.1]
  def change
    create_table :user_profiles do |t|
      t.string :gender
      t.string :about
      t.string :occupation
      t.string :skills
      t.timestamps
    end
  end
end
