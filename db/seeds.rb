# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email: 'guest@email.com', username:'Guest', password: 'password')
User.create(email: 'devin.p.flood@gmail.com', username:'DevO', password: 'password')
User.create(email: 'cruella@email.com', username:'C. de Ville', password: 'password')
User.create(email: 'skaterboi@email.com', username:'T_Hawk', password: 'password')
User.create(email: 'chemE@email.com', username:'ChE', password: 'password')
User.create(email: 'neil.armstrong@email.com', username:'MoonMan', password: 'password')
User.create(email: 'alex.honnold@email.com', username:'FreeSolo', password: 'password')
