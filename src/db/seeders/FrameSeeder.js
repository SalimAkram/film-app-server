import { Frame } from "../../models/index.js"

class FrameSeeder {
  static async seed() {
    const framesData = [
      {
        aperature: "2",
        shutterSpeed: "250",
        frameNumber: 1,
        notes: "it was a sunny day, but I think this frame maybe bad",
        shootId: 1,
      },
      {
        aperature: "6",
        shutterSpeed: "250",
        frameNumber: 2,
        notes: "I think this shoot was great.  On the building steps",
        shootId: 1,
      },
      {
        aperature: "22",
        shutterSpeed: "250",
        frameNumber: 3,
        notes: "I think this shot was bad?",
        shootId: 1,
      },
      {
        aperature: 2,
        shutterSpeed: "250",
        frameNumber: 4,
        notes: "too much light!",
        shootId: 1,
      },
      {
        aperature: "2",
        shutterSpeed: "250",
        frameNumber: 1,
        notes: "overcast I think I should have used different film",
        shootId: 2,
      },
      {
        aperature: "6",
        shutterSpeed: "250",
        frameNumber: 2,
        notes: "use flash next time indoors",
        shootId: 2,
      },
      {
        aperature: "22",
        shutterSpeed: "250",
        frameNumber: 3,
        notes: "I think this shot was great?",
        shootId: 2,
      },
      {
        aperature: "2",
        shutterSpeed: "250",
        frameNumber: 4,
        notes: "I think this shot was really bad?",
        shootId: 2,
      },
    ];

    for (const singleFrameData of framesData) {
      const currentFrame = await Frame.query().findOne({ frameNumber: singleFrameData.frameNumber })
      if (!currentFrame) {
        await Frame.query().insert(singleFrameData)
      }
    }
  }
}

export default FrameSeeder