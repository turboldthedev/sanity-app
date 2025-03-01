import { DesignSection } from "@/types/LandingPage";

interface DesignProps {
  data: DesignSection;
}

export default function StreamlineDesign({ data }: DesignProps) {
  return (
    <section className="py-16 md:py-24 flex justify-center flex-col items-center">
      <div className="container px-4 text-center">
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-600 sm:text-5xl md:text-6xl">
          {data.heading}
        </h2>

        <div className="flex justify-center mt-6">
          <video
            src={data.video.url || ""}
            className="w-full max-w-7xl max-h-xl rounded-lg shadow-md "
            autoPlay // Autoplay the video
            loop // Loop the video infinitely
            muted // Required for autoplay in most browsers (no sound)
            playsInline
          />
        </div>
      </div>
    </section>
  );
}
