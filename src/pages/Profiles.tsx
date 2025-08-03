import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Star } from "lucide-react";

const profiles = [
  {
    id: 1,
    name: "Amal Deng",
    age: 22,
    location: "Bor, South Sudan",
    skills: ["Web Development", "UI/UX Design", "Photography"],
    bio: "Passionate about technology and creating digital solutions for local communities.",
    rating: 4.8,
    projects: 12,
    joinDate: "2023"
  },
  {
    id: 2,
    name: "John Garang",
    age: 24,
    location: "Bor, South Sudan", 
    skills: ["Agriculture", "Business", "Leadership"],
    bio: "Working to modernize agriculture practices and support local farmers.",
    rating: 4.9,
    projects: 8,
    joinDate: "2023"
  },
  {
    id: 3,
    name: "Mary Akuei",
    age: 20,
    location: "Bor, South Sudan",
    skills: ["Education", "Community Outreach", "Public Speaking"],
    bio: "Dedicated to improving education access for children in rural areas.",
    rating: 4.7,
    projects: 15,
    joinDate: "2022"
  }
];

const Profiles = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Community Profiles
            </h1>
            <p className="text-muted-foreground text-lg">
              Meet the talented youth driving change in Bor
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profiles.map((profile) => (
              <Card key={profile.id} className="hover:shadow-warm transition-all duration-300">
                <CardHeader className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={`/placeholder.svg`} />
                    <AvatarFallback className="text-lg bg-gradient-hero text-primary-foreground">
                      {profile.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{profile.name}</CardTitle>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{profile.location}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{profile.bio}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span>{profile.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Since {profile.joinDate}</span>
                    </div>
                  </div>

                  <div className="text-center">
                    <span className="text-sm font-medium">{profile.projects} Projects Completed</span>
                  </div>

                  <Button className="w-full bg-gradient-hero hover:shadow-warm transition-all">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;