import * as express from "express";
import * as foo from "./foo";
import {HogeController} from "../controllers";

export const router = express.Router();

const hogeController = new HogeController();

router.get('/', (req, res, next) => {
  res.status(200);
  res.json({text: 'Hello World'});
});
router.get('/errorSample', hogeController.errorResponse);

router.use("/foo", foo.router);
