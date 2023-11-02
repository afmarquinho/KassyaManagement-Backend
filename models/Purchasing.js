import mongoose, { Schema } from "mongoose";

const purchasingSchema = mongoose.Schema(
  {
    orderNumber: {
      type: String,
      trim: true,
      require: true,
    },
    items: [
      {
        name: {
          type: String,
          trim: true,
          require: true,
        },
        ref: {
          type: String,
          trim: true,
          require: true,
        },
        supplier: {
          type: String,
          trim: true,
          require: true,
        },
        anount: {
          type: Number,
          trim: true,
          require: true,
        },
        unit: {
          type: String,
          trim: true,
          require: true,
          enum: ["Unidad", "Gramos", "Litros", "Kilogramos"],
        },
        unitCost: {
          type: Number,
          trim: true,
          require: true,
        },
      },
    ],
    status: {
      type: String,
      trim: true,
      require: true,
      enum: [
        "Creada",
        "Rechazada",
        "Aprobada",
        "En pago",
        "Confirmada",
        "En bodega",
      ],
    },

    department: {
      type: String,
      trim: true,
      require: true,
    },
    paymentMethod: {
      type: String,
      trim: true,
      require: true,
      enum: ["Efectivo", "Transferencia", "Consignación"],
    },
    comments: {
      type: String,
      trim: true,
      require: true,
    },
  },
  { timestamps: true }
);

const Purchasing = mongoose.model("Purchasing", purchasingSchema);
export default Purchasing;
