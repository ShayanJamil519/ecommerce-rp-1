import Banner from "@/components/home/Banner";
import BestSellers from "@/components/home/BestSellers";
import News from "@/components/home/News";
import NewsLetter from "@/components/home/NewsLetter";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <div>
      {/* Top Container */}
      <div
        style={{
          background: "url(./assets/Home/home__banner.jpeg) center center/cover",
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
        <News />
        <BestSellers />
        <NewsLetter />
      </div>
          <Footer />
    </div>
  );
}
