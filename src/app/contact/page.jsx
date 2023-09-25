import Contact from "@/components/contact/Contact";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header/Header";

const page = () => {
  return (
    <div
      style={{
        background: "url(./assets/Home/news__bg.jpeg) center center/cover",
      }}
      className="pt-0 lg:pt-10 min-h-screen"
    >
      <Header />
      {/* Form */}

      <Contact />

      <Footer />
    </div>
  );
};

export default page;
