import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import filmsRouter from "./api/v1/filmsRouter.js";
import shootsRouter from "./api/v1/shootsRouter.js";
import clientRouter from "./clientRouter.js";
import setUpsRouter from "./api/v1/setUpsRouter.js";

const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);

rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/films", filmsRouter);
rootRouter.use("/api/v1/shoots", shootsRouter);
rootRouter.use("/api/v1/setups", setUpsRouter);

export default rootRouter;
