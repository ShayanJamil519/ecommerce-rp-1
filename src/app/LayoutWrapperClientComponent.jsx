"use client";

import { StateProvider } from "../Context/StateContext";

// import { StateProvider } from "@/Context/StateContext";

// To solve this deployment error we need to use this wrapper
// You are attempting to export "metadata" from a component marked with "use client", which is disallowed. Either remove the export, or the "use client" directive. Read more: https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive

export default function LayoutWrapperClientComponent({ children }) {
  return (
    <>
      <StateProvider>{children}</StateProvider>
    </>
  );
}
