import Header1 from "@/components/headers/Header1";
import Footer1 from "@/components/footers/Footer1";
import About from "@/components/contact/About";

export const metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <Header1 />
      <About />
      <Footer1 />
    </>
  );
}