import express  from "express";

const pngtosvgRouter = express.Router();
pngtosvgRouter.get("/pngtosvgtest", (req, res) => {
    res.json({
        "test": "This end point is working fine"
    });
});

export{pngtosvgRouter};

