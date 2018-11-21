json.extract! photo, :id, :user_id, :title, :description
json.username photo.user.username
json.src url_for(photo.attachedPhoto)
json.likes photo.likes.length
