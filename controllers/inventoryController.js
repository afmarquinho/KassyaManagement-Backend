import { isEmpty, isNumber, isString, isAlphaNumeric } from "../helpers/validations.js";
import Inventory from "../models/Inventory.js";

const listItems = async (req, res) => {
  const items = await Inventory.find();
  try {
    res.json(items);
  } catch (error) {
    console.log(error);
  }
};

const addItem = async (req, res) => {
  const item = new Inventory(req.body);

  //   VALIDAD NO EMPTY FIELDS

  if (!isAlphaNumeric(item.name)) {
    return res.status(400).json({
      msg: "Ingrese un nombre válido",
    });
  }
  if (!isAlphaNumeric(item.ref)) {
    return res.status(400).json({
      msg: "Ingrese una referencia válida",
    });
  }
  if (!isEmpty(item.supplier)) {
    return res.status(400).json({
      msg: "Ingrese un proveedor válido",
    });
  }
   if (!isNumber(item.amount)) {
     return res.status(400).json({
       msg: "Ingrese una cantidad válida",
     });
  }
  if (!isEmpty(item.unit)) {
     return res.status(400).json({
       msg: "Ingrese una unidad válida",
     });
  }
  if (!isNumber(item.unitPrice)) {
     return res.status(400).json({
       msg: "Ingrese un precio válido",
     });
   }
  //   SAVE TO DB
  try {
    const savedItem = await item.save();
    res.status(201).json({
      success: true,
      msg: "Artículo guardado exitosamente",
      data: savedItem,
    });
  } catch (error) {
    console.error(error);
    res.satus(500).json({
      error: true,
      msg: "Error al guardar el artículo en la base de datos",
    });
  }
};

export { listItems, addItem };
