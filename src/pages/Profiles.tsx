import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { MapPin, Calendar, Star } from "lucide-react";
import { useState, useEffect } from "react";

interface Profile {
  id: string;
  display_name: string;
  bio: string;
  location: string;
  skills: string[];
  profile_picture_url: string;
  endorsements: number;
  created_at: string;
  birthday: string;
}

const Profiles = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('is_profile_complete', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProfiles(data || []);
    } catch (error) {
      console.error('Error fetching profiles:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateAge = (birthday: string) => {
    if (!birthday) return null;
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading profiles...</div>
        </div>
      </div>
    );
  }
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
            {profiles.map((profile) => {
              const age = calculateAge(profile.birthday);
              const joinYear = new Date(profile.created_at).getFullYear();
              
              return (
                <Card key={profile.id} className="hover:shadow-warm transition-all duration-300">
                  <CardHeader className="text-center">
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarImage src={profile.profile_picture_url || `/placeholder.svg`} />
                      <AvatarFallback className="text-lg bg-gradient-hero text-primary-foreground">
                        {profile.display_name?.split(' ').map(n => n[0]).join('') || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl">{profile.display_name || 'Anonymous'}</CardTitle>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{profile.location || 'Location not specified'}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">
                      {profile.bio || 'No bio available'}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {profile.skills?.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {profile.skills?.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{profile.skills.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span>{profile.endorsements || 0} endorsements</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Since {joinYear}</span>
                      </div>
                    </div>

                    {age && (
                      <div className="text-center">
                        <span className="text-sm font-medium">Age: {age}</span>
                      </div>
                    )}

                    <Button className="w-full bg-gradient-hero hover:shadow-warm transition-all">
                      View Profile
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;