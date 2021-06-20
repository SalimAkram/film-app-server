import { Location } from "../../models/index.js";

class LocationSeeder {
  static async seed() {
    const locationData = [
      {
        latitude: "48.98261",
        longitude: "-42.35371",
        shootId: 1
      },
      {
        latitude: "48.99261",
        longitude: "-38.35371",
        shootId: 1
      },
      {
        latitude: "48.90061",
        longitude: "-13.35371",
        shootId: 2
      },
      {
        latitude: "48.93361",
        longitude: "-52.35371",
        shootId: 2
      }
    ]

    for (const singleLocationData of locationData) {
      await Location.query().insert(singleLocationData)
    }
  }
}

export default LocationSeeder