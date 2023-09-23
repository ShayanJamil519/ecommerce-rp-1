import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header/Header";
import ProductDetails from "@/components/product-details";

const page = ({params}) => {
  return (
    <div
      style={{
        background: "url(./assets/Home/news__bg.jpeg) center center/cover",
      }}
      className="pt-10 min-h-screen "
    >
      <Header />

      <ProductDetails productId={params.id} />

      <Footer />
    </div>
  );
};

export default page;
