import { Roll } from "../../models/index.js"

class RollSeeder {
  static async seed() {
    const rollsData = [
      {
        rollName: "Billie A Universal Studios",
        userId: 1
      },
      {
        rollName: "Bad Rabbits shooting for EP release",
        userId: 2
      }
    ]
    for (const singleRollData of rollsData) {
      const currentRoll = await Roll.query().findOne({ rollName: singleRollData.rollName })
      if(!currentRoll) {
        await Roll.query().insert(singleRollData)
      }
    }
  }
}

export default RollSeeder