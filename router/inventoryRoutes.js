import express from "express";
import { addItem, listItems } from "../controllers/inventoryController.js";

const router = express.Router();

router.post("/", listItems);
router.post("/add-item", addItem);
export default router;
