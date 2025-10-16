import Navbar from "./Navbar";
import Footer from "@/components/services/Footer";
import Gallery from "./gallery";

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Gallery />
      <Footer />
    </div>
  );
}
