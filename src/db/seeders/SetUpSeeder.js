import { SetUp } from "../../models/index.js";

class SetUpSeeder {
  static async seed() {
    const setUpsData = [
      {
        cameraBrand: "yashica",
        cameraModel: "t4",
        lenseType: "fixed",
        lenseModel: "carl zeiss tessar",
        focalLength: "35mm",
        lenseAperature: "f/3.5-5.6"
      }
    ]

    for (const singleSetUpData of setUpsData) {
      const currentSetUp = await SetUp.query().findOne({ cameraModel: singleSetUpData.cameraModel })
      if (!currentSetUp) {
        await SetUp.query().insert(singleSetUpData)
      }
    }
  }
}

export default SetUpSeeder