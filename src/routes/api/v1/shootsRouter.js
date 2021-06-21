import express from "express"
import objection from "objection"
const { ValidationError } = objection

import { Shoot } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

import shootFramesRouter from "./shootFramesRouter.js"
import shootLocationsRouter from "./shootLocationsRouter.js"

const shootsRouter = new express.Router();

shootsRouter.use("/:shootId/frames", shootFramesRouter)
shootsRouter.use("/:shootId/locations", shootLocationsRouter)

shootsRouter.get("/", async (req, res) => {
  try {
    const shoots = await Shoot.query()
    res.status(200).json({ shoots: shoots })
  } catch (error) {
    res.status(500).json({ errors: error })
  }
})

shootsRouter.get("/:id", async (req, res) => {
  try { 
    const shoot = await Shoot.query().findById(req.params.id)
    shoot.locations = await shoot.$relatedQuery("locations")
    shoot.frames = await shoot.$relatedQuery("frames")
    res.status(200).json({ shoot: shoot })
  } catch (error) {
    res.status(500).json({ errors: error })
  }
})

shootsRouter.post("/", async (req, res) => {
  const { body } = req
  const formInput = cleanUserInput(body)
  
  try {
    const newShoot = await Shoot.query().insertAndFetch(formInput)
    res.status(200).json({ newShoot })
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    res.status(500).json({ errors: error });
  }
})

shootsRouter.patch("/:id", async (req, res) => {
  try {
    res.status(200).json({ shoot: "this will be the shoot the is updated" })
  } catch (error) {
    res.status(500).json({ errors: error })
  }
})

shootsRouter.delete("/:id", async (req, res) => {
  try {
    res.status(200).json({ shoot: "this will be the shoot that is deleted" })
  } catch (error) {
    res.status(500).json({ errors: error })
  }
})

export default shootsRouter