"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import type { Vehicle } from "@/types";
import { useVehicleStore } from "@/store/useVehicleStore";
import clsx from "clsx";

export default function VehicleDetailClient({ vehicle }: { vehicle: Vehicle }) {
  const router = useRouter();
  const { isSaved, saveVehicle, unsaveVehicle } = useVehicleStore();
  const saved = isSaved(vehicle.id);
  const [selectedImg, setSelectedImg] = useState(0);
  const [bidAmount, setBidAmount] = useState("");

  const images = vehicle.images ?? [vehicle.image];

  const toggleSave = () =>
    saved ? unsaveVehicle(vehicle.id) : saveVehicle(vehicle);

  return (
    <div>
      {/* Back */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 mb-4 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Vehicles
      </button>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* LEFT */}
        <div className="flex-1 space-y-4">
          {/* Main Image */}
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src={images[selectedImg]}
              alt={vehicle.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImg(i)}
                className={clsx(
                  "relative w-20 h-16 rounded-xl overflow-hidden border-2 transition-all",
                  selectedImg === i ? "border-red-500" : "border-transparent"
                )}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>

          {/* Info Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
            <div>
              <h1 className="text-xl font-bold text-gray-900">{vehicle.name}</h1>
              <p className="text-2xl font-bold text-red-500 mt-1">
                ${vehicle.price.toLocaleString()}
              </p>
            </div>

            {/* Mileage / Condition / Location */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Mileage", value: `${vehicle.mileage.toLocaleString()} mi` },
                { label: "Condition", value: vehicle.condition },
                { label: "Location", value: vehicle.location },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-gray-50 rounded-xl px-3 py-2.5"
                >
                  <p className="text-[10px] text-gray-400">{item.label}</p>
                  <p className="text-sm font-semibold text-gray-700 mt-0.5">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Description */}
            {vehicle.description && (
              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-1.5">
                  Description
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {vehicle.description}
                </p>
              </div>
            )}

            {/* Features */}
            {vehicle.features && (
              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-2">
                  Features
                </h3>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                  {vehicle.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-red-400 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Specifications */}
          {vehicle.specs && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="text-sm font-bold text-gray-800 mb-4">
                Specifications
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "Year", value: vehicle.specs.year },
                  { label: "Make", value: vehicle.specs.make },
                  { label: "Model", value: vehicle.specs.model },
                  { label: "Trim", value: vehicle.specs.trim },
                  { label: "Fuel Type", value: vehicle.specs.fuelType },
                  { label: "Transmission", value: vehicle.specs.transmission },
                  { label: "Drivetrain", value: vehicle.specs.drivetrain },
                  { label: "Exterior Color", value: vehicle.specs.exteriorColor },
                ].map((spec) => (
                  <div key={spec.label} className="bg-gray-50 rounded-xl px-3 py-2.5">
                    <p className="text-[10px] text-gray-400">{spec.label}</p>
                    <p className="text-sm font-semibold text-gray-700 mt-0.5">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT — Bid Panel */}
        <div className="w-full lg:w-72 flex-shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sticky top-6 space-y-4">
            <div>
              <h2 className="text-lg font-bold text-red-500">Place Your Bid</h2>
              <p className="text-sm font-semibold text-gray-800 mt-0.5">
                {vehicle.name}
              </p>
            </div>

            {/* Bid Input */}
            <div>
              <label className="text-xs text-gray-500 mb-1.5 block">
                Bid Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                  $
                </span>
                <input
                  type="number"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  placeholder=""
                  className="w-full border border-gray-200 rounded-xl pl-7 pr-3 py-2.5 text-sm text-gray-800 outline-none focus:border-red-400 transition-colors"
                />
              </div>
            </div>

            {/* Quick Add */}
            <div className="flex gap-2">
              {[500, 1000, 2000].map((amt) => (
                <button
                  key={amt}
                  onClick={() =>
                    setBidAmount((prev) =>
                      String((parseInt(prev || "0") + amt))
                    )
                  }
                  className="flex-1 py-2 rounded-xl border border-gray-200 text-xs font-semibold text-gray-600 hover:border-red-300 hover:text-red-500 transition-colors"
                >
                  +${amt >= 1000 ? `${amt / 1000},000` : amt}
                </button>
              ))}
            </div>

            {/* Estimated / High Bid */}
            <div className="bg-gray-50 rounded-xl p-3 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Estimated Value</span>
                <span className="font-semibold text-gray-800">
                  ${vehicle.estimatedValue?.toLocaleString() ?? "—"}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Current High Bid</span>
                <span className="font-bold text-red-500">
                  ${vehicle.currentHighBid?.toLocaleString() ?? "—"}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <button className="w-full cursor-pointer py-3 rounded-xl bg-[#D93E39] text-white text-sm font-bold transition-colors">
              Place Bid
            </button>
            <button
              onClick={toggleSave}
              className={clsx(
                "w-full py-3 rounded-xl border text-sm font-bold transition-colors",
                saved
                  ? "border-red-500 cursor-pointer bg-red-50 text-[#D93E39]"
                  : "border-red-400 text-red-500 hover:bg-red-50"
              )}
            >
              {saved ? "Saved ✓" : "Save Vehicle"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}