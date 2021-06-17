import { Shoot } from "../../models/index.js"

class ShootSeeder {
  static async seed() {
    const shootsData = [
      {
        name: "Billie A Universal Studios",
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