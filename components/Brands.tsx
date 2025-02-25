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

export default function Brands() {
  return (
    <section className="py-16 md:py-24 flex justify-center flex-col items-center">
      <div className="container px-4 text-center">
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl md:text-6xl">
          Hundreds of leading brands
          <br />
          all in one place.
        </h2>
        <p className="mx-auto mb-16 max-w-3xl text-lg text-gray-600 md:text-xl">
          Material Bank powers complex searches across hundreds of brands
          <br className="hidden md:inline" />
          and thousands of materials in seconds.
        </p>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
            {BRANDS.map((brand, i) => (
              <div
                key={i}
                className="flex items-center justify-center rounded-full bg-gray-300 p-4 transition-colors hover:bg-gray-200">
                <div className="relative h-8 w-32">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
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
        <Image
          alt="brand"
          width={1400}
          height={200}
          className="objext-contain"
          src="https://materialbank-eu-cdn.freetls.fastly.net/media/wysiwyg/homepage/palette_comp_10.webp"
        />
      </div>
    </section>
  );
}
