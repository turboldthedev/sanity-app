"use client";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/types/LandingPage";
import Image from "next/image";

interface HeroProps {
  data: HeroSection;
}

export default function Hero({ data }: HeroProps) {
  // console.log(data);

  return (
    <section className="py-10  flex justify-center">
      <div
        className="container px-4 py-8 rounded-lg text-center flex flex-col items-center justify-center"
        style={{ backgroundColor: data.backgroundColor || "#97A2C2" }}>
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
          {data.heading}
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white">
          {data.subheading}
        </p>
        <div className="mb-12 flex justify-center gap-4">
          {data.buttons?.map((button) => (
            <Button
              key={button._key}
              variant={button.variant || "secondary"} // Default to "secondary" if no variant
              size="lg"
              className="bg-white hover:bg-white/90 text-black"
              asChild>
              <a href={button.url || "#"}>{button.label}</a>
            </Button>
          ))}
        </div>
        <div className="mx-auto max-w-4xl">
          <Image
            src={data.backgroundImage.url || ""} // Fallback for safety
            alt={data.backgroundImage?.alt || "Hero Background"}
            width={600}
            height={100}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}