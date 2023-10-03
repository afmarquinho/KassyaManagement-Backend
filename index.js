import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import inventoryRoutes from "./router/inventoryRoutes.js";
import supplierRoutes from "./router/supplierRoutes.js";


const app = express();
app.use(express.json());
dotenv.config();

connectDB();

app.use("/api/inventory", inventoryRoutes);
app.use("/api/supplier", supplierRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
