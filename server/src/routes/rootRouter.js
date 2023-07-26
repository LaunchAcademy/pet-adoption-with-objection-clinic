import express from "express"

import clientRouter from "./clientRouter.js"
import speciesRouter from "./api/v1/speciesRouter.js"

const rootRouter = new express.Router()

rootRouter.use("/api/v1/species", speciesRouter)

rootRouter.use("/", clientRouter)

export default rootRouter
