import { Film } from "../../models/index.js"

class FilmSeeder {
  static async seed() {
    const filmsData = [
      {
        brand: "kodak",
        name: "porta 400",
        iso: 400,
        format: "35mm",
      },
      {
        brand: "kodak",
        name: "porta 160",
        iso: 160,
        format: "35mm",
      },
      {
        brand: "kodak",
        name: "porta 800",
        iso: 800,
        format: "35mm",
      },
      {
        brand: "fujifilm",
        name: "pro400H",
        iso: 400,
        format: "35mm",
      },
      {
        brand: "fujifilm",
        name: "fujicolor 200",
        iso: 200,
        format: "35mm",
      },
      {
        brand: "fujifilm",
        name: "fujicolor 100",
        iso: 100,
        format: "35mm",
      },
      {
        brand: "cinestill",
        name: "50D",
        iso: 50,
        format: "35mm",
      },
      {
        brand: "cinestill",
        name: "800T",
        iso: 800,
        format: "35mm",
      },
      {
        brand: "lomography",
        name: "lomo 800",
        iso: 800,
        format: "120",
      },
      {
        brand: "lomography",
        name: "lomo 100",
        iso: 100,
        format: "120",
      },
    ]

    for (const singleFilmData of filmsData) {
      const currentFilm = await Film.query().findOne({ name: singleFilmData.name })
      if (!currentFilm) {
        await Film.query().insert(singleFilmData)
      }
    }
  }
}

export default FilmSeeder
