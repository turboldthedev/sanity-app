"use client";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureSection } from "@/types/LandingPage";

interface FeaturesProps {
  data: FeatureSection; // Single FeatureSection object, not an array
}

export default function Features({ data }: FeaturesProps) {
  // console.log(data);

  const features = data.features.map((feature) =>
    feature.description.split("\n").filter((item) => item.trim() !== "")
  );

  return (
    <section className="py-12">
      <div className="px-4 flex justify-center ">
        <div className="grid gap-14 md:grid-cols-2">
          {data.features.map((feature, index) => (
            <div key={feature._key} className="rounded-xl bg-gray-100 p-8">
              <h2 className="mb-6 text-2xl font-bold opacity-70">
                {feature.title}
              </h2>
              <ul className="mb-2 space-y-2">
                {features[index].map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center gap-2 opacity-80 text-sm">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {/* Render the button for each feature */}
              {feature.buttons?.map((button) => (
                <Button
                  key={button._key}
                  variant="outline"
                  className="mt-4 rounded-full">
                  <a href={button.url || "#"}>{button.label}</a>
                </Button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
