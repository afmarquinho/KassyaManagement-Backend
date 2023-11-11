import express from "express";
import { addNewPurchasing, countOrders, editOrder, getOrder, listPurchasing } from "../controllers/purchasingController.js";

const router = express.Router();
router.get("/", listPurchasing);
router.get("/count-orders", countOrders);
router.post("/add-purchasing", addNewPurchasing);
router.route("/:id").get(getOrder).put(editOrder);
export default router;
