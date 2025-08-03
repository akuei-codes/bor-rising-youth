import Header from "@/components/Header";
import InteractiveMap from "@/components/InteractiveMap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, TrendingUp, Calendar } from "lucide-react";

const payamStats = [
  {
    name: "Anyidi",
    color: "#E84142",
    totalProfiles: 156,
    verifiedProfiles: 89,
    topSkills: ["Technology", "Education", "Healthcare"],
    recentActivity: "12 new profiles this month"
  },
  {
    name: "Baidit",
    color: "#3498DB",
    totalProfiles: 134,
    verifiedProfiles: 76,
    topSkills: ["Business", "Agriculture", "Engineering"],
    recentActivity: "8 new profiles this month"
  },
  {
    name: "Jalle",
    color: "#8E44AD",
    totalProfiles: 142,
    verifiedProfiles: 82,
    topSkills: ["Education", "Arts", "Community Work"],
    recentActivity: "15 new profiles this month"
  },
  {
    name: "Kolnyang",
    color: "#F39C12",
    totalProfiles: 128,
    verifiedProfiles: 71,
    topSkills: ["Healthcare", "Agriculture", "Education"],
    recentActivity: "6 new profiles this month"
  },
  {
    name: "Makuach",
    color: "#27AE60",
    totalProfiles: 119,
    verifiedProfiles: 65,
    topSkills: ["Agriculture", "Engineering", "Business"],
    recentActivity: "10 new profiles this month"
  }
];

const Map = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center shadow-warm">
              <MapPin className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Interactive Map</h1>
              <p className="text-muted-foreground">Explore youth talent across all Payams of Bor County</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Bor County Payams
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <InteractiveMap />
              </CardContent>
            </Card>
          </div>

          {/* Payam Statistics */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Overall Statistics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">679</div>
                    <div className="text-sm text-muted-foreground">Total Profiles</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <div className="text-2xl font-bold text-success">383</div>
                    <div className="text-sm text-muted-foreground">Verified</div>
                  </div>
                </div>
                <div className="text-center p-4 bg-secondary/50 rounded-lg">
                  <div className="text-2xl font-bold text-accent">51</div>
                  <div className="text-sm text-muted-foreground">New This Month</div>
                </div>
              </CardContent>
            </Card>

            {/* Payam Details */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <Users className="h-4 w-4" />
                Payam Breakdown
              </h3>
              
              {payamStats.map((payam) => (
                <Card key={payam.name} className="transition-all hover:shadow-warm">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: payam.color }}
                        />
                        <h4 className="font-medium text-foreground">{payam.name}</h4>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {payam.totalProfiles} profiles
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Verified:</span>
                        <span className="text-success font-medium">{payam.verifiedProfiles}</span>
                      </div>
                      
                      <div>
                        <div className="text-muted-foreground mb-1">Top Skills:</div>
                        <div className="flex flex-wrap gap-1">
                          {payam.topSkills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1 text-accent text-xs">
                        <Calendar className="h-3 w-3" />
                        {payam.recentActivity}
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full mt-3"
                    >
                      View {payam.name} Profiles
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Legend */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Map Legend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">High Activity (100+ profiles)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Medium Activity (50-100 profiles)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-muted rounded-full"></div>
                  <span className="text-muted-foreground">Developing (0-50 profiles)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Map;