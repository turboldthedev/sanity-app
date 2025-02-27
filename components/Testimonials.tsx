"use client";
import { TestimonialsSection } from "@/types/LandingPage";
import Image from "next/image";
interface TestimonialsProps {
  data: TestimonialsSection;
}

export default function Testimonials({ data }: TestimonialsProps) {
  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-600 sm:text-5xl md:text-6xl">
            {data.heading}
          </h2>
          <p className="mx-auto mb-16 max-w-3xl text-lg text-gray-600 md:text-xl mt-10">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.testimonials.map((testimonial) => (
            <div
              key={testimonial._key}
              className="bg-gray-100 rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="w-20 h-20 relative mb-4">
                <Image
                  src={testimonial.image.url || "/placeholder.svg"}
                  alt={testimonial.image.alt || testimonial.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-gray-700 font-medium text-md mb-1">
                {testimonial.name}
              </h3>
              <p className="text-gray-500 text-sm mb-6">{testimonial.title}</p>
              <blockquote className="text-gray-600 text-xl leading-0.1 font-bold">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
