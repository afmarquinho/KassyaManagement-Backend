import mongoose, { Schema } from "mongoose";


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
      unique: true,
    },
    supplier: {
      type: Schema.Types.ObjectId, 
    ref: 'Supplier'     
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
