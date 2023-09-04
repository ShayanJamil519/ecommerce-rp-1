import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#231F1F] py-10 px-20 grid grid-cols-3 justify-items-center gap-20 text-[#fff]">
      {/* Left */}
      <div>
        <h1 className="uppercase mb-3 text-xl font-semibold">LOGO</h1>
        <p className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
          perspiciatis quaerat, illum voluptates exercitationem, consequuntur
          sunt architecto, beatae quae aspernatur sequi optio quisquam iure
          iusto soluta natus ad voluptatum ipsam!
        </p>
      </div>
      {/* Middle */}
      <div>
        <h1 className="uppercase mb-3 text-xl font-semibold">Follow Us On</h1>
        <div className="flex justify-start items-center gap-7  text-3xl ">
          <FaFacebookF className="cursor-pointer" />
          <BsTwitter className="cursor-pointer" />
          <FiInstagram className="cursor-pointer" />
        </div>
      </div>
      {/* Right */}
      <div>
        <h1 className="uppercase mb-3 text-xl font-semibold">Contact Us</h1>
        <p className="uppercase mb-1 font-semibold">
          Email:
          <a href="mailto:shayanjamil500@gmail.com" className="lowercase ml-2">
            shayanjamil500@gmail.com
          </a>
        </p>
        <p className="uppercase  font-semibold">
          Phone:{" "}
          <a href="https://wa.me/00112233445566" className="lowercase ml-2">
            00112233445566
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
