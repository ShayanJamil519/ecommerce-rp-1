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

const useUserGetMyCart = (useremail) => {
  return useQuery(["cart/getMyCart", useremail], () =>
    CartService.getMyCart(useremail)
  );
};

export { useUserAddToCart, useUserGetMyCart };
