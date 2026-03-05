"use client";

import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="w-[220px] bg-[#f0f8ff] p-5 min-h-screen flex flex-col gap-2.5">
            <Link className="w-full px-3 py-3 bg-blue-500 text-white font-bold border-0 rounded-md cursor-pointer transition duration-200 hover:bg-blue-600" href="/postal-offices">
                Offices
            </Link>

            <Link className="w-full px-3 py-3 bg-blue-500 text-white font-bold border-0 rounded-md cursor-pointer transition duration-200 hover:bg-blue-600" href="/packages">
                Packages
            </Link>
        </div>
    );
}