json.extract! photo, :id, :user_id, :title
json.src url_for(photo.attachedPhoto)
