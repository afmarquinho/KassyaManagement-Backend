import Supplier from "../models/Supplier.js";
import {
  isAlphaNumeric,
  isEmail,
  isNumber,
  isPhone,
  isPositiveInteger,
  isString,
} from "../helpers/validations.js";

const addSupplier = async (req, res) => {
  const supplier = new Supplier(req.body);

  if (!isAlphaNumeric(supplier.businessName)) {
    const error = new Error("Ingrese un nombre válido");
    return res.status(404).json({ status: "error", msg: error.message });
  }
  if (!isAlphaNumeric(supplier.nif)) {
    const error = new Error("Ingrese un ID/NIF/NIT válido");
    return res.status(404).json({ status: "error", msg: error.message });
  }
  if (!isString(supplier.entity)) {
    const error = new Error("Ingrese un tipo de persona, pe.: jurídica");
    return res.status(404).json({ status: "error", msg: error.message });
  }
  if (!isString(supplier.country)) {
    const error = new Error("Ingrese un país válido");
    return res.status(404).json({ status: "error", msg: error.message });
  }
  if (!isString(supplier.city)) {
    const error = new Error("Ingrese una ciudad válida");
    return res.status(404).json({ status: "error", msg: error.message });
  }
  if (!isAlphaNumeric(supplier.address)) {
    const error = new Error("Ingrese una dirección válida");
    return res.status(404).json({ status: "error", msg: error.message });
  }
  if (!isNumber(supplier.zipCode)) {
    const error = new Error("Ingrese una código postal válido");
    return res.status(404).json({ status: "error", msg: error.message });
  }
  if (!isPhone(supplier.tel)) {
    const error = new Error("Ingrese un teléfono válido");
    return res.status(404).json({ status: "error", msg: error.message });
  }
  if (!isAlphaNumeric(supplier.webSite)) {
    const error = new Error("Ingrese un sitio web válido válido válida");
    return res.status(404).json({ status: "error", msg: error.message });
  }
  if (!isString(supplier.bank)) {
    const error = new Error("Ingrese un banco válido");
    return res.status(404).json({ status: "error", msg: error.message });
  }
  if (!isAlphaNumeric(supplier.bankingAccount)) {
    const error = new Error("Ingrese una cuenta bancaria válida");
    return res.status(404).json({ status: "error", msg: error.message });
  }
  if (!isPositiveInteger(supplier.paymentTerms)) {
    const error = new Error("Ingrese un plazo válid");
    return res.status(404).json({ status: "error", msg: error.message });
  }
  if (!isString(supplier.contactName)) {
    const error = new Error("Ingrese un nombre de contacto válido");
    return res.status(404).json({ status: "error", msg: error.message });
  }
  if (!isPhone(supplier.contactNumber)) {
    const error = new Error("Ingrese un número de contacto válido");
    return res.status(404).json({ status: "error", msg: error.message });
  }
  if (!isEmail(supplier.contactEmail)) {
    const error = new Error("Ingrese un email de contacto válido");
    return res.status(404).json({ status: "error", msg: error.message });
  }
  try {
    const savedSupplier = await supplier.save();
    res.status(201).json({
      status: "success",
      msg: "Proveedor guardado exitosamente",
      data: savedSupplier,
    });
  } catch (error) {
    console.log(error);
    const err = new Error("Error al guardar el proveedor en la base de datos");
    return res.status(404).json({ status: "error", msg: err.message });
  }
};

const listSupplier = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.json(suppliers);
  } catch (error) {
    console.log(error);
    res.satus(500).json({
      status: "error",
      msg: "Error al mostrar los proveedores",
    });
  }
};
const getSupplier = async (req, res) => {
  const { id } = req.params;
  try {
    const supplier = await Supplier.findById(id);
    if (!supplier) {
      const error = new Error("Proveedor no encontrado");
      return res.status(404).json({ msg: error.message });
    }
    res.status(200).json({
      status: "success",
      msg: "Proveedor encontrado con éxito",
      data: supplier,
    });
  } catch (error) {
    console.log(error);
    const err = new Error("Error al mostrar el proveedor");
    return res.status(404).json({ status: "error", msg: err.message });
  }
};
const editSupplier = async (req, res) => {
  const { id } = req.params;
  const updates = req.body; // Obtén las actualizaciones del cuerpo de la solicitud
  try {
    const editedSupplier = await Supplier.findByIdAndUpdate(id, updates, {
      new: true, // Esto devuelve el documento actualizado en lugar del antiguo
      runValidators: true, // Esto aplica las validaciones de tu modelo
    });

    if (!editedSupplier) {
      const error = new Error("Proveedor no encontrado");
      return res.status(404).json({ msg: error.message });
    }

    res.status(201).json({
      status: "success",
      msg: "Proveedor actualizado",
      data: editedSupplier,
    });
  } catch (error) {
    console.error(error);
    const err = new Error("Error al editar el proveedor en la base de datos");
    return res.status(404).json({ status: "error", msg: err.message });
  }
};
const deleteSupplier = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSupplier = await Supplier.findByIdAndRemove(id);
    if (!deletedSupplier) {
      const error = new Error("Proveedor no encontrado");
      return res.status(404).json({ msg: error.message });
    }
    res.status(200).json({
      success: true,
      msg: "Proveedor eliminado con éxito",
      data: deletedSupplier,
    });
  } catch (error) {
    console.log(error);
    const err = new Error("Error al eliminar el proveedor");
    return res.status(404).json({ status: "error", msg: err.message });
  }
};

export { addSupplier, listSupplier, getSupplier, editSupplier, deleteSupplier };
