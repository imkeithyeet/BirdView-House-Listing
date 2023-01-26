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
h1 = Home.create( address: "594 S Mapleton Dr, Los Angeles, CA 90024", price:150000000, bio:"Modern vacation home that invites family and friends together", user:u1)
h2 = Home.create( address: "2571 Wallingford Dr, Beverly Hills, CA 90210", price:850000, bio:"Quiet suburban home with much greenery and neat walkway", user:u2)
h3 = Home.create( address: "7265 N 40th St, Paradise Valley, AZ 85253", price:6000000, bio:"Suburban mansion that encapsulates the wealth and view of Paradise Valley", user:u3)
h4 = Home.create( address: "1820 West Lawn Ave, Madison, WI 53711", price:850000, bio:"Beach front house in Wisconsin with breathtaking views and clean air ", user:u4)
h5 = Home.create( address: "679 County Road 1465, Bonham, TX 75418", price:700000, bio:"Southern style suburban forest environment", user:u5)
h6 = Home.create( address: "824 Mountain Ave, Wyckoff, NJ 07481", price:900000, bio:"Small Secluded house with modern design in a rural environment  ", user:u6)
h7 = Home.create( address: "679 County Road 1465, Bonham, TX 75418", price:700000, bio:"Southern style suburban forest environment", user:u7)
h8 = Home.create( address: "7265 N 40th St, Paradise Valley, AZ 85253", price:600000, bio:"Suburban mansion that encapsulates the wealth and view of Paradise Valleye", user:u8)


puts "Seeding photos..."
p1 = Photo.create(image_url: 'https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607', description: "Modern French", home:h1)
p2 = Photo.create(image_url: 'https://wp-tid.zillowstatic.com/1/2017_ZillowExteriors_218-d1f5df.jpg', description: "Rustic Suburb", home:h2)
p3 = Photo.create(image_url: 'https://admin.azbigmedia.com/wp-content/uploads/2020/11/highest-price-home.jpg', description: "Suburban Mansion", home:h3)
p4 = Photo.create(image_url: 'https://media.vrbo.com/lodging/47000000/46380000/46377000/46376931/ff0e352c.c10.jpg', description: "Modern beacefront", home:h4)
p5 = Photo.create(image_url: 'https://cdn11.bigcommerce.com/s-g95xg0y1db/images/stencil/1280w/carousel/32/craftsman_house_plan_pinyon_ridge_ii_59493_front_exterior.jpg?c=1', description:  "Modern Farm Design", home:h5)
p6 = Photo.create(image_url: 'https://cdn11.bigcommerce.com/s-g95xg0y1db/images/stencil/1280w/carousel/30/front_elevation.jpg?c=1', description:  "Modern Shack",home:h6)
p7 = Photo.create(image_url: 'https://cdn11.bigcommerce.com/s-g95xg0y1db/images/stencil/1280w/carousel/32/craftsman_house_plan_pinyon_ridge_ii_59493_front_exterior.jpg?c=1', description:  "Modern Farm Design", home:h7)
p8 = Photo.create(image_url: 'https://admin.azbigmedia.com/wp-content/uploads/2020/11/highest-price-home.jpg', description: "Suburban Mansion", home:h8)



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