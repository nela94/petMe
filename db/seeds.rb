# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

userOne = User.create(name: "Manuela", username:"Nela", password_digest:"Password")
petOne = Pet.create(name:"Tobby", gender:"Male", description:"pretty little doggggyyy", age:"10", adoption_id: 9090, img_full:"img", contact:"919928282", user: userOne)
Match.create(user: userOne, pet: petOne)
