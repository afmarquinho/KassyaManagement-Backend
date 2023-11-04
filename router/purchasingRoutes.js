import express from "express";
import { addNewPurchasing, countOrders, listPurchasing } from "../controllers/purchasingController.js";

const router = express.Router();
router.get("/", listPurchasing);
router.get("/count-orders", countOrders);
router.post("/add-purchasing", addNewPurchasing);
export default router;
