import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    country: "United States",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    tripImage: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10",
    rating: 5,
    text: "Our trip to Lalibela was absolutely incredible. The guides were knowledgeable and the arrangements were perfect.",
    tour: "Historic Lalibela Tour",
  },
  {
    id: 2,
    name: "Michael Chen",
    country: "Canada",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    tripImage: "https://images.unsplash.com/photo-1586500036706-41963de24d8b",
    rating: 5,
    text: "The Simien Mountains trek exceeded all expectations. Breathtaking views and excellent support from the team.",
    tour: "Simien Mountains Trek",
  },
  {
    id: 3,
    name: "Emma Wilson",
    country: "UK",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    tripImage: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    rating: 4,
    text: "A unique experience in the Danakil Depression. Well-organized and safe despite the challenging environment.",
    tour: "Danakil Depression Adventure",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src={testimonial.tripImage}
                  alt={`${testimonial.name}'s trip`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.country}</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-2">{testimonial.text}</p>
                <p className="text-sm text-gray-500">Tour: {testimonial.tour}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}