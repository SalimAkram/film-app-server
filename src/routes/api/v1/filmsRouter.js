import express from "express"
import objection from "objection"
const { ValidationError } = objection

import { Film } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

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
  const { body } = req
  const formInput = cleanUserInput(body)

  try {
    const newFilm = await Film.query().insertAndFetch(formInput)
    return res.status(201).json({ newFilm })
  } catch (error) {
    if( error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
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
