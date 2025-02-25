"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroProps {
  data: {
    heading: string;
    subheading: string;
    backgroundImage: {
      asset: {
        _ref: string;
      };
    };
  };
}

export default function Hero({ data }: HeroProps) {
  console.log(data);
  return (
    <section className="py-16 flex justify-center">
      <div className="container px-4 py-8 rounded-lg text-center flex flex-col items-center justify-center bg-[#97A2C2]">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
          {data.heading}
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white">
          {data.subheading}
        </p>
        <div className="mb-12 flex justify-center gap-4">
          <Button
            variant="secondary"
            size="lg"
            className="bg-white hover:bg-white/90">
            Join for free
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="bg-white hover:bg-white/90">
            Become a Brand Partner
          </Button>
        </div>
        <div className="mx-auto max-w-4xl">
          {/* <Image
            src={data.backgroundImage.asset._ref} // Dynamically load image
            alt="Hero Background"
            width={600}
            height={100}
            className="rounded-lg"
          /> */}
        </div>
      </div>
    </section>
  );
}
