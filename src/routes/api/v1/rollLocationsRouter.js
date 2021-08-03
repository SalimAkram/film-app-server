import express from "express"
import objection from "objection"
const { ValidationError } = objection

import { Location, Roll } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"
import checkCoordsExist from "../../../services/checkCoordsExist.js";

const rollLocationsRouter = new express.Router({ mergeParams: true })

rollLocationsRouter.post("/", async (req, res) => {

  const { body } = req
  const formInput = cleanUserInput(body)
  //add some error handling if the formInput fails or is weird
  // const coords = getCoordinates(formInput)
  const { longitude, latitude } = body
  const { rollId } = req.params

  try {
    const newLocation = await Location.query().insertAndFetch({ longitude, latitude, rollId })
    return res.status(201).json({ location: newLocation })
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})

export default rollLocationsRouter;