import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  Trophy, 
  Handshake, 
  Briefcase, 
  MessageSquare, 
  Users,
  TrendingUp,
  Calendar,
  ArrowRight
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const CommunityFeatures = () => {
  const [spotlightUser, setSpotlightUser] = useState<any>(null);
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const features = [
    {
      title: "Spotlight of the Week",
      description: "Every week, we celebrate one inspiring youth making a difference in their community.",
      icon: Star,
      color: "text-primary",
      bgColor: "bg-primary/10",
      buttonText: "View This Week's Star",
      status: "Active"
    },
    {
      title: "Payam Leaderboard",
      description: "Friendly competition between Payams based on community engagement and achievements.",
      icon: Trophy,
      color: "text-payam-anyidi",
      bgColor: "bg-orange-100",
      buttonText: "See Rankings",
      status: "Updated Daily"
    },
    {
      title: "Mentorship Matching",
      description: "Connect with experienced professionals and peers for guidance and collaboration.",
      icon: Handshake,
      color: "text-success",
      bgColor: "bg-success/10",
      buttonText: "Find a Mentor",
      status: "Available"
    },
    {
      title: "Opportunity Board",
      description: "Job listings, scholarships, internships, and volunteer opportunities from trusted organizations.",
      icon: Briefcase,
      color: "text-accent",
      bgColor: "bg-accent/10",
      buttonText: "Browse Opportunities",
      status: "20+ Active"
    },
    {
      title: "Community Projects",
      description: "Collaborate on local initiatives and community development projects.",
      icon: Users,
      color: "text-payam-kolnyang",
      bgColor: "bg-purple-100",
      buttonText: "Join Projects",
      status: "12 Ongoing"
    },
    {
      title: "Bor Voices Blog",
      description: "Share your journey, insights, and stories with the community.",
      icon: MessageSquare,
      color: "text-payam-jalle",
      bgColor: "bg-green-100",
      buttonText: "Read Stories",
      status: "New Posts"
    }
  ];

  const payamColors: { [key: string]: string } = {
    "Anyidi": "#D97706",
    "Baidit": "#2563EB",
    "Jalle": "#059669",
    "Makuach": "#DC2626",
    "Kolnyang": "#7C3AED"
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // For now, use fallback data since the tables may not be synced yet
        // TODO: Replace with actual database queries once types are updated
        
        // Fallback spotlight data
        setSpotlightUser({
          name: "Akech Deng",
          age: 24,
          payam: "Jalle",
          achievement: "Founded a digital literacy program that has trained over 200 youth in basic computer skills"
        });

        // Fallback leaderboard data
        const fallbackLeaderboard = [
          { payam: "Anyidi", score: 2485, members: 125, change: "+12%" },
          { payam: "Baidit", score: 2341, members: 98, change: "+8%" },
          { payam: "Jalle", score: 2298, members: 87, change: "+15%" },
          { payam: "Makuach", score: 2156, members: 89, change: "+5%" },
          { payam: "Kolnyang", score: 2089, members: 76, change: "+10%" }
        ].map(item => ({
          ...item,
          color: payamColors[item.payam] || "#6B7280"
        }));

        setLeaderboard(fallbackLeaderboard);
        
        // Uncomment this when the database types are updated:
        /*
        const { data: spotlightData } = await supabase
          .from('weekly_spotlights')
          .select('*')
          .eq('is_current', true)
          .maybeSingle();

        if (spotlightData) {
          setSpotlightUser(spotlightData);
        }

        const { data: leaderboardData } = await supabase
          .from('payam_leaderboard')
          .select('*')
          .order('score', { ascending: false })
          .limit(5);

        if (leaderboardData) {
          const formattedLeaderboard = leaderboardData.map(item => ({
            ...item,
            color: payamColors[item.payam] || "#6B7280"
          }));
          setLeaderboard(formattedLeaderboard);
        }
        */
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Community Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the tools and features that make Bor Rising a thriving digital community
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden transition-all duration-300 hover:shadow-warm hover:-translate-y-1 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className={`${feature.bgColor} p-3 rounded-lg transition-all duration-300 group-hover:scale-110`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  {feature.buttonText}
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Spotlight & Leaderboard Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Current Spotlight */}
          <Card className="shadow-cultural border border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Star className="h-5 w-5 fill-current" />
                This Week's Spotlight
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground text-lg font-bold">
                  AD
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{spotlightUser.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Age {spotlightUser.age} • {spotlightUser.payam} Payam
                  </p>
                  <Badge className="mt-2 bg-gradient-hero text-primary-foreground">
                    Community Leader
                  </Badge>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {spotlightUser.achievement}
              </p>

              <div className="flex gap-2 pt-2">
                <Button size="sm" className="bg-gradient-hero">
                  <Calendar className="h-4 w-4 mr-2" />
                  Read Full Story
                </Button>
                <Button size="sm" variant="outline">
                  Nominate Someone
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Payam Leaderboard */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-payam-anyidi" />
                Payam Leaderboard
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Based on community engagement, achievements, and active participation
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {leaderboard.map((payam, index) => (
                  <div key={payam.payam} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-background border border-border font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: payam.color }}
                        />
                        <span className="font-medium text-foreground">{payam.payam}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="text-right">
                        <div className="font-semibold text-foreground">{payam.score.toLocaleString()}</div>
                        <div className="text-muted-foreground">{payam.members} members</div>
                      </div>
                      <div className="flex items-center gap-1 text-success">
                        <TrendingUp className="h-3 w-3" />
                        <span className="font-medium">{payam.change}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                View Detailed Rankings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommunityFeatures;