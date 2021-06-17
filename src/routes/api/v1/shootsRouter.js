import express from "express"
import { Shoot } from "../../../models/index.js"

const shootsRouter = new express.Router();

shootsRouter.get("/", async (req, res) => {
  try {
    res.status(200).json({ shoots: "this will be the shoots from the database eventually" })
  } catch (error) {
    res.status(500).json({ errors: error })
  }
})

shootsRouter.post("/", async (req, res) => {
  try {
    res.status(200).json({ shoot: "this will be the updated shoot" })
  } catch (error) {
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