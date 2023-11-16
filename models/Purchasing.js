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
          type: Schema.Types.ObjectId,
          ref: "Supplier",
        },
        amount: {
          type: Number,
          trim: true,
          require: true,
        },
        unit: {
          type: String,
          trim: true,
          require: true,
          enum: ["uni", "g", "l", "k"],
        },
        unitCost: {
          type: Number,
          trim: true,
          require: true,
        },
        department: {
          type: String,
          trim: true,
          require: true,
          enum: [
            "Gestión Humana",
            "Postventas",
            "Comercial",
            "Administración",
            "Calidad",
            "Logística",
            "Producción",
          ],
        },
        subTotal: {
          type: Number,
          trim: true,
          require: true,
        },

        localization: {
            type: String,
            trim: true,
            require: true,
            enum: ["En espera", "En bodega"],
            default: "En espera",
          },
          checked: {
            type: String,
            trim: true,
            require: true,
            enum: ["Yes", "No"],
            default: "No",
          },
          itemComments: {
            type: String,
            trim: true,
            require: false,
            default: "",
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
        "Orden Enviada",
        "En espera",
        "Finalizada",
      ],
    },
    total: {
      type: Number,
      trim: true,
      require: true,
    },
    paymentMethod: {
      type: String,
      trim: true,
      require: true,
      enum: ["Efectivo", "Transferencia", "Consignación", "Cheque"],
    },

    comments: {
      type: String,
      trim: true,
      require: true,
    },
    moreComments: {
      type: String,
      trim: true,
      require: false,
      default: "",
    },
  },
  { timestamps: true }
);

const Purchasing = mongoose.model("Purchasing", purchasingSchema);
export default Purchasing;
