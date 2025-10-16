"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Wedding Photography",
      description:
        "Capture your special day with elegant and timeless wedding photography. From intimate ceremonies to grand celebrations.",
      features: [
        "Full Day Coverage",
        "High-Resolution Images",
        "Online Gallery",
      ],
      price: "Starting at $2,500",
      icon: "/weddingicon.png",
    },
    {
      title: "Portrait Sessions",
      description:
        "Professional headshots and personal portraits that showcase your unique personality and style.",
      features: [
        "Studio or Outdoor",
        "Multiple Outfits",
        "Retouching",
        "Print Options",
      ],
      price: "Starting at $150",
      icon: "/portraiticon.png",
    },
    {
      title: "Event Photography",
      description:
        "Document corporate events, parties, and special occasions with professional event photography.",
      features: [
        "Full Event Coverage",
        "Candid Shots",
        "Group Photos",
        "Quick Delivery",
      ],
      price: "Starting at $800",
      icon: "/eventicon.png",
    },
    {
      title: "Family Photography",
      description:
        "Create lasting memories with beautiful family portraits and milestone celebrations.",
      features: [
        "Indoor/Outdoor",
        "Props Available",
        "Multiple Poses",
        "Family Album",
      ],
      price: "Starting at $200",
      icon: "/familyicon.png",
    },
  ];
  const handleContactMe = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-white to-neutral-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl rangile md:text-5xl font-bold text-neutral-800 mb-4">
            Services
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Professional photography services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-0 overflow-hidden bg-white dark:bg-neutral-900 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl"
            >
              {/* Header */}
              <CardHeader className="p-5 border-b border-neutral-100 dark:border-neutral-800">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-4xl relative h-15 w-15 text-neutral-800 dark:text-neutral-100">
                    <Image src={service.icon} fill alt="icon" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium px-3 py-1 text-xs rounded-full"
                  >
                    {service.price}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-semibold text-neutral-900 dark:text-white group-hover:text-neutral-700 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>

              {/* Content */}
              <CardContent className="p-5 space-y-4">
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                  {service.description}
                </p>

                <ul className="space-y-1.5">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-neutral-700 dark:text-neutral-300"
                    >
                      <span className="w-2 h-2 bg-neutral-900 dark:bg-white rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="secondary"
                  className="w-full mt-4 bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-6">
            Need a custom package or have questions?
          </p>
          <Button
            onClick={handleContactMe}
            size="lg"
            variant="outline"
            className="px-8 py-3"
          >
            Get a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
