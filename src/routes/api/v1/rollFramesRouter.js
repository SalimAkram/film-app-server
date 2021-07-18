import express from "express"
import objection from "objection"
const { ValidationError } = objection

import Frame from "../../../models/Frame.js"
import cleanUserInput from "../../../services/cleanUserInput.js"
import currentFrameLocation from "../../../services/currentFrameLocation.js"

const rollFramesRouter = new express.Router({ mergeParams: true })

rollFramesRouter.post("/new", async (req, res) => {
  const { body } = req
  const formInput = cleanUserInput(body)
  const { aperature, shutterSpeed, frameNumber, notes } = formInput
  const { rollId } = req.params
  const location = await currentFrameLocation(rollId)
  
  try {
    const newFrame = await Frame.query().insertAndFetch({ aperature, shutterSpeed, frameNumber, location, notes, rollId  })
    return res.status(201).json({ frame: newFrame })
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log(error.data)
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})

rollFramesRouter.patch("/:id", async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ["aperature", "shutterSpeed", "frameNumber", "notes" ]
  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update)
  })

  if (!isValidOperation) {
    res.status(400).json({ error: "invalid update(s)!" })
  }
  
  try {
    const frame = await Frame.query().findById(req.params.id)
    if (!frame) {
      return res.status(404).json({ error: "this frame doesnt exist?" })
    }
    updates.forEach((update) => {
      frame[update] =  req.body[update]
    })
    res.status(200).json({ frame: frame })
  } catch (error) {
    res.status(500).json({ errors: error })
  }
})

rollFramesRouter.delete("/:id", async (req, res) => {
  const id = req.params.id
  try {
    const frame = await Frame.query().deleteById(id)
    if (!frame) {
      res.status(404).json({ error: "this frame doesn't exist dude!"})
    }
   return res.status(200).json({ deletedFrame: frame })
  } catch (error) {
    res.status(500).json({ errors: error })
  }
})

export default rollFramesRouter;