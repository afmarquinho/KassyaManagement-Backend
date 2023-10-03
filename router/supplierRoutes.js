import express from "express";
import { addSupplier, getSupplier, listSupplier } from "../controllers/supplierController.js";

const router = express.Router();
router.post("/add-supplier", addSupplier);
router.get("/", listSupplier);
router.get("/:id",getSupplier);

export default router;