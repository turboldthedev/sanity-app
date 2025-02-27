import Link from "next/link";
import { Search, Globe, ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full border-b fixed bg-white z-10">
      {/* Top Bar */}
      <div className="mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <svg
              className="w-8 h-8"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8H16V24H8V8Z" fill="#333" />
              <path d="M18 8H24V16H18V8Z" fill="#333" />
              <path d="M18 18H24V24H18V18Z" fill="#333" />
            </svg>
            <span className="text-xl font-medium">Material Bank</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1  mx-8">
            <div className="relative flex-1 flex items-center">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <button className="flex items-center space-x-1 text-gray-500 px-4">
                  <span>All</span>
                  <ChevronDown size={16} />
                </button>
              </div>
              <div className="absolute inset-y-0 left-24 flex items-center">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search materials, products, brands and more"
                className="block w-full pl-36 pr-3 py-2 bg-gray-100 rounded-full border-0 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Globe className="h-5 w-5" />
            </button>
            <Link href="/signin" className="text-gray-600 hover:text-gray-900">
              Sign In
            </Link>
            <Link
              href="/join"
              className="bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
              Join for free
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className=" mx-auto px-4 md:px-6 lg:px-8 flex justify-center ">
        <nav className="flex space-x-8 text-sm">
          <Link
            href="/products"
            className="py-2 text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900">
            Products
          </Link>
          <Link
            href="/brands"
            className="py-2 text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900">
            Brands
          </Link>
          <Link
            href="/boards"
            className="py-2 text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900">
            Boards
          </Link>
          <Link
            href="/collections"
            className="py-2 text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900">
            Collections
          </Link>
        </nav>
      </div>
    </header>
  );
}
