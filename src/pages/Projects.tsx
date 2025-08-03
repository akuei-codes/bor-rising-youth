import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, Users, Target, TrendingUp } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Digital Literacy Program",
    description: "Teaching computer skills and digital literacy to youth and adults in rural areas",
    category: "Education",
    status: "Active",
    progress: 75,
    startDate: "2024-01-15",
    participants: 120,
    goal: "Train 200 people in basic computer skills",
    lead: "Amal Deng"
  },
  {
    id: 2,
    title: "Sustainable Agriculture Initiative",
    description: "Implementing modern farming techniques and sustainable practices",
    category: "Agriculture", 
    status: "Planning",
    progress: 25,
    startDate: "2024-03-01",
    participants: 85,
    goal: "Increase crop yield by 40%",
    lead: "John Garang"
  },
  {
    id: 3,
    title: "Youth Entrepreneurship Hub",
    description: "Supporting young entrepreneurs with mentorship and resources",
    category: "Business",
    status: "Active",
    progress: 60,
    startDate: "2023-10-10",
    participants: 45,
    goal: "Launch 15 new businesses",
    lead: "Mary Akuei"
  },
  {
    id: 4,
    title: "Community Health Outreach",
    description: "Mobile health clinics and health education programs",
    category: "Healthcare",
    status: "Completed",
    progress: 100,
    startDate: "2023-08-01",
    participants: 200,
    goal: "Reach 500 community members",
    lead: "Dr. Rebecca Majok"
  }
];

const Projects = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-500";
      case "Planning": return "bg-yellow-500";
      case "Completed": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Community Projects
            </h1>
            <p className="text-muted-foreground text-lg">
              Collaborative initiatives driving positive change in Bor
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">12</div>
                <div className="text-muted-foreground text-sm">Active Projects</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">450+</div>
                <div className="text-muted-foreground text-sm">Participants</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">8</div>
                <div className="text-muted-foreground text-sm">Completed</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">6</div>
                <div className="text-muted-foreground text-sm">Months Avg.</div>
              </CardContent>
            </Card>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-warm transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{project.category}</Badge>
                        <div className="flex items-center gap-1">
                          <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`} />
                          <span className="text-sm text-muted-foreground">{project.status}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Start Date</div>
                      <div className="font-medium">{new Date(project.startDate).toLocaleDateString()}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Participants</div>
                      <div className="font-medium">{project.participants}</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-muted-foreground text-sm mb-1">Goal</div>
                    <div className="text-sm">{project.goal}</div>
                  </div>

                  <div>
                    <div className="text-muted-foreground text-sm mb-1">Project Lead</div>
                    <div className="text-sm font-medium">{project.lead}</div>
                  </div>

                  <Button className="w-full bg-gradient-hero hover:shadow-warm transition-all">
                    Learn More
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

export default Projects;