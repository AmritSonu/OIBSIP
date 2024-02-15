// routes/baseTypesRoutes.js
import express from "express";
import {
  createBaseType,
  deleteBaseType,
  getAllBases,
} from "../controllers/baseTypesControllers.js";

const baseTypesRouter = express.Router();

baseTypesRouter.post("/create_base_type", createBaseType);
baseTypesRouter.get("/get_all_base_types", getAllBases);
baseTypesRouter.delete("/delete_base_type/:BaseTypeId", deleteBaseType);

export { baseTypesRouter };
