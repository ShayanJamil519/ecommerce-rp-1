import axios from "axios";
import apiUrl from "../utils/baseURL";


class ProductService {
  /**
   * Get all products
   * @returns
   */
  async getAllProducts() {
    const {data} = await axios.get(`${apiUrl}/api/product/getAllProducts`);
    // console.log("dat a")
    // console.log(data)
    return data.product
  }

  
}


// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductService();