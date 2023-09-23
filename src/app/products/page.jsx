import Banner from "@/components/products/Banner";
import BestSellers from "@/components/shared/BestSellers";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header/Header";
import { productData } from "@/components/shared/data";
import React from "react";

const page = () => {
  return (
    <>
      {/* Top Container */}
      <div
        style={{
          background:
            "url(./assets/Home/home__banner.jpeg) center center/cover",
        }}
        className="py-10 min-h-screen"
      >
        <Header />
        <Banner />
      </div>

      {/* Bottom Container */}
      <div
        style={{
          background: "url(./assets/Home/news__bg.jpeg) center center/cover",
        }}
        className="py-16 min-h-screen"
      >
        <BestSellers isHome={false} />
      </div>
      <Footer />
    </>
  );
};

export default page;
