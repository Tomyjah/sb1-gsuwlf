import { Button } from "@/components/ui/button";
import TourCard from "@/components/TourCard";
import SearchTours from "@/components/SearchTours";
import { Badge } from "@/components/ui/badge";

const tours = [
  {
    id: 1,
    title: "Historic Lalibela Tour",
    description: "Explore the ancient rock-hewn churches of Lalibela, a UNESCO World Heritage site.",
    image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10",
    duration: "5 days",
    price: 1200,
    peakSeason: "October - January",
    lowSeason: "June - August",
    rating: 4.8,
    included: ["Accommodation", "Transportation", "Guide", "Meals"],
  },
  {
    id: 2,
    title: "Simien Mountains Trek",
    description: "Trek through the dramatic landscapes of the Simien Mountains National Park.",
    image: "https://images.unsplash.com/photo-1586500036706-41963de24d8b",
    duration: "7 days",
    price: 1500,
    peakSeason: "September - November",
    lowSeason: "April - June",
    rating: 4.9,
    included: ["Camping Equipment", "Guide", "Meals", "Park Fees"],
  },
  {
    id: 3,
    title: "Danakil Depression Adventure",
    description: "Visit one of the most unique and extreme landscapes on Earth.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    duration: "4 days",
    price: 1800,
    peakSeason: "November - March",
    lowSeason: "June - August",
    rating: 4.7,
    included: ["4x4 Vehicle", "Guide", "Accommodation", "Meals"],
  },
  {
    id: 4,
    title: "Axum Historical Tour",
    description: "Discover the ancient kingdom of Axum and its historical treasures.",
    image: "https://images.unsplash.com/photo-1516496636080-14fb876e029d",
    duration: "3 days",
    price: 900,
    peakSeason: "October - March",
    lowSeason: "June - August",
    rating: 4.6,
    included: ["Hotel", "Transportation", "Guide", "Entrance Fees"],
  },
];

export default function ToursPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="relative h-[40vh] bg-black">
        <img
          src="https://images.unsplash.com/photo-1516496636080-14fb876e029d"
          alt="Ethiopian Landscape"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Discover Ethiopia</h1>
            <p className="text-xl">Experience the beauty of ancient traditions and landscapes</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <SearchTours />

        <div className="mt-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Current Offers</h2>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">15% Off Peak Season Bookings</Badge>
            <Badge variant="secondary">Group Discounts Available</Badge>
            <Badge variant="secondary">Early Bird Special</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </div>
  );
}