import {
  isEmpty,
  isNumber,
  isAlphaNumeric,
  isPositiveInteger,
} from "../helpers/validations.js";
import Inventory from "../models/Inventory.js";

const listItems = async (req, res) => {
  try {
    const items = await Inventory.find();
    res.json(items);
  } catch (error) {
    console.log(error);
    res.satus(500).json({
      error: true,
      msg: "Error al listar el inventario",
    });
  }
};

const addItem = async (req, res) => {
  const item = new Inventory(req.body);

  //   VALIDAD NO EMPTY FIELDS

  if (!isAlphaNumeric(item.name)) {
    const error = new Error("Ingrese un nombre válido");
    return res.status(404).json({ status: "error", msg: error.message });
  }
  if (!isAlphaNumeric(item.ref)) {
    const error = new Error("Ingrese una referencia válida");
    return res.status(404).json({ status: "error", msg: error.message });
  }
  if (!isPositiveInteger(item.amount)) {
    const error = new Error("Ingrese una cantidad válida");
    return res.status(404).json({ status: "error", msg: error.message });
  }
  if (!isEmpty(item.unit)) {
    const error = new Error("Ingrese una unidad válida");
    return res.status(404).json({ status: "error", msg: error.message });
  }
  if (!isPositiveInteger(item.unitPrice)) {
    const error = new Error("Ingrese un precio válido");
    return res.status(404).json({ status: "error", msg: error.message });
  }
  //   SAVE TO DB
  try {
    const savedItem = await item.save();
    res.status(201).json({
      status: "success",
      msg: "Artículo guardado exitosamente",
      data: savedItem,
    });
  } catch (error) {
    console.log(error);
    const err = new Error("Error al guardar el artículo en la base de datos");
    return res.status(404).json({ status: "error", msg: err.message });
  }
};
const editItem = async (req, res) => {
  const { id } = req.params;
  const item = await Inventory.findById(id);
  if (!item) {
    const error = new Error("No artículo encontrado");
    return res.status(404).json({ msg: error.message });
  }
  item.name = req.body.name || item.name;
  item.ref = req.body.ref || item.ref;
  item.supplier = req.body.supplier || item.supplier;
  item.amount = req.body.amount || item.amount;
  item.unit = req.body.unit || item.unit;
  item.unitPrice = req.body.unitPrice || item.unitPrice;
  try {
    const editedItem = await item.save();
    res.status(201).json({
      status: "success",
      msg: "Articulo editado exitosamente",
      data: editedItem,
    });
  } catch (error) {
    console.log(error);
    const err = new Error("Error al editar el artículo en la base de datos");
    return res.status(404).json({ status: "error", msg: err.message });
  }
};
const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItem = await Inventory.findByIdAndRemove(id);
    if (!deletedItem) {
      const error = new Error("Artículo no encontrado");
      return res.status(404).json({ msg: error.message });
    }
    res.status(200).json({
      success: true,
      msg: "Artículo eliminado con éxito",
      data: deletedItem,
    });
  } catch (error) {
    console.log(error);
    const err = new Error("Error al eliminar el artículo");
    return res.status(404).json({ status: "error", msg: err.message });
  }
};
const getItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Inventory.findById(id);
    if (!item) {
      const error = new Error("Artículo no encontrado");
      return res.status(404).json({ msg: error.message });
    }
    res.status(200).json({
      status: "success",
      msg: "Artículo encontrado con éxito",
      data: item,
    });
  } catch (error) {
    console.log(error);
    const err = new Error("Error al mostrar arículo");
    return res.status(404).json({ status: "error", msg: err.message });
  }
};
export { listItems, addItem, editItem, deleteItem, getItem };
