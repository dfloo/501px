export const upload = (formData) => (
  $.ajax({
    url: 'api/photos',
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  })
)
