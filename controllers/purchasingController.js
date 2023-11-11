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

const getOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Purchasing.findById(id);
    if (!order) {
      const error = new Error("Órden no encontrada");
      return res.status(404).json({ msg: error.message });
    }
    res.status(200).json({
      status: "success",
      msg: "Órden encontrada con éxito",
      data: order,
    });
  } catch (error) {
    console.log(error);
    const err = new Error("Error al mostrar la órden");
    return res.status(404).json({ status: "error", msg: err.message });
  }
};

const editOrder = async (req, res) => {
  const { id } = req.params;
  const updates = req.body; 
  try {
    const editedOrder = await Purchasing.findByIdAndUpdate(id, updates, {
      new: true, // Esto devuelve el documento actualizado en lugar del antiguo
      runValidators: true, // Esto aplica las validaciones de tu modelo
    });

    if (!editedOrder) {
      const error = new Error("Orden no encontrada en la BBDD");
      return res.status(404).json({ msg: error.message });
    }

    res.status(201).json({
      status: "success",
      msg: "Orden actualizada",
      data: editedOrder,
    });
  } catch (error) {
    console.error(error);
    const err = new Error("Error al editar la órden en la base de datos");
    return res.status(404).json({ status: "error", msg: err.message });
  }
};

export { addNewPurchasing, listPurchasing, countOrders, getOrder, editOrder };
