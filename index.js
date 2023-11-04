import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import inventoryRoutes from "./router/inventoryRoutes.js";
import supplierRoutes from "./router/supplierRoutes.js";
import purchasingRoutes from "./router/purchasingRoutes.js";

import cors from "cors"


const app = express();
app.use(express.json());
dotenv.config();
connectDB();
const whiteList = [process.env.FRONTEND_URL];


app.use(
  cors({
    origin: whiteList,
  })
);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/supplier", supplierRoutes);
app.use("/api/purchasing", purchasingRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
