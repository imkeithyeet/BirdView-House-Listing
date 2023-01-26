# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Photo.destroy_all
Home.destroy_all
Offer.destroy_all

puts "Seeding users..."
u1 = User.create(username:"caitlinhouse", email: 'Caitlin@gmail.com', password: "1234")
u2 = User.create(username:"dreamfront", email: 'Lizzie@yahoo.com', password:"ilovechicken")
u3 = User.create(username:"hopes", email: 'Tom@hotmail.com', password:"dragonslayer")
u4 = User.create(username: "immorganyeet", email: 'Morgan@gmail.com',password:"master")
u5 = User.create(username:"dannydevito", email: 'Danny@gmail.com', password:"420")
u6 = User.create(username: "familyhome", email: 'Peter@gmail.com', password:"sub")
u7 = User.create(username: "bynes", email: 'Amanda@gmail.com', password:"hello")
u8 = User.create(username:"jonasbrother", email: 'Nick@gmail.com', password:"morgan")


puts "Seeding homes..."
h1 = Home.create( address: "123 broken dreams", price:700000, bio:"Modern escape", user:u1)
h2 = Home.create( address: "456 whats my name", price:700000, bio:"Hope is lost", user:u2)
h3 = Home.create( address: "500 downtown lane", price:700000, bio:"Modern living", user:u3)
h4 = Home.create( address: "700 beats rd", price:700000, bio:"Windy beach oasis", user:u4)
h5 = Home.create( address: "300 laughable lane", price:700000, bio:"Southern escape", user:u5)
h6 = Home.create( address: "12921 haywire street", price:700000, bio:"quiet city front", user:u6)
h7 = Home.create( address: "5757 lemon ave", price:700000, bio:"closed off terrace", user:u7)
h8 = Home.create( address: "5757 lemon ave", price:700000, bio:"closed off terrace", user:u8)


puts "Seeding photos..."
p1 = Photo.create(image_url: 'https://photos.zillowstatic.com/fp/87842c264b9338c9e4df482b623f6ff2-uncropped_scaled_within_1536_1152.webp', description: "Modern French", home:h1)
p2 = Photo.create(image_url: 'https://photos.zillowstatic.com/fp/58dcf8d95e06f3673917e59ad768b1a2-uncropped_scaled_within_1536_1152.webp', description: "Rustic Suburb", home:h2)
p3 = Photo.create(image_url: 'https://photos.zillowstatic.com/fp/42eaeb84268af1ea12270bbb9bcb0b02-uncropped_scaled_within_1536_1152.webp', description: "Suburban Mansion", home:h3)
p4 = Photo.create(image_url: 'https://photos.zillowstatic.com/fp/126f1b1c6eb30652701e77dd88f42e44-uncropped_scaled_within_1536_1152.webp', description: "Modern beacefront", home:h4)
p5 = Photo.create(image_url: 'https://photos.zillowstatic.com/fp/30fade5563ba4103958f4878a3308df0-uncropped_scaled_within_1536_1152.webp', description:  "Modern Farm Design", home:h5)
p6 = Photo.create(image_url: 'https://photos.zillowstatic.com/fp/e81e795e66ad59454d798340a538c3ab-uncropped_scaled_within_1536_1152.webp', description:  "Modern Shack",home:h6)
p7 = Photo.create(image_url: 'https://photos.zillowstatic.com/fp/0db72555ed567b919659248788e6f7c2-uncropped_scaled_within_1536_1152.webp', description:  "Modern Farm Design", home:h7)
p8 = Photo.create(image_url: 'https://photos.zillowstatic.com/fp/c88a83e28265f043bd586b875fb23397-uncropped_scaled_within_1536_1152.webp', description: "Suburban Mansion", home:h8)



puts "Seeding offers..."
o1 = Offer.create(user: u4, home: h4, amount: 200000)
o2 = Offer.create(user: u2, home: h3, amount: 200000)
o3 = Offer.create(user: u5, home: h1, amount: 500000)
o4 = Offer.create(user: u8, home: h4, amount: 400000)
o5 = Offer.create(user: u7, home: h5, amount: 25000000)
o6 = Offer.create(user: u6, home: h6, amount: 3000000)
o7 = Offer.create(user: u3, home: h7, amount: 100000)
o8 = Offer.create(user: u1, home: h1, amount: 7000000)



puts "✅ Done seeding!"