import axios from "axios";
import apiUrl from "../utils/baseURL";

class CartService {
  /**
   *User adds to cart
   * @returns
   */

  async addToCart(cartData) {
    console.log("Hello");
    const res = await axios.post(`${apiUrl}/api/cart/addCart`, cartData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  }

  
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CartService();
