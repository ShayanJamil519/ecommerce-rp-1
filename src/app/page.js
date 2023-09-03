import Banner from "@/components/home/Banner";
import News from "@/components/home/News";
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
      </div>
    </div>
  );
}
