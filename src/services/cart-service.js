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

  async getMyCart(email) {
    const {data} = await axios.get(`${apiUrl}/api/cart/getMyCart/${email}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("data ")
    console.log(data)
    return data;
  }

  
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CartService();
