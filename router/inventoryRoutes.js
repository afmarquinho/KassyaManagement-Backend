import express from "express";
import {
  addItem,
  listItems,
  editItem,
  deleteItem,
  getItem,
} from "../controllers/inventoryController.js";

const router = express.Router();

router.get("/", listItems);
router.post("/add-item", addItem);
router.post("/add-item", addItem);
router.route("/:id").put(editItem).delete(deleteItem).get(getItem);
export default router;
