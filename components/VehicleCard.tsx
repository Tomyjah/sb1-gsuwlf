import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, Users, Gauge, MapPin } from "lucide-react";

interface VehicleProps {
  vehicle: {
    name: string;
    type: string;
    image: string;
    pricePerDay: number;
    features: string[];
    specifications: {
      passengers: number;
      transmission: string;
      fuel: string;
      terrain: string;
    };
  };
}

export default function VehicleCard({ vehicle }: VehicleProps) {
  return (
    <Card className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative h-48 md:h-full">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="md:col-span-2">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold">{vehicle.name}</h3>
              <p className="text-gray-500">{vehicle.type}</p>
            </div>
            <Badge variant="secondary">${vehicle.pricePerDay}/day</Badge>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span className="text-sm">{vehicle.specifications.passengers} Passengers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Gauge className="w-4 h-4" />
              <span className="text-sm">{vehicle.specifications.transmission}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Car className="w-4 h-4" />
              <span className="text-sm">{vehicle.specifications.fuel}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{vehicle.specifications.terrain}</span>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold mb-2">Features:</h4>
            <div className="flex flex-wrap gap-2">
              {vehicle.features.map((feature, index) => (
                <Badge key={index} variant="outline">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          <Button className="w-full md:w-auto">Book Now</Button>
        </div>
      </div>
    </Card>
  );
}