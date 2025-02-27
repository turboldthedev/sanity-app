import { BrandSection } from "@/types/LandingPage";
import Image from "next/image";

const BRANDS = [
  // Row 1
  {
    name: "Wolf Gordon",
    logo: "https://materialbank-eu-cdn.freetls.fastly.net/media/wysiwyg/homepage/logos/wg.png",
  },
  {
    name: "3form",
    logo: "https://materialbank-eu-cdn.freetls.fastly.net/media/wysiwyg/homepage/logos/3form.png",
  },
  {
    name: "Ann Sacks",
    logo: "https://materialbank-eu-cdn.freetls.fastly.net/media/wysiwyg/homepage/logos/lebatex.png",
  },
  {
    name: "Momentum",
    logo: "https://materialbank-eu-cdn.freetls.fastly.net/media/wysiwyg/homepage/logos/carnegie.png",
  },
  {
    name: "Stinson",
    logo: "https://materialbank-eu-cdn.freetls.fastly.net/media/wysiwyg/homepage/logos/caesar_stone.png",
  },
  {
    name: "Caesarstone",
    logo: "https://materialbank-eu-cdn.freetls.fastly.net/media/wysiwyg/homepage/logos/tilebar.png",
  },
  {
    name: "Carnegie",
    logo: "https://materialbank-eu-cdn.freetls.fastly.net/media/wysiwyg/homepage/logos/benjamin_moore.png",
  },
  // Row 2
  {
    name: "Wolf Gordon",
    logo: "https://materialbank-eu-cdn.freetls.fastly.net/media/wysiwyg/homepage/logos/wg.png",
  },
  {
    name: "3form",
    logo: "https://materialbank-eu-cdn.freetls.fastly.net/media/wysiwyg/homepage/logos/3form.png",
  },
  {
    name: "Ann Sacks",
    logo: "https://materialbank-eu-cdn.freetls.fastly.net/media/wysiwyg/homepage/logos/lebatex.png",
  },
  {
    name: "Momentum",
    logo: "https://materialbank-eu-cdn.freetls.fastly.net/media/wysiwyg/homepage/logos/carnegie.png",
  },
  {
    name: "Stinson",
    logo: "https://materialbank-eu-cdn.freetls.fastly.net/media/wysiwyg/homepage/logos/caesar_stone.png",
  },
  {
    name: "Caesarstone",
    logo: "https://materialbank-eu-cdn.freetls.fastly.net/media/wysiwyg/homepage/logos/tilebar.png",
  },
  {
    name: "Carnegie",
    logo: "https://materialbank-eu-cdn.freetls.fastly.net/media/wysiwyg/homepage/logos/benjamin_moore.png",
  },
  // Row 3
  {
    name: "Wolf Gordon",
    logo: "https://materialbank-eu-cdn.freetls.fastly.net/media/wysiwyg/homepage/logos/wg.png",
  },
  {
    name: "3form",
    logo: "https://materialbank-eu-cdn.freetls.fastly.net/media/wysiwyg/homepage/logos/3form.png",
  },
  {
    name: "Ann Sacks",
    logo: "https://materialbank-eu-cdn.freetls.fastly.net/media/wysiwyg/homepage/logos/lebatex.png",
  },
  {
    name: "Momentum",
    logo: "https://materialbank-eu-cdn.freetls.fastly.net/media/wysiwyg/homepage/logos/carnegie.png",
  },
  {
    name: "Stinson",
    logo: "https://materialbank-eu-cdn.freetls.fastly.net/media/wysiwyg/homepage/logos/caesar_stone.png",
  },
  {
    name: "Caesarstone",
    logo: "https://materialbank-eu-cdn.freetls.fastly.net/media/wysiwyg/homepage/logos/tilebar.png",
  },
  {
    name: "Carnegie",
    logo: "https://materialbank-eu-cdn.freetls.fastly.net/media/wysiwyg/homepage/logos/benjamin_moore.png",
  },
];
interface BrandSectionProps {
  data: BrandSection;
}

export default function Brands({ data }: BrandSectionProps) {
  console.log(data, "brand");
  return (
    <section className="py-16 md:py-24 flex justify-center flex-col items-center">
      <div className="container px-4 text-center">
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-600 sm:text-5xl md:text-6xl">
          {data.heading}
        </h2>
        <p className="mx-auto mb-16 max-w-3xl text-lg text-gray-600 md:text-xl">
          {data.subheading}
        </p>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
            {data.brands.map((brand, i) => (
              <div
                key={i}
                className="flex items-center justify-center rounded-full bg-gray-300 p-4 transition-colors hover:bg-gray-200">
                <div className="relative h-8 w-32">
                  <Image
                    src={brand.image.url || "/placeholder.svg"}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain opacity-70"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        {data.coverImage?.url && (
          <Image
            alt="brand"
            width={1250}
            height={200}
            className="objext-contain"
            src={data.coverImage.url}
          />
        )}
      </div>
    </section>
  );
}
