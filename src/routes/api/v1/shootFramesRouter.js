import express from "express"
import objection from "objection"
const { ValidationError } = objection

import Frame from "../../../models/Frame.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

const shootFramesRouter = new express.Router({ mergeParams: true })

shootFramesRouter.post("/", async (req, res) => {
  const { body } = req
  const formInput = cleanUserInput(body)
  const { aperature, shutterSpeed, frameNumber, notes } = formInput
  const { shootId } = req.params

  try {
    const newFrame = await Frame.query().insertAndFetch({ aperature, shutterSpeed, frameNumber, notes, shootId })
    return res.status(201).json({ frame: newFrame })
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})

export default shootFramesRouter;