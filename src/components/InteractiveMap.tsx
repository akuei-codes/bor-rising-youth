import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, MapPin, Eye } from "lucide-react";

const payamData = [
  {
    name: "Anyidi",
    color: "#D97706", // Orange
    position: { x: 25, y: 35 },
    userCount: 125,
    description: "Agricultural hub with strong educational focus"
  },
  {
    name: "Baidit",
    color: "#2563EB", // Blue
    position: { x: 45, y: 25 },
    userCount: 98,
    description: "Commercial center with growing tech community"
  },
  {
    name: "Jalle",
    color: "#059669", // Green
    position: { x: 65, y: 40 },
    userCount: 87,
    description: "Cultural heritage center with artistic talents"
  },
  {
    name: "Kolnyang",
    color: "#7C3AED", // Purple
    position: { x: 35, y: 60 },
    userCount: 76,
    description: "Educational excellence and innovation hub"
  },
  {
    name: "Makuach",
    color: "#DC2626", // Red
    position: { x: 55, y: 70 },
    userCount: 89,
    description: "Youth leadership and community development"
  }
];

const InteractiveMap = () => {
  const [selectedPayam, setSelectedPayam] = useState<string | null>(null);
  const [hoveredPayam, setHoveredPayam] = useState<string | null>(null);

  const selectedPayamData = payamData.find(p => p.name === selectedPayam);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Explore Bor County
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the diversity of talents across all five Payams of Bor County. 
            Click on any region to explore youth profiles from that area.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <Card className="p-6 h-96 relative overflow-hidden bg-gradient-to-br from-background to-muted/50">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Bor County Map
                </CardTitle>
              </CardHeader>

              {/* SVG Map Container */}
              <div className="relative w-full h-full bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg border border-border">
                {/* Payam Locations */}
                {payamData.map((payam) => {
                  const isSelected = selectedPayam === payam.name;
                  const isHovered = hoveredPayam === payam.name;
                  
                  return (
                    <div
                      key={payam.name}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300"
                      style={{
                        left: `${payam.position.x}%`,
                        top: `${payam.position.y}%`,
                        zIndex: isSelected || isHovered ? 20 : 10
                      }}
                      onClick={() => setSelectedPayam(payam.name)}
                      onMouseEnter={() => setHoveredPayam(payam.name)}
                      onMouseLeave={() => setHoveredPayam(null)}
                    >
                      {/* Pulse Animation for Active Payam */}
                      {(isSelected || isHovered) && (
                        <div
                          className="absolute inset-0 rounded-full animate-ping"
                          style={{
                            backgroundColor: payam.color,
                            opacity: 0.3,
                            width: '60px',
                            height: '60px',
                            left: '-15px',
                            top: '-15px'
                          }}
                        />
                      )}
                      
                      {/* Main Circle */}
                      <div
                        className={`w-8 h-8 rounded-full border-4 border-background shadow-lg transition-all duration-300 flex items-center justify-center ${
                          isSelected || isHovered ? 'w-12 h-12 shadow-cultural' : ''
                        }`}
                        style={{ backgroundColor: payam.color }}
                      >
                        <Users className={`text-white ${isSelected || isHovered ? 'h-5 w-5' : 'h-4 w-4'}`} />
                      </div>

                      {/* Label */}
                      <div
                        className={`absolute top-10 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                          isSelected || isHovered ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-2'
                        }`}
                      >
                        <div className="bg-background/95 backdrop-blur-sm px-3 py-1 rounded-lg shadow-soft border border-border">
                          <div className="text-sm font-medium text-foreground">{payam.name}</div>
                          <div className="text-xs text-muted-foreground">{payam.userCount} youth</div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Map Background Elements */}
                <div className="absolute inset-4 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* River representation */}
                    <path
                      d="M10,20 Q30,10 50,25 T90,30"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                      className="text-accent"
                    />
                    <path
                      d="M15,80 Q40,70 60,85 T85,75"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      fill="none"
                      className="text-accent"
                    />
                  </svg>
                </div>
              </div>
            </Card>
          </div>

          {/* Payam Details */}
          <div className="space-y-6">
            {selectedPayamData ? (
              <Card className="shadow-warm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: selectedPayamData.color }}
                    />
                    {selectedPayamData.name} Payam
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {selectedPayamData.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-foreground">
                        {selectedPayamData.userCount}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Youth Profiles
                      </div>
                    </div>
                    <Badge 
                      className="text-white"
                      style={{ backgroundColor: selectedPayamData.color }}
                    >
                      Active
                    </Badge>
                  </div>

                  <Button className="w-full" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View {selectedPayamData.name} Profiles
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-dashed border-2 border-muted">
                <CardContent className="p-8 text-center space-y-4">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
                  <div>
                    <h3 className="font-medium text-foreground mb-2">
                      Select a Payam
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Click on any region on the map to explore youth profiles and learn more about that Payam.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">County Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Youth</span>
                  <span className="font-semibold text-primary">475</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Active This Month</span>
                  <span className="font-semibold text-success">342</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">New This Week</span>
                  <span className="font-semibold text-primary">28</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Success Stories</span>
                  <span className="font-semibold text-primary">156</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;