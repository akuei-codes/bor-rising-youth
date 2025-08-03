import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin } from "lucide-react";

interface PayamCardProps {
  name: string;
  color: string;
  userCount: number;
  activeUsers: number;
  description: string;
  featured?: boolean;
}

const PayamCard = ({ name, color, userCount, activeUsers, description, featured }: PayamCardProps) => {
  return (
    <Card 
      className={`relative overflow-hidden transition-all duration-300 hover:shadow-warm hover:-translate-y-1 cursor-pointer group ${
        featured ? 'ring-2 ring-primary shadow-cultural' : ''
      }`}
    >
      {/* Payam Color Strip */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-2"
        style={{ backgroundColor: color }}
      />
      
      {featured && (
        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
          Featured
        </Badge>
      )}

      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-foreground">{name}</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                <MapPin className="h-4 w-4" />
                Payam
              </p>
            </div>
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-soft"
              style={{ backgroundColor: `${color}20` }}
            >
              <Users className="h-6 w-6" style={{ color }} />
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="flex gap-4">
              <div>
                <div className="text-lg font-semibold text-foreground">{userCount}</div>
                <div className="text-xs text-muted-foreground">Total Youth</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-success">{activeUsers}</div>
                <div className="text-xs text-muted-foreground">Active This Week</div>
              </div>
            </div>
            
            {/* Activity Indicator */}
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-xs text-success">Live</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PayamCard;