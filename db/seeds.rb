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
u1 = User.create(email: 'Caitlin@gmail.com', password: "1234")
u2 = User.create(email: 'Lizzie@yahoo.com', password:"ilovechicken")
u3 = User.create(email: 'Tom@hotmail.com', password:"dragonslayer")
u4 = User.create(email: 'Morgan@gmail.com',password:"master")
u5 = User.create(email: 'Danny@gmail.com', password:"420")
u6 = User.create(email: 'Peter@gmail.com', password:"sub")
u7 = User.create(email: 'Amanda@gmail.com', password:"hello")
u8 = User.create(email: 'Nick@gmail.com', password:"morgan")


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
p1 = Photo.create(image_url: 'https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607', description: "Modern French", home:h1)
p2 = Photo.create(image_url: 'https://wp-tid.zillowstatic.com/1/2017_ZillowExteriors_218-d1f5df.jpg', description: "Rustic Suburb", home:h2)
p3 = Photo.create(image_url: 'https://admin.azbigmedia.com/wp-content/uploads/2020/11/highest-price-home.jpg', description: "Suburban Mansion", home:h3)
p4 = Photo.create(image_url: 'https://www.bhg.com/thmb/0Fg0imFSA6HVZMS2DFWPvjbYDoQ=/1500x0/filters:no_upscale():[…]ved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg', description: "Modern Barn", home:h4)
p5 = Photo.create(image_url: 'https://cdn11.bigcommerce.com/s-g95xg0y1db/images/stencil/1280w/carousel/32/craftsman_house_plan_pinyon_ridge_ii_59493_front_exterior.jpg?c=1', description:  "Modern Farm Design", home:h5)
p6 = Photo.create(image_url: 'https://cdn11.bigcommerce.com/s-g95xg0y1db/images/stencil/1280w/carousel/30/front_elevation.jpg?c=1', description:  "Modern Shack",home:h6)
p7 = Photo.create(image_url: 'https://cdn11.bigcommerce.com/s-g95xg0y1db/images/stencil/1280w/carousel/32/craftsman_house_plan_pinyon_ridge_ii_59493_front_exterior.jpg?c=1', description:  "Modern Farm Design", home:h7)
p8 = Photo.create(image_url: 'https://admin.azbigmedia.com/wp-content/uploads/2020/11/highest-price-home.jpg', description: "Suburban Mansion", home:h8)



puts "Seeding offers..."
o1 = Offer.create(user: u4, home: h4)
o2 = Offer.create(user: u2, home: h3)
o3 = Offer.create(user: u5, home: h1)
o4 = Offer.create(user: u8, home: h4)
o5 = Offer.create(user: u7, home: h5)
o6 = Offer.create(user: u6, home: h6)
o7 = Offer.create(user: u3, home: h7)
o8 = Offer.create(user: u1, home: h1)



puts "✅ Done seeding!"