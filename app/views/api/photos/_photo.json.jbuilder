json.extract! photo, :id, :user_id, :title, :description
json.src url_for(photo.attachedPhoto)
