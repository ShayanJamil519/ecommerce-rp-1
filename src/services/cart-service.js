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
      // `${apiUrl}/api/cart/getMyCart/${useremail}`,
      `http://localhost:8090/api/cart/getMyCart/${useremail}`,

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("cart api data: ");
    console.log(data);
    return data;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CartService();
