import { Film } from "../../models/index.js"

class FilmSeeder {
  static async seed() {
    const filmsData = [
      {
        brand: "kodak",
        filmName: "porta 400",
        iso: 400,
        format: "35mm",
      },
      {
        brand: "kodak",
        filmName: "porta 160",
        iso: 160,
        format: "35mm",
      },
      {
        brand: "kodak",
        filmName: "porta 800",
        iso: 800,
        format: "35mm",
      },
      {
        brand: "fujifilm",
        filmName: "pro400H",
        iso: 400,
        format: "35mm",
      },
      {
        brand: "fujifilm",
        filmName: "fujicolor 200",
        iso: 200,
        format: "35mm",
      },
      {
        brand: "fujifilm",
        filmName: "fujicolor 100",
        iso: 100,
        format: "35mm",
      },
      {
        brand: "cinestill",
        filmName: "50D",
        iso: 50,
        format: "35mm",
      },
      {
        brand: "cinestill",
        filmName: "800T",
        iso: 800,
        format: "35mm",
      },
      {
        brand: "lomography",
        filmName: "lomo 800",
        iso: 800,
        format: "120",
      },
      {
        brand: "lomography",
        filmName: "lomo 100",
        iso: 100,
        format: "120",
      },
    ]

    for (const singleFilmData of filmsData) {
      const currentFilm = await Film.query().findOne({ filmName: singleFilmData.filmName })
      if (!currentFilm) {
        await Film.query().insert(singleFilmData)
      }
    }
  }
}

export default FilmSeeder
