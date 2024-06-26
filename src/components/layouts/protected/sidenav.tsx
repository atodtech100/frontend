"use client";

import { RouteConstants } from "@src/constants";
import { usePathname } from "next/navigation";
import { ChartPieIcon } from "@heroicons/react/24/outline";
import { useUIStore } from "@src/store";
import Link from "next/link";

const MenuItems = [
  {
    text: "Dashboard",
    icon: ChartPieIcon,
    path: RouteConstants.DASHBOARD
  }
  // MORE MENU ITEMS
];

export function Sidenav() {
  const pathname = usePathname();

  const { sidebarOpen, openSidebar } = useUIStore();

  return (
    <>
      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden`}
        onClick={() => openSidebar(false)}
      ></div>

      <div
        className={`${
          sidebarOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
        } fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-200 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-center mt-8">
          <div className="flex items-center">
            <svg
              className="w-12 h-12"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
                fill="#8c6b42"
                stroke="#8c6b42"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
                fill="white"
              />
            </svg>

            <span className="mx-2 text-2xl font-semibold text-white">
              X Project
            </span>
          </div>
        </div>

        <nav className="mt-10">
          {MenuItems.map((item, i) => {
            const LinkIcon = item.icon;
            return (
              <Link
                aria-selected={pathname.startsWith(item.path)}
                className={`flex items-center px-6 py-2 mt-4 text-gray-500 aria-selected:bg-gray-700 aria-selected:bg-opacity-25 aria-selected:text-gray-100 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100`}
                href={item.path}
                key={i}
                // WORKS FOR SMALL SCREENS ONLY
                onClick={() => openSidebar(false)}
              >
                <LinkIcon className="w-6 h-6" />
                <span className="mx-3">{item.text}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
