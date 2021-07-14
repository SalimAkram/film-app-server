import { User } from "../../models/index.js"

class UserSeeder {
  static async seed() {
    const usersData = [
      {
        email: "user1@gmail.com",
        password: "test123456"
      },
      {
        email: "user2@gmail.com",
        password: "test123456"
      }
    ]

    for (const singleUserData of usersData) {
      const currentUser =  await User.query().findOne({ email: singleUserData.email })
      if (!currentUser) {
        await User.query().insert(singleUserData)
      }
    }

  }
}

export default UserSeeder