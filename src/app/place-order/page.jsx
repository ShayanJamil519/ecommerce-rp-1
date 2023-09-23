import PlaceOrder from "@/components/place-order/PlaceOrder";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header/Header";

const page = () => {
  return (
    <div
      style={{
        background: "url(./assets/Home/news__bg.jpeg) center center/cover",
      }}
      className="pt-10 min-h-screen "
    >
      <Header />

      <PlaceOrder />

      <Footer />
    </div>
  );
};

export default page;
