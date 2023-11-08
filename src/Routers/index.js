import { pngtosvgRouter } from "./pngtosvgRouter/index.js";
// const connectionsRouter = require("./connectionsRouter");
// const analyticsRouter = require("./analyticsRouter");

const routes = [
    {
        path: "/api/pngtosvg",
        handler: pngtosvgRouter,
    }
];

const connectRoute = (app) => {
    routes.forEach((route) => {
        app.use(route.path, route.handler);
    });
};

export {connectRoute};