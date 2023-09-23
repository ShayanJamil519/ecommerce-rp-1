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
});

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);
export default Cart;
