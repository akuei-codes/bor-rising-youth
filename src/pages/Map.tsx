import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Building, Briefcase } from "lucide-react";

const mapData = [
  {
    id: 1,
    name: "Bor Central Hub",
    type: "Community Center",
    location: "Central Bor",
    members: 45,
    description: "Main gathering place for youth activities and workshops",
    coordinates: { lat: 6.2088, lng: 31.5590 }
  },
  {
    id: 2,
    name: "Tech Innovation Space",
    type: "Workspace",
    location: "Bor Town",
    members: 28,
    description: "Co-working space for technology and innovation projects",
    coordinates: { lat: 6.2100, lng: 31.5580 }
  },
  {
    id: 3,
    name: "Agricultural Learning Center",
    type: "Training Facility", 
    location: "Rural Bor",
    members: 62,
    description: "Training center for modern farming techniques",
    coordinates: { lat: 6.2050, lng: 31.5610 }
  }
];

const Map = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Community Map
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover locations and connect with your community
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <div className="order-2 lg:order-1">
              <Card className="h-96 bg-gradient-to-br from-muted/30 to-muted/10 border-2 border-dashed border-muted-foreground/20">
                <CardContent className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                    <p className="text-muted-foreground">
                      Map integration coming soon
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Locations List */}
            <div className="order-1 lg:order-2 space-y-4">
              <h2 className="text-2xl font-bold mb-6">Key Locations</h2>
              {mapData.map((location) => (
                <Card key={location.id} className="hover:shadow-warm transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{location.name}</CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{location.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm bg-gradient-hero text-primary-foreground px-2 py-1 rounded-full">
                        {location.type === "Community Center" && <Users className="h-3 w-3" />}
                        {location.type === "Workspace" && <Briefcase className="h-3 w-3" />}
                        {location.type === "Training Facility" && <Building className="h-3 w-3" />}
                        <span className="text-xs">{location.type}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground text-sm">{location.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{location.members} Members</span>
                      </div>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;