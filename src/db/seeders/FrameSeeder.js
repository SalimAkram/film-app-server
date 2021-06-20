import { Frame } from "../../models/index.js"

class FrameSeeder {
  static async seed() {
    const framesData = [
      {
        aperature: "2",
        shutterSpeed: "250",
        frameNumber: 1,
        shootId: 1
      },
      {
        aperature: "6",
        shutterSpeed: "250",
        frameNumber: 2,
        shootId: 1
      },
      {
        aperature: "22",
        shutterSpeed: "250",
        frameNumber: 3,
        shootId: 1
      },
      {
        aperature: 2,
        shutterSpeed: "250",
        frameNumber: 4,
        shootId: 1
      },
      {
        aperature: "2",
        shutterSpeed: "250",
        frameNumber: 1,
        shootId: 2
      },
      {
        aperature: "6",
        shutterSpeed: "250",
        frameNumber: 2,
        shootId: 2
      },
      {
        aperature: "22",
        shutterSpeed: "250",
        frameNumber: 3,
        shootId: 2
      },
      {
        aperature: "2",
        shutterSpeed: "250",
        frameNumber: 4,
        shootId: 2
      }
    ]

    for (const singleFrameData of framesData) {
      const currentFrame = await Frame.query().findOne({ frameNumber: singleFrameData.frameNumber })
      if (!currentFrame) {
        await Frame.query().insert(singleFrameData)
      }
    }
  }
}

export default FrameSeeder