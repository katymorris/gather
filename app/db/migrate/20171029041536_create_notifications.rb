class CreateNotifications < ActiveRecord::Migration[5.1]
  def change
    create_table :notifications do |t|
      t.references :user, foreign_key: true, index: true
      t.integer :notified_by, index: true
      t.boolean :read, default: false
      t.belongs_to :notifiable, polymorphic: true
      t.timestamps
    end
    add_index :notifications, [:notifiable_id, :notifiable_type]
  end
end
