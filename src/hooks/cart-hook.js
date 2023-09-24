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

// const useUserRemoveFromCart = (id) => {
//   const queryClient = useQueryClient();
//   return useMutation(
//     () => {
//       return CartService.removeFromCart(id);
//     },
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries("cart");
//       },
//     }
//   );
// };

const useUserRemoveFromCart = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id) => CartService.removeFromCart(id), // Function to delete item from cart
    {
      onSuccess: () => {
        // Invalidate and refetch something when the mutation is successful
        queryClient.invalidateQueries("cart");
      },
    }
  );
};

export { useUserAddToCart, useUserGetMyCart, useUserRemoveFromCart };
