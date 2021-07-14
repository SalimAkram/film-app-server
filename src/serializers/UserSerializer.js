class UserSerializer {
  static async getUser(user) {
    const allowedAttributes = ["id", "email"]
    let serializedUser = {}
    for (const attribute of allowedAttributes) {
      serializedUser[attribute] = user[attribute]
    }
    serializedUser.rolls = await user.$relatedQuery("rolls")
    serializedUser.setups = await user.$relatedQuery("setups")
    return serializedUser
  }
}

export default UserSerializer