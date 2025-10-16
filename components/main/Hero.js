"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Hero() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleViewPortfolio = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactMe = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.avif"
          alt="Photography background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center space-y-8 px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="space-y-4">
          <div
            className={`text-6xl md:text-8xl lg:text-9xl reverie text-white leading-none drop-shadow-2xl transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Jassica
          </div>
          <div
            className={`text-4xl md:text-6xl lg:text-7xl brittany-signature text-white drop-shadow-xl transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Photography
          </div>
        </div>

        <p
          className={`text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Capturing life's precious moments with passion and artistry.
          Professional photography services for weddings, portraits, and events.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center pt-4 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            size="lg"
            variant="default"
            className="text-lg px-10 py-4 bg-white text-black hover:bg-white/90 shadow-2xl transition-all duration-300 hover:scale-105"
            onClick={handleViewPortfolio}
          >
            View Projects
          </Button>
          <Button
            variant="default"
            size="lg"
            className="text-lg px-10 py-4 border-white text-white hover:bg-white hover:text-black shadow-2xl transition-all duration-300 hover:scale-105"
            onClick={handleContactMe}
          >
            Contact Me
          </Button>
        </div>

        {/* Scroll indicator */}
      </div>
    </section>
  );
}
