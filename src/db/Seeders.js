import { connection } from "../../src/boot.js";
import UserSeeder from "./seeders/UserSeeder.js";
import FilmSeeder from "./seeders/FilmSeeder.js";
import RollSeeder from "./seeders/RollSeeder.js";
import SetUpSeeder from "./seeders/SetUpSeeder.js";
import LocationSeeder from "./seeders/LocationSeeder.js";
import FrameSeeder from "./seeders/FrameSeeder.js";

class Seeder {
  static async seed() {
    await UserSeeder.seed()
    await FilmSeeder.seed()
    await RollSeeder.seed()
    await SetUpSeeder.seed()
    await LocationSeeder.seed()
    await FrameSeeder.seed()

    await connection.destroy()
  }
}

export default Seeder 