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
        lenseAperature: "f/3.5-5.6",
        userId: 1,
      },
      {
        cameraBrand: "contax",
        cameraModel: "g1",
        lenseType: "fixed prime",
        lenseModel: "carl zeiss planar",
        focalLength: "45mm",
        lenseAperature: "f/2-16",
        userId: 1,
      },
      {
        cameraBrand: "olympus",
        cameraModel: "xa",
        lenseType: "fixed",
        lenseModel: "",
        focalLength: "35mm",
        lenseAperature: "f/2.8-f/22",
        userId: 2,
      },
    ];

    for (const singleSetUpData of setUpsData) {
      const currentSetUp = await SetUp.query().findOne({ cameraModel: singleSetUpData.cameraModel })
      if (!currentSetUp) {
        await SetUp.query().insert(singleSetUpData)
      }
    }
  }
}

export default SetUpSeeder