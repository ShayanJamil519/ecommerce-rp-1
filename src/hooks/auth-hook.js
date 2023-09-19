import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import AuthService from "../services/auth-service";





const useUserSignup = (userData) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return AuthService.signUpUser(userData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("signup");
      },
    }
  );
};




export {
  useUserSignup,
};