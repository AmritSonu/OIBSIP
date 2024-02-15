// routes/cheeseTypesRoutes.js
import express from "express";
import {
  createCheeseType,
  deleteCheeseType,
  getAllCheeses,
} from "../controllers/cheeseTypeControllers.js";

const cheeseTypesRouter = express.Router();

cheeseTypesRouter.post("/create_cheese_type", createCheeseType);
cheeseTypesRouter.get("/get_all_cheese_type", getAllCheeses);
cheeseTypesRouter.delete("/delete_cheese_type/:chesseTypeId", deleteCheeseType);

export { cheeseTypesRouter };
