import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Features() {
  return (
    <section className="py-16 flex justify-center">
      <div className=" px-4 ">
        <div className="grid gap-2 md:grid-cols-2">
          <div className="rounded-xl bg-gray-200 p-8">
            <h2 className="mb-6 text-2xl font-bold">
              For architects and interior designers
            </h2>
            <ul className="mb-6 space-y-3">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-gray-600" />
                <span>Hundreds of leading brands</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-gray-600" />
                <span>One site</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-gray-600" />
                <span>Order by midnight</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-gray-600" />
                <span>Everything in one box by 10:30 a.m.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-gray-600" />
                <span>Free for architects and designers</span>
              </li>
            </ul>
            <Button variant="outline">Join for free</Button>
          </div>
          <div className="rounded-xl bg-gray-200 p-8">
            <h2 className="mb-6 text-2xl font-bold">For manufacturers</h2>
            <ul className="mb-6 space-y-3">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-gray-600" />
                <span>Thousands of new specifiers every month</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-gray-600" />
                <span>Leads on-demand</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-gray-600" />
                <span>Ultra-fast sample logistics</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-gray-600" />
                <span>Sample reclamation</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-gray-600" />
                <span>Strong ROI and massive brand awareness</span>
              </li>
            </ul>
            <Button variant="outline">Become a Brand Partner</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
