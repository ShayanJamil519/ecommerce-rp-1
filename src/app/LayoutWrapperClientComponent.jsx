"use client";

import { useState } from "react";
import { StateProvider } from "../Context/StateContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { StateProvider } from "@/Context/StateContext";

// To solve this deployment error we need to use this wrapper
// You are attempting to export "metadata" from a component marked with "use client", which is disallowed. Either remove the export, or the "use client" directive. Read more: https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive

export default function LayoutWrapperClientComponent({ children }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <StateProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </StateProvider>
    </>
  );
}
