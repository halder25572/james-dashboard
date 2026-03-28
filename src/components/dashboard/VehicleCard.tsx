"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import clsx from "clsx";
import type { Vehicle } from "@/types";

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative w-full h-56 bg-gray-100">
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          fill
          className="object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://placehold.co/400x200/f3f4f6/9ca3af?text=No+Image";
          }}
        />
        {/* Heart button */}
        <button
          onClick={() => setSaved(!saved)}
          className="absolute cursor-pointer top-3 right-3 w-8 h-8 bg-white rounded-xl shadow flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Heart
            size={16}
            className={clsx(
              "transition-colors",
              saved ? "fill-red-500 text-red-500" : "text-gray-400"
            )}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        {/* Name + Price */}
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-gray-900">{vehicle.name}</h3>
          <span className="text-sm font-bold text-red-500">
            ${vehicle.price.toLocaleString()}
          </span>
        </div>

        {/* Meta */}
        <div className="grid grid-cols-3 gap-2 mt-5">
          {[
            { label: "Mileage", value: `${vehicle.mileage.toLocaleString()} mi` },
            { label: "Condition", value: vehicle.condition },
            { label: "Location", value: vehicle.location },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[10px] text-gray-400">{item.label}</p>
              <p className="text-xs font-semibold text-gray-700 mt-0.5 leading-tight">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto pt-1">
          <button className="flex-1 cursor-pointer py-2 rounded-xl border border-red-400 text-red-500 text-xs font-semibold transition-colors">
            Save Vehicle
          </button>
          <button className="flex-1 py-2 cursor-pointer rounded-xl bg-[#D93E39] text-white text-xs font-semibold transition-colors">
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
}