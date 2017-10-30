json.extract! @notification, :id, :user_id, :notified_by, :created_at, :updated_at
json.url notification_url(@notification, format: :json)
