import Banner from "@/components/home/Banner";
import News from "@/components/home/News";
import NewsLetter from "@/components/home/NewsLetter";
import BestSellers from "@/components/shared/BestSellers";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header/Header";
import { productData } from "@/components/shared/data";

export default function Home() {
  return (
    <div>
      {/* Top Container */}
      <div
        style={{
          background: "url(./assets/Home/home__banner.jpeg) center center/cover",
        }}
        className="pt-0 lg:py-10 min-h-screen"
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
        <News />
        <BestSellers productData={productData.slice(0, 3)} isHome={true} />
        <NewsLetter />
      </div>
          <Footer />
    </div>
  );
}
