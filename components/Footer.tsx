import Link from "next/link";
import { Globe, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-4 md:px-6 lg:px-8 bg-white border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Explore Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-500">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Brands
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Boards
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-500">About</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-500">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  FAQ's
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Privacy and Legal Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Manufacturer Column */}
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
            <p className="text-sm text-gray-500">
              © 2024 Material Bank. All rights reserved.
            </p>
            <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-900">
              <Globe size={16} />
              <span>English</span>
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
