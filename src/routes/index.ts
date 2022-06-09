import * as express from "express";
import * as foo from "./foo";
import { HogeController } from "../controllers";
import { db_pool } from "../helpers/DBHelper";

export const router = express.Router();

const hogeController = new HogeController();

router.get("/", (req, res, next) => {
  res.status(200);
  res.json({ text: "Hello World" });
});
router.get("/errorSample", hogeController.errorResponse);

router.use("/foo", foo.router);

//test mysql2
router.get("/db", async (req, res, next) => {
  const results = await db_pool.query("SELECT COUNT(*) FROM `tweets`;");

  res.status(200);
  res.json({ text: results });
});
