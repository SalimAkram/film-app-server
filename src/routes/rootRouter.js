import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import filmsRouter from "./api/v1/filmsRouter.js";
import rollsRouter from "./api/v1/rollsRouter.js";
import clientRouter from "./clientRouter.js";
import setUpsRouter from "./api/v1/setUpsRouter.js";

const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);

rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/films", filmsRouter);
rootRouter.use("/api/v1/rolls", rollsRouter);
rootRouter.use("/api/v1/setups", setUpsRouter);

export default rootRouter;
