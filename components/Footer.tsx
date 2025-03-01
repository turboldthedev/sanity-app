"use client";
import Link from "next/link";
import { Globe, Instagram, Linkedin } from "lucide-react";
import { getFooter } from "@/sanity/sanity-utils";
import { Footer as FooterType } from "@/types/Footer"; // Import the Footer type

interface FooterProps {
  data: FooterType;
}

export default async function Footer() {
  const data = await getFooter();
  console.log(data, "footer data");

  return (
    <footer className="w-full py-16 px-4 md:px-6 lg:px-8 bg-white border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Dynamic Columns */}
          {data.columns.map((column) => (
            <div key={column._key} className="space-y-4">
              <h3 className="text-sm font-medium text-gray-500">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link._key}>
                    <Link
                      href={link.url}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Manufacturer Column (Hardcoded for now, can be made dynamic if needed) */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-500">
              Manufacturer? Let's Talk!
            </h3>
            <p className="text-gray-600">
              Get your products in front of thousands of design professionals
              who are actively sourcing materials for their projects
            </p>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
              Join Us
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <p className="text-sm text-gray-500">{data.copyright}</p>
            <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-900">
              <Globe size={16} />
              <span>{data.language}</span>
            </button>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">Instagram</span>
              <Instagram size={20} />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
