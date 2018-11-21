json.extract! user, :id, :email, :username
json.follows user.followers.length
