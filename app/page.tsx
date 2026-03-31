import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CollectionHighlights from "@/components/CollectionHighlights";
import NewArrivals from "@/components/NewArrivals";
import BrandStory from "@/components/BrandStory";
import StyledByYou from "@/components/StyledByYou";
import TrustBar from "@/components/TrustBar";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <CollectionHighlights />
      <NewArrivals />
      <BrandStory />
      <StyledByYou />
      <TrustBar />
      <Newsletter />
      <Footer />
    </main>
  );
}
