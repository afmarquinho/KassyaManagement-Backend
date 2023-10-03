import mongoose from "mongoose";

const inventorySchema = mongoose.Schema(
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
    amount: {
      type: Number,
      trim: true,
      require: true,
    },
    unit: {
      type: String,
      trim: true,
      require: true,
    },

    unitPrice: {
      type: Number,
      trim: true,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
const Inventory = mongoose.model("Inventory", inventorySchema);
export default Inventory;
