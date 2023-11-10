import express from "express";
import { addNewPurchasing, countOrders, getOrder, listPurchasing } from "../controllers/purchasingController.js";

const router = express.Router();
router.get("/", listPurchasing);
router.get("/count-orders", countOrders);
router.post("/add-purchasing", addNewPurchasing);
router.get("/get-order/:id", getOrder);
export default router;
