import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  useremail: {
    type: String,
    required: [true, "Please enter an email"],
  },
  productId: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    required: true,
  },
  amount: {
    type: Number,
    required: [true, "Please enter product amount"],
  },
  color: {
    type: Number,
    required: [true, "Please enter color"],
  },
  size: {
    type: Number,
    required: [true, "Please enter size"],
  },
  gender: {
    type: Number,
    required: [true, "Please enter gender "],
  },
});

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);
export default Cart;
