import Cart from "@/components/cart/Cart";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header/Header";

const page = () => {
  return (
    <div
      style={{
        background: "url(./assets/Home/news__bg.jpeg) center center/cover",
      }}
      className="lg:pt-10 min-h-screen "
    >
      <Header />

      <Cart />

      <Footer />
    </div>
  );
};

export default page;
