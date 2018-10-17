json.array! @photos do |photo|
  json.extract! photo, :id, :title
  json.src url_for(photo.attachedPhoto)
  json.thumbnail url_for(photo.attachedPhoto)
  json.thumbnailWidth 160
  json.thumbnailHeight 90

end
