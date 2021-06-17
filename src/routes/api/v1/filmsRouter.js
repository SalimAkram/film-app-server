import express from "express"
import { Film } from "../../../models/index.js"

const filmsRouter = new express.Router();

filmsRouter.get("/", async (req, res) => {
  try {
    const films = await Film.query()
    res.status(200).json({ films: films })
  } catch (error) {
    res.status(500).json({ errors: error })
  }
})

filmsRouter.post("/", async (req, res) => {
  try {
    res.status(201).json({ film: "this will be the film the user added to the data base" })
  } catch (error) {
    res.status(500).json({ errors: error });
  }
})

filmsRouter.patch("/:id", async (req, res) => {
  try {
    res.status(200).json({ film: "this will be the film that is updated" })
  } catch (error) {
    res.status(500).json({ errors: error })
  }
})

filmsRouter.delete("/:id", async (req, res) => {
  try {
    res.status(200).json({ film: "this will be the film that is deleted" });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
})

export default filmsRouter;
