import Signup from "@/components/auth/Signup";


const page = () => {
  return (
    <div
      style={{
        background: "url(./assets/Shared/login__bg.jpg) center center/cover",
      }}
      className="min-h-screen grid grid-cols-2 justify-items-center place-items-center"
    >

      <Signup />
     

      {/* Right */}
      <div className="flex justify-end px-10">
        <div className="w-2/4 ">
          <h1 className="text-4xl font-bold uppercase mb-5 text-[#fff] ">
            Welcome <br /> Back!
          </h1>
          <p className="text-[#fff]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            accusantium ducimus eligendi possimus, praesentium dolorem maxime
            dicta dolore quo soluta provident quisquam impedit amet! Dicta quod
            iste beatae ea assumenda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
