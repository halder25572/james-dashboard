"use client";

import Image from "next/image";

export default function Header({ title = "Dashboard" }: { title?: string }) {

  return (
    <header className="flex items-center justify-between">
      <h2 className="text-xl font-semibold text-gray-800 ml-10 lg:ml-0">
        {title}
      </h2>

      <div className="flex items-center gap-3 py-2.25">
        <div className="flex items-center gap-4 px-6">
          {/* Bell Icon */}
          <div className="shrink-0 w-12 h-12 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-9-5.197V8.5m.002 3.5L12 15l-1.998-3"
              />
            </svg>
          </div>

          {/* Text Content */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
              Shaun Marphy
            </h2>
            <p className="text-gray-500 text-lg font-medium -mt-1">
              Dealer
            </p>
          </div>

          {/* Profile Picture */}
          <div className="shrink-0 ml-auto">
            <div className="w-14 h-14 overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Shaun Marphy"
                width={56}
                height={56}
                className="object-cover rounded-full"
                priority // optional: good for above-the-fold images
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}