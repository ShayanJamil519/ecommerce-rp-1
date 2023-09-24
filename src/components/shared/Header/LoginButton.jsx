"use client";

import { useRouter } from "next/navigation";
import { CgProfile } from "react-icons/cg";

const LoginButton = () => {
  const router = useRouter();
  return (
    <>
      <CgProfile
        className="cursor-pointer text-[30px] lg:text-2xl"
        onClick={() => router.push("/login")}
      />
    </>
  );
};

export default LoginButton;
