import Banner from "@/components/products/Banner";
import ProductQuality from "@/components/products/ProductQuality";
import BestSellers from "@/components/shared/BestSellers";
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
        <BestSellers productData={productData.slice(0, 3)} isHome={false} />
        <ProductQuality />
        <BestSellers productData={productData.slice(3)} isHome={false} />
      </div>
    </>
  );
};

export default page;
