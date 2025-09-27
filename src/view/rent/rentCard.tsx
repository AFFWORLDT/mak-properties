"use client";

import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Bath, Bed, Heart, SquareGanttChart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface PropertyData {
  id?: string | number;
  title?: string;
  price?: number;
  bedRooms?: number;
  bathrooms?: number | string;
  size?: number | string;
  propertyId?: string;
  priceType: string;
  photos?: string[];
  location?: {
    city?: string;
    community?: string;
    sub_community?: string;
  };
  ownPortal_agent_Id?: string;
  agent?: {
    name?: string;
    email?: string;
    phone?: string;
    avatar?: string;
  };
}

interface RentCardProps {
  data?: PropertyData;
  onFavorite?: (item: PropertyData) => void;
}

export function RentCard({ data, onFavorite }: RentCardProps) {
  const router = useRouter();
  const handleFavorite = () => {
    if (data && onFavorite) {
      onFavorite(data);
    }
  };

  if (!data) {
    return (
      <Card className="relative overflow-hidden rounded-none shadow-sm bg-white p-0 border">
        <CardContent className="p-6 text-center text-gray-500">
          No property data available
        </CardContent>
      </Card>
    );
  }

  const imageUrl = data.photos?.[0] || "/placeholder.svg?height=320&width=400";
  const locationName = [data.location?.community, data.location?.sub_community]
    .filter(Boolean)
    .join(", ");

  const formattedPrice = data.price
    ? `AED ${data.price.toLocaleString()}`
    : "Price on request";

  return (
    <Card
      className="relative overflow-hidden rounded-none shadow-sm bg-white p-0 border cursor-pointer"
      onClick={() => router.push(`/buy/details/${data.id}`)}
    >
      <div className="relative w-full h-80">
        <Image
          src={imageUrl}
          alt={data?.title || "Property image"}
          fill
          className="rounded-none object-cover"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-[#D4B88C] text-white px-3 py-1 text-xs tracking-wider uppercase">
            For Rent
          </span>
          <span className="bg-white text-gray-800 px-3 py-1 text-xs tracking-wider uppercase">
            Available
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-white rounded-full"
          onClick={handleFavorite}
        >
          <Heart className="w-7 h-7" />
          <span className="sr-only">Add to favorites</span>
        </Button>
      </div>

      <CardContent className="grid gap-2 px-4 py-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-mono text-[#1A202C] tracking-wide">
            {data?.title}
          </h3>
          <p className="text-sm text-gray-500 font-light">
          </p>
        </div>

        <p className="text-sm text-primary uppercase font-light tracking-wider">
          {locationName || "Location not specified"}
        </p>
        <p className="text-sm font-bold text-[#1A202C] tracking-wide">
          {formattedPrice}/{data?.priceType}
        </p>

        <div className="flex items-end justify-between text-gray-600 text-sm mt-2 font-light">
          <div className="flex items-end gap-8">
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              <span>{data?.bedRooms ?? "N/A"}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              <span>{data?.bathrooms ?? "N/A"}</span>
            </div>
            <div className="flex items-center gap-1">
              <SquareGanttChart className="w-4 h-4" />
              <span>{data?.size ? `${data?.size} sqft` : "N/A"}</span>
            </div>
          </div>
          
          {/* Agent Avatar - Bottom Right Corner */}
          <div className="flex items-center justify-center">
            {data?.agent?.avatar ? (
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#dbbb90] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <Image
                  src={data.agent.avatar}
                  alt={data.agent.name || "Agent"}
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#dbbb90] to-[#C2A17B] flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
