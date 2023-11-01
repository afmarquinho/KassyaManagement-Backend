import mongoose from "mongoose";

const supplierSchema = mongoose.Schema(
  {
    businessName: {
      type: String,
      trim: true,
      require: true,
      unique: true,
    },
    nif: {
      type: String,
      trim: true,
      require: true,
      unique: true,
    },
    category: {
      type: String,
      trim: true,
      require: true,
      enum: [
        "Tecnología y software",
        "Suministros de oficina",
        "Serviciio de limpieza",
        "Servicois logísticos",
        "Proveedores de alimentos y bebidas",
        "Servicios de mantenimiento",
        "Servicios de consultoría",
        "Proveedores de servicios públicos",
        " Gestión humana y contrataciones",
        "Marketing y publicidad",
      ],
    },
    entity: {
      type: String,
      trim: true,
      require: true,
      enum: ["legal", "natural"],
    },
    country: {
      type: String,
      trim: true,
      require: true,
    },
    city: {
      type: String,
      trim: true,
      require: true,
    },
    address: {
      type: String,
      trim: true,
      require: true,
    },
    zipCode: {
      type: String,
      trim: true,
      require: true,
    },
    tel: {
      type: Number,
      trim: true,
      require: true,
      unique: true,
    },

    webSite: {
      type: String,
      trim: true,
      require: true,
      unique: true,
    },
    bank: {
      type: String,
      trim: true,
      require: true,
    },

    bankingAccount: {
      type: String,
      trim: true,
      require: true,
      unique: true,
    },
    paymentTerms: {
      type: Number,
      trim: true,
      require: true,
    },
    contactName: {
      type: String,
      trim: true,
      require: true,
    },
    contactNumber: {
      type: Number,
      trim: true,
      require: true,
    },
    contactEmail: {
      type: String,
      trim: true,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
const Supplier = mongoose.model("Supplier", supplierSchema);
export default Supplier;
