import express from "express";
import {
  addSupplier,
  getSupplier,
  listSupplier,
  editSupplier,
} from "../controllers/supplierController.js";

const router = express.Router();
router.post("/add-supplier", addSupplier);
router.get("/", listSupplier);
router.route("/:id").get(getSupplier).put(editSupplier);

export default router;
