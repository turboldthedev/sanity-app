"use client";
import { Check } from "lucide-react";
import Image from "next/image";
import { WorkflowSection,} from "@/types/LandingPage";

interface WorkflowProps {
  data: WorkflowSection;
}

export default function Workflow({ data }: WorkflowProps) {
  return (
    <div className="w-full py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-600 text-center mb-12">
          {data.heading}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.columns.map((column, index) => (
            <div
              key={index}
              className="rounded-xl p-8 bg-gray-100">
              <h2 className="text-2xl font-bold text-gray-700 mb-6">
                {column.title}
              </h2>

              <div className="space-y-2 mb-4">
                {column.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-gray-600" />
                    <p className="ml-2 text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={column.image.url || ""}
                  alt={column.image.alt || `Workflow Column ${index + 1}`}
                  width={600}
                  height={350}
                  className="w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
