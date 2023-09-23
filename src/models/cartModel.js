import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  useremail: {
    type: String,
  },
  productId: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: [true, "Please enter product quantity"],
  },
  color: {
    type: String,
    required: [true, "Please enter color"],
  },
  size: {
    type: String,
    required: [true, "Please enter size"],
  },
  gender: {
    type: String,
    required: [true, "Please enter gender "],
  },
});

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);
export default Cart;
