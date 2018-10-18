# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email: 'admin@email.com', username:'501px', password: 'password')
User.create(email: 'guest@email.com', username:'Guest', password: 'password')
User.create(email: 'devin.p.flood@gmail.com', username:'Devin Flood', password: 'password')
User.create(email: 'cruella@101dalmations.com', username:'Cruella de Ville', password: 'password')
User.create(email: 'birdman@skateboards.com', username:'Tony Hawk', password: 'password')
User.create(email: 'neil.armstrong@nasa.gov', username:'Niel Armstrong', password: 'password')
User.create(email: 'free@solo.com', username:'Alex Honnold', password: 'password')
User.create(email: 'spoonful@sugar.com', username:'Mary Popins', password: 'password')
User.create(email: 'animal.lover@awesomepeople.com', username:'Steve Irwin', password: 'password')
User.create(email: 'dog@whisperer.com', username:'Cesar Milan', password: 'password')

photo1 = Photo.create(title: 'Shy Garfield', description: "A cute orange cat burying its nose in it's paws")
photo1.attachedPhoto.attach(io: File.open())
