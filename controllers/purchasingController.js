import Purchasing from "../models/Purchasing.js";

//? Agregar nueva orden
const addNewPurchasing = async (req, res) => {
  const purchasing = new Purchasing(req.body);
  try {
    const savedPurchasing = await purchasing.save();
    res.status(201).json({
      status: "success",
      msg: "Orden creada exitosamente",
      data: savedPurchasing,
    });
  } catch (error) {
    console.log(error);
  }
};
//? Listar todas las ordenes
const listPurchasing = async (req, res) => {
  try {
    const purchasing = await Purchasing.find();
    res.json(purchasing);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      msg: "Error al mostrar las órdenes de compra",
    });
  }
};
//? Contar todas las ordenes para generar el consecutivo
const countOrders = async (req, res) => {
  try {
    const counter = await Purchasing.countDocuments();
    res.status(200).json({
      status: "success",
      data: counter,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener el conteo de órdenes" });
  }
};
export { addNewPurchasing, listPurchasing, countOrders };
