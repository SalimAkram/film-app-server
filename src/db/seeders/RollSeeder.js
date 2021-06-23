import { Roll } from "../../models/index.js"

class RollSeeder {
  static async seed() {
    const rollsData = [
      {
        name: "Billie A Universal Studios",
        userId: 1
      },
      {
        name: "Bad Rabbits shooting for EP release",
        userId: 2
      }
    ]
    for (const singleRollData of rollsData) {
      const currentRoll = await Roll.query().findOne({ name: singleRollData.name })
      if(!currentRoll) {
        await Roll.query().insert(singleRollData)
      }
    }
  }
}

export default RollSeeder