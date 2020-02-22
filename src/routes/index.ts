import * as express from "express";
import * as foo from "./foo";
export const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200);
    res.json({text: 'Hello World'});
});

router.use("/foo", foo.router);