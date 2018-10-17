json.array! @photos do |photo|
  json.extract! photo, :id, :title
  json.src url_for(photo.attachedPhoto)
  json.thumbnail url_for(photo.attachedPhoto)
  json.thumbnailWidth photo.width
  json.thumbnailHeight photo.height
  json.height = photo.height
  json.width = photo.width

end
