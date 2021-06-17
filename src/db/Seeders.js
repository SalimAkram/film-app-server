import { connection } from "../../src/boot.js";
import FilmSeeder from "./seeders/FilmSeeder.js";
import ShootSeeder from "./seeders/ShootSeeder.js";
import SetUpSeeder from "./seeders/SetUpSeeder.js"

class Seeder {
  static async seed() {
    await FilmSeeder.seed()
    await ShootSeeder.seed()
    await SetUpSeeder.seed()

    await connection.destroy()
  }
}

export default Seeder 