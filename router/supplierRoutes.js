import express from "express";
import {
  addSupplier,
  getSupplier,
  listSupplier,
  editSupplier,
  deleteSupplier,
} from "../controllers/supplierController.js";

const router = express.Router();
router.post("/add-supplier", addSupplier);
router.get("/", listSupplier);
router.route("/:id").get(getSupplier).put(editSupplier);
router.route("/:id").get(getSupplier).put(editSupplier);
router.delete("/delete-supplier/:id", deleteSupplier)
export default router;
