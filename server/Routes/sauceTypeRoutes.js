// routes/sauceTypesRoutes.js
import express from "express";
import {
  createSauceType,
  deleteSauceType,
  getAllSauces,
} from "../controllers/sauceTypesControllers.js";

const sauceTypesRouter = express.Router();

sauceTypesRouter.post("/create_sauce_type", createSauceType);
sauceTypesRouter.get("/get_all_sauces", getAllSauces);
sauceTypesRouter.delete("/delete_sauce/:sauceId", deleteSauceType);

export { sauceTypesRouter };
