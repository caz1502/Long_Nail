const db = require("../config/connection");
const {
  User,
  Acrylic,
  Colour,
  Relaxation,
  Service,
  Shape,
  Waxing,
} = require("../models");
const userSeeds = require("./userSeeds.json");
const acrylicSeeds = require("./acrylicSeeds.json");
const colourSeeds = require("./colourSeeds.json");
const relaxationSeeds = require("./relaxationSeeds.json");
const serviceSeeds = require("./serviceSeeds.json");
const shapeSeeds = require("./shapeSeeds.json");
const waxingSeeds = require("./waxingSeeds.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("🎉 Users seeded! 🎉");

  try {
    await Acrylic.deleteMany({});
    await Acrylic.create(acrylicSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("🎉 Acrylic Seeded! 🎉");

    try {
      await Colour.deleteMany({});
      await Colour.create(colourSeeds);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  console.log("🎉 Colour Seeded! 🎉");
  
      try {
        await Relaxation.deleteMany({});
        await Relaxation.create(relaxationSeeds);
      } catch (err) {
        console.error(err);
        process.exit(1);
      }
  console.log("🎉 Relaxation Seeded! 🎉");
  
     try {
       await Service.deleteMany({});
       await Service.create(serviceSeeds);
     } catch (err) {
       console.error(err);
       process.exit(1);
     }
     console.log("🎉 Service Seeded! 🎉");

     try {
       await Shape.deleteMany({});
       await Shape.create(shapeSeeds);
     } catch (err) {
       console.error(err);
       process.exit(1);
     }
  console.log("🎉 Shapes Seeded! 🎉");
  
  
     try {
       await Waxing.deleteMany({});
       await Waxing.create(waxingSeeds);
     } catch (err) {
       console.error(err);
       process.exit(1);
     }
     console.log("🎉 Waxing Seeded! 🎉");








  process.exit(0);
});
