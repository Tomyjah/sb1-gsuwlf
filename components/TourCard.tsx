import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Star } from "lucide-react";

interface TourProps {
  tour: {
    title: string;
    description: string;
    image: string;
    duration: string;
    price: number;
    peakSeason: string;
    lowSeason: string;
    rating: number;
    included: string[];
  };
}

export default function TourCard({ tour }: TourProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{tour.title}</h3>
          <Badge variant="secondary">${tour.price}</Badge>
        </div>
        <p className="text-gray-600 text-sm mb-4">{tour.description}</p>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-2" />
            Duration: {tour.duration}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            Peak Season: {tour.peakSeason}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
            {tour.rating} / 5
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full">Book Now</Button>
      </CardFooter>
    </Card>
  );
}