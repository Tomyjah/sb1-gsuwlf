"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import VehicleCard from "@/components/VehicleCard";
import { Car, Users, Gauge, MapPin } from "lucide-react";

const vehicles = [
  {
    id: 1,
    name: "Toyota Land Cruiser",
    type: "4x4 SUV",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf",
    pricePerDay: 150,
    features: ["4WD", "7 Seats", "GPS", "Air Conditioning"],
    specifications: {
      passengers: 7,
      transmission: "Automatic",
      fuel: "Diesel",
      terrain: "All-Terrain",
    },
  },
  {
    id: 2,
    name: "Toyota Hiace",
    type: "Minibus",
    image: "https://images.unsplash.com/photo-1464219789935-c2d9d9eb4d19",
    pricePerDay: 200,
    features: ["12 Seats", "Air Conditioning", "Luggage Space", "Driver Included"],
    specifications: {
      passengers: 12,
      transmission: "Manual",
      fuel: "Diesel",
      terrain: "Urban",
    },
  },
  {
    id: 3,
    name: "Toyota Corolla",
    type: "Sedan",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
    pricePerDay: 80,
    features: ["5 Seats", "Fuel Efficient", "Air Conditioning", "Bluetooth"],
    specifications: {
      passengers: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      terrain: "Urban",
    },
  },
];

export default function CarRentalPage() {
  const [selectedDates, setSelectedDates] = useState<Date | undefined>();

  return (
    <div className="min-h-screen pt-16">
      <div className="relative h-[40vh] bg-black">
        <img
          src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf"
          alt="4x4 Vehicle"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Car Rental Services</h1>
            <p className="text-xl">Explore Ethiopia with our reliable vehicles</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-6 col-span-1">
            <h2 className="text-xl font-bold mb-4">Book Your Vehicle</h2>
            <div className="space-y-4">
              <Calendar
                mode="single"
                selected={selectedDates}
                onSelect={setSelectedDates}
                className="rounded-md border"
              />
              <Button className="w-full">Check Availability</Button>
            </div>
          </Card>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Available Vehicles</h2>
            <div className="space-y-6">
              {vehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}