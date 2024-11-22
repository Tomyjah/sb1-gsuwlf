import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Map, Users, Calendar } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1563245372-f21724e3856d"
          alt="Ethiopian Landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Discover Ethiopia's Beauty
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
              Experience the rich history, diverse culture, and stunning landscapes of Ethiopia with our premium tour and car rental services.
            </p>
            <div className="space-x-4">
              <Button size="lg" asChild>
                <Link href="/tours">Explore Tours</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/car-rental">Rent a Car</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Map className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Guided Tours</h3>
                <p className="text-gray-600">
                  Expert-led tours to Ethiopia's most iconic destinations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Car className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Car Rental</h3>
                <p className="text-gray-600">
                  Wide range of vehicles for your travel needs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Users className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Custom Tours</h3>
                <p className="text-gray-600">
                  Personalized itineraries tailored to your preferences.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Calendar className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Travel Planning</h3>
                <p className="text-gray-600">
                  Comprehensive travel assistance and planning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Lalibela",
                image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10",
                description: "Ancient rock-hewn churches, a UNESCO World Heritage site."
              },
              {
                title: "Simien Mountains",
                image: "https://images.unsplash.com/photo-1586500036706-41963de24d8b",
                description: "Dramatic landscapes and unique wildlife."
              },
              {
                title: "Danakil Depression",
                image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
                description: "One of the most unique landscapes on Earth."
              }
            ].map((destination, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  width={400}
                  height={300}
                  className="w-full h-[300px] object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-2">{destination.title}</h3>
                    <p className="text-sm">{destination.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}