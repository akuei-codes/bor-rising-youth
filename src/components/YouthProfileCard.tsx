import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, GraduationCap, Star, Heart, MessageCircle } from "lucide-react";

interface YouthProfileCardProps {
  name: string;
  photo?: string;
  age: number;
  payam: string;
  payamColor: string;
  profession: string;
  education: string;
  skills: string[];
  bio: string;
  isVerified?: boolean;
  endorsements: number;
  spotlightWeek?: boolean;
}

const YouthProfileCard = ({
  name,
  photo,
  age,
  payam,
  payamColor,
  profession,
  education,
  skills,
  bio,
  isVerified = false,
  endorsements,
  spotlightWeek = false
}: YouthProfileCardProps) => {
  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2);

  return (
    <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-warm hover:-translate-y-1 ${
      spotlightWeek ? 'ring-2 ring-primary shadow-cultural' : ''
    }`}>
      {/* Spotlight Badge */}
      {spotlightWeek && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-gradient-hero text-primary-foreground flex items-center gap-1">
            <Star className="h-3 w-3" />
            Spotlight
          </Badge>
        </div>
      )}

      {/* Payam Color Strip */}
      <div 
        className="absolute top-0 left-0 right-0 h-1"
        style={{ backgroundColor: payamColor }}
      />

      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Profile Header */}
          <div className="flex items-start gap-4">
            <div className="relative">
              <Avatar className="w-16 h-16 border-2 border-primary/10">
                <AvatarImage src={photo} alt={name} />
                <AvatarFallback className="bg-gradient-hero text-primary-foreground text-lg font-semibold">
                  {initials}
                </AvatarFallback>
              </Avatar>
              {isVerified && (
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center border-2 border-background">
                  <Star className="h-3 w-3 text-success-foreground fill-current" />
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-foreground truncate">{name}</h3>
              <p className="text-sm text-muted-foreground">Age {age}</p>
              <div className="flex items-center gap-1 mt-1">
                <MapPin className="h-3 w-3 text-muted-foreground" />
                <span className="text-sm" style={{ color: payamColor }}>{payam}</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {bio}
          </p>

          {/* Profession & Education */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Briefcase className="h-4 w-4 text-accent" />
              <span className="text-foreground">{profession}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <GraduationCap className="h-4 w-4 text-success" />
              <span className="text-muted-foreground">{education}</span>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground">Skills</h4>
            <div className="flex flex-wrap gap-1">
              {skills.slice(0, 3).map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {skills.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{skills.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Heart className="h-4 w-4" />
                <span>{endorsements}</span>
              </button>
              <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors">
                <MessageCircle className="h-4 w-4" />
                <span>Connect</span>
              </button>
            </div>

            <Button size="sm" variant="outline" className="text-xs" asChild>
              <a href={`/profile/${name.toLowerCase().replace(/\s+/g, '-')}`}>
                View Profile
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default YouthProfileCard;