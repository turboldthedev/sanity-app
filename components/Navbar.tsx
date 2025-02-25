import Link from "next/link";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b ">
      <div className=" flex h-16 items-center px-10  justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6">
            <path d="M3 3h18v18H3z" />
            <path d="m15 9-6 6" />
          </svg>
          <span className="font-semibold">Material Bank</span>
        </Link>

        <div className="ml-auto flex items-center space-x-6">
          <Link href="#" className="text-sm font-medium">
            Products
          </Link>
          <Link href="#" className="text-sm font-medium">
            Brands
          </Link>
          <Link href="#" className="text-sm font-medium">
            Boards
          </Link>
          <Link href="#" className="text-sm font-medium">
            Collections
          </Link>
        </div>
      </div>
    </nav>
  );
}
