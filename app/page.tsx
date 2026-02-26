import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import ProductShowcase from "@/app/components/ProductShowcase";
import HowItWorks from "@/app/components/HowItWorks";
import ValueProposition from "@/app/components/ValueProposition";
import Footer from "@/app/components/Footer";
const Home = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ProductShowcase />
        <HowItWorks />
        <ValueProposition />
      </main>
      <Footer />
    </div>
  );
};
export default Home;
