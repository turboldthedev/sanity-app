import Brands from "@/components/Brands";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { getLandingPage } from "@/sanity/sanity-utils";

Brands;
export default async function Home() {
  const landingPage = await getLandingPage();
  console.log(landingPage);
  const heroData = landingPage.pageSections.find(
    (section) => section._type === "heroSection"
  );
  const featureData = landingPage.pageSections.find(
    (section) => section._type === "featureSection"
  );
  const brandData = landingPage.pageSections.find(
    (section) => section._type === "brandSection"
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {heroData && <Hero data={heroData} />}
        {featureData && <Features data={featureData} />}
        {brandData && <Brands data={brandData} />}
      </main>
    </div>
  );
}
