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

  /**
   *User cart
   * @returns
   */

  //  http://localhost:8090

  async getMyCart(useremail) {
    const { data } = await axios.get(
      `${apiUrl}/api/cart/getMyCart/${useremail}`,

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  }

  async removeFromCart(id) {
    const { data } = await axios.delete(
      `${apiUrl}/api/cart/deleteFromCart/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  }

  async placeOrder(cartData) {
    const res = await axios.post(`${apiUrl}/api/order/placeOrder`, cartData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CartService();
