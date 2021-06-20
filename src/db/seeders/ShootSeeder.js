import { Shoot } from "../../models/index.js"

class ShootSeeder {
  static async seed() {
    const shootsData = [
      {
        name: "Billie A Universal Studios",
        userId: 1
      },
      {
        name: "Bad Rabbits shooting for EP release",
        userId: 2
      }
    ]
    for (const singleShootData of shootsData) {
      const currentShoot = await Shoot.query().findOne({ name: singleShootData.name })
      if(!currentShoot) {
        await Shoot.query().insert(singleShootData)
      }
    }
  }
}

export default ShootSeeder