"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Summer Wedding",
      category: "Wedding",
      image: "/wedding.jpg",
      description:
        "A beautiful outdoor wedding ceremony captured in golden hour light.",
    },
    {
      title: "Family Portrait",
      category: "Portrait",
      image: "/family.jpg",
      description: "Intimate family moments captured in a natural setting.",
    },
    {
      title: "Corporate Event",
      category: "Event",
      image: "/event.jpg",
      description:
        "Professional documentation of a company anniversary celebration.",
    },
    {
      title: "Engagement Session",
      category: "Portrait",
      image: "/engagement.jpg",
      description: "Romantic engagement photos in the city streets.",
    },
    {
      title: "Graduation Ceremony",
      category: "Event",
      image: "/graduated.jpg",
      description: "Capturing the joy and achievement of graduation day.",
    },
    {
      title: "Newborn Photography",
      category: "Portrait",
      image: "/newborn.jpg",
      description: "Tender moments with a newborn baby.",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-neutral-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl rangile md:text-5xl font-bold text-neutral-800 mb-4">
            Projects
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A glimpse into my recent work and creative vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-neutral-900"
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500"></div>
                {/* Category Tag */}
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-white/80 text-neutral-800 text-xs px-3 py-1 rounded-full backdrop-blur-sm"
                  >
                    {project.category}
                  </Badge>
                </div>
                {/* Hover button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-white/90 text-neutral-900 hover:bg-white font-medium"
                    onClick={() => window.location.assign("/Gallery")}
                  >
                    View Gallery
                  </Button>
                </div>
              </div>

              <CardContent className="p-5 bg-neutral-900 text-white">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
