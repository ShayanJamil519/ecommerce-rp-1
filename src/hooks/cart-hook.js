import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import CartService from "../services/cart-service";

const useUserAddToCart = (cartData) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return CartService.addToCart(cartData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("cart");
      },
    }
  );
};




export {useUserAddToCart  };
