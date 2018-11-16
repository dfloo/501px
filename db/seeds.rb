# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Photo.destroy_all

admin = User.create(email: 'admin@email.com', username:'501px', password: 'password')
guest = User.create(email: 'guest@email.com', username:'Guest', password: 'password')
devin = User.create(email: 'devin.p.flood@gmail.com', username:'Devin Flood', password: 'password')
cruella = User.create(email: 'cruella@101dalmations.com', username:'Cruella de Ville', password: 'password')
tony = User.create(email: 'birdman@skateboards.com', username:'Tony Hawk', password: 'password')
neil = User.create(email: 'neil.armstrong@nasa.gov', username:'Neil Armstrong', password: 'password')
alex = User.create(email: 'free@solo.com', username:'Alex Honnold', password: 'password')
mary = User.create(email: 'spoonful@sugar.com', username:'Mary Poppins', password: 'password')
steve = User.create(email: 'animal.lover@awesomepeople.com', username:'Steve Irwin', password: 'password')
cesar = User.create(email: 'dog@whisperer.com', username:'Cesar Milan', password: 'password')

photo1 = Photo.new(user_id: alex.id, title: 'Top Rope is Fun',
  description: "Nothing like a relaxing day at the crag.")
photo1.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/A_Honnold/Top-Rope-is-Fun.jpg"),
  filename: 'Top-Rope-is-Fun.jpg')
photo1.save

photo2 = Photo.new(user_id: alex.id, title: 'Bouldering is Better',
  description: "Dynos!!!")
photo2.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/A_Honnold/Bouldering-is-Better.jpg"),
  filename: 'Bouldering-is-Better.jpg')
photo2.save

photo3 = Photo.new(user_id: alex.id, title: 'Sport Climbing is Best',
  description: "Look Mom, no feet.")
photo3.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/A_Honnold/Sport-Climbing-is-Best.jpg"),
  filename: 'Sport-Climbing-is-Best.jpg')
photo3.save

photo4 = Photo.new(user_id: alex.id, title: 'Gorgeous Red Rocks',
  description: "Looks like something straight out of a painting.")
photo4.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/A_Honnold/Gorgeous-Red-Rocks.jpg"),
  filename: 'Gorgeous-Red-Rocks.jpg')
photo4.save

photo5 = Photo.new(user_id: alex.id, title: 'Yosemite Half Dome',
  description: "Half Dome is the ultimate Yosemite day hike - the one you can't die without doing, and the one you're most likely to die while doing.")
photo5.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/A_Honnold/Yosemite-Half-Dome.jpg"),
  filename: 'Yosemite-Half-Dome.jpg')
photo5.save

photo6 = Photo.new(user_id: guest.id, title: 'Blue Steel',
  description: "But why feline models?")
photo6.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/Guest/Blue-Steel.jpg"),
  filename: 'Blue-Steel.jpg')
photo6.save

photo7 = Photo.new(user_id: guest.id, title: 'Calico Family',
  description: "3 out of 4 ain't bad.")
photo7.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/Guest/Calico-Family.jpg"),
  filename: 'Calico-Family.jpg')
photo7.save

photo8 = Photo.new(user_id: guest.id, title: 'Cute Kittens',
  description: "Aren't these just the most adorable creatures you've ever seen")
photo8.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/Guest/Cute-Kittens.jpg"),
  filename: 'Cute-Kittens.jpg')
photo8.save

photo9 = Photo.new(user_id: guest.id, title: 'Downward Facing Cat',
  description: "A little yoga in the morning is the best")
photo9.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/Guest/Downward-Facing-Cat.jpg"),
  filename: 'Downward-Facing-Cat.jpg')
photo9.save

photo10 = Photo.new(user_id: guest.id, title: 'Mesmerizing Persian',
  description: "Eyes as blue as the sky.")
photo10.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/Guest/Mesmerizing-Persian.jpg"),
  filename: 'Mesmerizing-Persian.jpg')
photo10.save

photo11 = Photo.new(user_id: guest.id, title: 'Shy Garfield',
  description: "I hate Mondays.")
photo11.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/Guest/Shy-Garfield.jpg"),
  filename: 'Shy-Garfield.jpg')
photo11.save

photo12 = Photo.new(user_id: cruella.id, title: 'Lucky',
  description: "Mom, Patch pushed me in the fireplace.")
photo12.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/C_deVille/Lucky.jpg"),
  filename: 'Lucky.jpg')
photo12.save

photo13 = Photo.new(user_id: cruella.id, title: 'OMG Beach',
  description: "SAND!!!.")
photo13.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/C_deVille/OMG-Beach.jpg"),
  filename: 'OMG-Beach.jpg')
photo13.save

photo14 = Photo.new(user_id: cruella.id, title: 'Perdita',
  description: "Please, children, don't quarrel.")
photo14.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/C_deVille/Perdita.jpg"),
  filename: 'Perdita.jpg')
photo14.save

photo15 = Photo.new(user_id: cruella.id, title: 'Pongo Portrait',
  description: "Lucky! Patch! Pepper! Freckles! And Rolly, you little rascal!")
photo15.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/C_deVille/Pongo-Portrait.jpg"),
  filename: 'Pongo-Portrait.jpg')
photo15.save

photo16 = Photo.new(user_id: cesar.id, title: 'Border Collie',
  description: "Hi I love you.")
photo16.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/C_Milan/Border-Collie.jpg"),
  filename: 'Border-Collie.jpg')
photo16.save

photo17 = Photo.new(user_id: cesar.id, title: 'Huckleberry & Finn',
  description: "Best friends forever.")
photo17.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/C_Milan/Huckleberry-Finn.jpg"),
  filename: 'Huckleberry-Finn.jpg')
photo17.save

photo18 = Photo.new(user_id: cesar.id, title: 'Iditarod Huskies',
  description: "Let's go. Mush!!")
photo18.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/C_Milan/Husky-Runners.jpg"),
  filename: 'Husky-Runners.jpg')
photo18.save

photo19 = Photo.new(user_id: cesar.id, title: 'Lazy Sunday',
  description: "Let's just stay in bed all day.")
photo19.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/C_Milan/Lazy-Sunday.jpg"),
  filename: 'Lazy-Sunday.jpg')
photo19.save

photo20 = Photo.new(user_id: cesar.id, title: 'The Three Amigos',
  description: "Would you say I have a plethora of pinatas?")
photo20.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/C_Milan/The-Three-Amigos.jpg"),
  filename: 'The-Three-Amigos.jpg')
photo20.save

photo21 = Photo.new(user_id: mary.id, title: 'Celebrations',
  description: "In every job that must be done, there is an element of fun. You find the fun, and - SNAP - the job's a game!")
photo21.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/M_Poppins/Celebrations.jpg"),
  filename: 'Celebrations.jpg')
photo21.save

photo22 = Photo.new(user_id: mary.id, title: 'Daisies',
  description: "Supercalifragilisticexpialidocious!")
photo22.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/M_Poppins/Daisies.jpg"),
  filename: 'Daisies.jpg')
photo22.save

photo23 = Photo.new(user_id: mary.id, title: 'Jasmine',
  description: "Oh, I make it a point never to give references. a very old-fashioned idea, to my mind.")
photo23.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/M_Poppins/Jasmine.jpg"),
  filename: 'Jasmine.jpg')
photo23.save

photo24 = Photo.new(user_id: mary.id, title: 'Peacock',
  description: "Our first game is called Well Begun is Half-Done.")
photo24.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/M_Poppins/Peacock.jpg"),
  filename: 'Peacock.jpg')
photo24.save

photo25 = Photo.new(user_id: mary.id, title: 'Squirrel',
  description: "Chim Chiminy, Chim Chiminy, Chim Chim Chiree! When you're with a 'sweep, you're in glad company.")
photo25.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/M_Poppins/Squirrel.jpg"),
  filename: 'Squirrel.jpg')
photo25.save

photo26 = Photo.new(user_id: neil.id, title: 'American Moon',
  description: "We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard.")
photo26.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/N_Armstrong/American-Moon.jpg"),
  filename: 'American-Moon.jpg')
photo26.save

photo27 = Photo.new(user_id: neil.id, title: 'Earths Rotation',
  description: "Is anyone else dizzy?")
photo27.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/N_Armstrong/Earths-Rotation.jpg"),
  filename: 'Earths-Rotation.jpg')
photo27.save

photo28 = Photo.new(user_id: neil.id, title: 'Italy From Space',
  description: "I can see my house from here!")
photo28.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/N_Armstrong/Italy-From-Space.jpg"),
  filename: 'Italy-From-Space.jpg')
photo28.save

photo29 = Photo.new(user_id: neil.id, title: 'One Small Step',
  description: "That's one small step for man, one giant leap for mankind.")
photo29.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/N_Armstrong/One-Small-Step.jpg"),
  filename: 'One-Small-Step.jpg')
photo29.save

photo30 = Photo.new(user_id: neil.id, title: 'Shuttle Launch',
  description: "Houston, Tranquility Base here. The Eagle has landed.")
photo30.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/N_Armstrong/Shuttle-Launch.jpg"),
  filename: 'Shuttle-Launch.jpg')
photo30.save

photo31 = Photo.new(user_id: neil.id, title: 'Space Selfie',
  description: "Does this spacesuit make my butt look fat?")
photo31.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/N_Armstrong/Space-Selfie.jpg"),
  filename: 'Space-Selfie.jpg')
photo31.save

photo32 = Photo.new(user_id: steve.id, title: 'Capybaras',
  description: "We humans still have a long way to go with learning to live harmoniously with our environment and its wildlife.")
photo32.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/S_Irwin/Capybaras.jpg"),
  filename: 'Capybaras.jpg')
photo32.save

photo33 = Photo.new(user_id: steve.id, title: 'Colorful Caiman',
  description: "If we can teach people about wildlife, they will be touched. Share my wildlife with me. Because humans want to save things that they love.")
photo33.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/S_Irwin/Colorful-Caiman.jpg"),
  filename: 'Colorful-Caiman.jpg')
photo33.save

photo34 = Photo.new(user_id: steve.id, title: 'Crazy Croc',
  description: "Crocodiles are easy. They try to kill and eat you. People are harder. Sometimes they pretend to be your friend first.")
photo34.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/S_Irwin/Crazy-Croc.jpg"),
  filename: 'Crazy-Croc.jpg')
photo34.save

photo35 = Photo.new(user_id: steve.id, title: 'Lazy Cheetah',
  description: "Where I live if someone gives you a hug it’s from the heart.")
photo35.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/S_Irwin/Lazy-Cheetah.jpg"),
  filename: 'Lazy-Cheetah.jpg')
photo35.save

photo36 = Photo.new(user_id: steve.id, title: 'Tigers',
  description: "I have no fear of losing my life - if I have to save a koala or a crocodile or a kangaroo or a snake, mate, I will save it.")
photo36.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/S_Irwin/Tigers.jpg"),
  filename: 'Tigers.jpg')
photo36.save

photo37 = Photo.new(user_id: tony.id, title: 'Bowl Action',
  description: "I consider skateboarding an art form, a lifestyle and a sport.")
photo37.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/T_Hawk/Bowl-Action.jpg"),
  filename: 'Bowl-Action.jpg')
photo37.save

photo38 = Photo.new(user_id: tony.id, title: 'From Russia With Love',
  description: "Being different is awesome! All of those who are different are more interesting than those who are clamoring for acceptance because they follow the path.")
photo38.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/T_Hawk/From-Russia-With-Love.jpg"),
  filename: 'From-Russia-With-Love.jpg')
photo38.save

photo39 = Photo.new(user_id: tony.id, title: 'Red Penny Board',
  description: "I won't quit skating until I am physically unable.")
photo39.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/T_Hawk/Red-Penny-Board.jpg"),
  filename: 'Red-Penny-Board.jpg')
photo39.save

photo40 = Photo.new(user_id: tony.id, title: 'Sidewalk-Ollie',
  description: "I believe that people should take pride in what they do, even if it is scorned or misunderstood by the public at large.")
photo40.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/T_Hawk/Sidewalk-Ollie.jpg"),
  filename: 'Sidewalk-Ollie.jpg')
photo40.save

photo41 = Photo.new(user_id: devin.id, title: 'Beakers',
  description: "Everything is science, as long as you record the results")
photo41.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/D_Flood/Beakers.jpg"),
  filename: 'Beakers.jpg')
photo41.save

photo42 = Photo.new(user_id: devin.id, title: 'Mexican Festival',
  description: "Growing up in Mexico was the coolest part of my childhood.")
photo42.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/D_Flood/Mexican-Festival.jpg"),
  filename: 'Mexican-Festival.jpg')
photo42.save

photo43 = Photo.new(user_id: devin.id, title: 'Golden Gate Bridge',
  description: "If you're alive you can't be bored in San Francisco. If you're not alive, San Francisco will bring you to life.")
photo43.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/D_Flood/Golden-Gate-Bridge.jpg"),
  filename: 'Golden-Gate-Bridge.jpg')
photo43.save

photo44 = Photo.new(user_id: devin.id, title: 'I Love Coding',
  description: "Programs must be written for people to read, and only incidentally for machines to execute.")
photo44.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/D_Flood/I-Like-Coding.jpg"),
  filename: 'I-Like-Coding.jpg')
photo44.save

photo45 = Photo.new(user_id: devin.id, title: 'H-Town',
  description: "Houston, we have a problem.")
photo45.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/D_Flood/H-Town.jpg"),
  filename: 'H-Town.jpg')
photo45.save

photo46 = Photo.new(user_id: devin.id, title: 'Cologne Cathedral at Night',
  description: "Even more impressive in person")
photo46.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/D_Flood/Cologne-Cathedral.jpg"),
  filename: 'Cologne-Cathedral.jpg')
photo46.save

photo47 = Photo.new(user_id: devin.id, title: 'Distillation Column',
  description: "Before studying engineering, if someone asked me what 1+1 is, I would have said 2. Now, I'd say: I'm pretty sure it's 2, but we'd better make it 3 just to be safe.")
photo47.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/D_Flood/Distillation-Column.jpg"),
  filename: 'Distillation-Column.jpg')
photo47.save

photo48 = Photo.new(user_id: devin.id, title: 'New York Skyline',
  description: "One belongs to New York instantly, one belongs to it as much in five minutes as in five years.")
photo48.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/D_Flood/New-York-Skyline.jpg"),
  filename: 'New-York-Skyline.jpg')
photo48.save

photo49 = Photo.new(user_id: devin.id, title: 'Coding Frustration',
  description: "It’s not a bug – it’s an undocumented feature.")
photo49.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/D_Flood/Coding-Frustration.jpg"),
  filename: 'Coding-Frustration.jpg')
photo49.save

photo50 = Photo.new(user_id: devin.id, title: 'Laptops Are Cool',
  description: "Without requirements or design, programming is the art of adding bugs to an empty text file.")
photo50.attachedPhoto.attach(io: File.open("#{Rails.root}/app/assets/images/seed_data/D_Flood/Laptops-Are-Cool.jpg"),
  filename: 'Laptops-Are-Cool.jpg')
photo50.save
