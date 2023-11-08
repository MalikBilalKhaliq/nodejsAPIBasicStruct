import express from "express";
import cors from "cors";
import morgan from "morgan";

const defaultMiddleware = (app) => {
    const allMiddleware = [  cors(),express.static("public"), express.json(), express.urlencoded({ extended: true }), morgan("dev")];

    if (app) {
        allMiddleware.forEach((middleware) => app.use(middleware));
        app.use(express.static("/public"))
    }
};

export default defaultMiddleware;