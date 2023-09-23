import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import ProductService from "../services/product-service"


const useAllProducts = () => {
//   return useQuery(["product"], ProductService.getAllProducts());
    return useQuery({  queryKey: ['product'],  queryFn: () => ProductService.getAllProducts()
  })
};


// useQuery({ queryKey: ['todos'], queryFn: fetchAllTodos })
// useQuery({ queryKey: ['todos', todoId], queryFn: () => fetchTodoById(todoId) })




export { useAllProducts };
