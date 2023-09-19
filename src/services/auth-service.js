import axios from "axios";
import apiUrl from "../utils/baseURL";

class AuthService {
    
  /**
   *User Signup 
   * @returns
   */

  async signUpUser(userData) {
    console.log(userData)
    console.log(apiUrl)
    const res = await axios.post(`${apiUrl}/api/auth/signup`, userData, {   headers: {
          'Content-Type': 'application/json',
        },  });
    return res;
  }

 


}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();