import Brands from "@/components/Brands";
import StreamlineDesign from "@/components/Design";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Workflow from "@/components/WorkFlow";
import { getLandingPage } from "@/sanity/sanity-utils";

export default async function Home() {
  const landingPage = await getLandingPage();

  return (
    <div className="min-h-screen">
      <main className="pt-28">
        {landingPage.pageSections.map((section) => {
          switch (section._type) {
            case "heroSection":
              return <Hero key={section._key} data={section} />;
            case "featureSection":
              return <Features key={section._key} data={section} />;
            case "brandSection":
              return <Brands key={section._key} data={section} />;
            case "workflowSection":
              return <Workflow key={section._key} data={section} />;
            case "designSection":
              return <StreamlineDesign key={section._key} data={section} />;
            case "testimonialsSection":
              return <Testimonials key={section._key} data={section} />;
            default:
              return null; // Handle unexpected section types
          }
        })}
      </main>
    </div>
  );
}
