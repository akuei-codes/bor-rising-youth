import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Clock, DollarSign, GraduationCap, Briefcase, Users } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Community Outreach Coordinator",
    company: "BorNet Foundation",
    location: "Bor, South Sudan",
    type: "Full-time",
    salary: "Competitive",
    description: "Lead community engagement initiatives and coordinate outreach programs",
    deadline: "2024-02-15",
    requirements: ["2+ years experience", "Strong communication skills", "Local language fluency"]
  },
  {
    id: 2,
    title: "Agricultural Extension Officer",
    company: "Sustainable Farms Initiative",
    location: "Rural Bor",
    type: "Contract",
    salary: "$800-1200/month",
    description: "Support farmers with modern agricultural techniques and training",
    deadline: "2024-02-20",
    requirements: ["Agriculture background", "Field experience", "Motorcycle license"]
  }
];

const training = [
  {
    id: 1,
    title: "Digital Marketing Bootcamp",
    provider: "Tech Hub Bor",
    duration: "6 weeks",
    startDate: "2024-02-10",
    cost: "Free",
    description: "Learn social media marketing, content creation, and online business strategies",
    spots: 25,
    level: "Beginner"
  },
  {
    id: 2,
    title: "Entrepreneurship Masterclass",
    provider: "Youth Business Network",
    duration: "4 weeks",
    startDate: "2024-02-25",
    cost: "$50",
    description: "Develop business plans, financial literacy, and leadership skills",
    spots: 30,
    level: "Intermediate"
  }
];

const scholarships = [
  {
    id: 1,
    title: "Tech Innovation Scholarship",
    provider: "Digital Africa Foundation",
    amount: "$2,000",
    deadline: "2024-03-01",
    description: "For students pursuing technology and innovation studies",
    eligibility: ["18-25 years old", "Local resident", "Academic excellence"]
  },
  {
    id: 2,
    title: "Community Leadership Grant",
    provider: "Youth Empowerment Fund",
    amount: "$1,500",
    deadline: "2024-02-28",
    description: "Supporting young leaders implementing community projects",
    eligibility: ["Active community involvement", "Project proposal required", "Age 16-30"]
  }
];

const Opportunities = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Opportunities
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover jobs, training programs, and scholarships in your community
            </p>
          </div>

          <Tabs defaultValue="jobs" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="jobs" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Jobs
              </TabsTrigger>
              <TabsTrigger value="training" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Training
              </TabsTrigger>
              <TabsTrigger value="scholarships" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Scholarships
              </TabsTrigger>
            </TabsList>

            <TabsContent value="jobs" className="space-y-6">
              {jobs.map((job) => (
                <Card key={job.id} className="hover:shadow-warm transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <span className="font-medium">{job.company}</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{job.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary">{job.type}</Badge>
                        <Badge variant="outline">{job.salary}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{job.description}</p>
                    
                    <div>
                      <h4 className="font-medium mb-2">Requirements:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Deadline: {new Date(job.deadline).toLocaleDateString()}</span>
                      </div>
                      <Button className="bg-gradient-hero hover:shadow-warm transition-all">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="training" className="space-y-6">
              {training.map((course) => (
                <Card key={course.id} className="hover:shadow-warm transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <span className="font-medium">{course.provider}</span>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">{course.duration}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary">{course.level}</Badge>
                        <Badge variant="outline">{course.cost}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{course.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Start Date</div>
                        <div className="font-medium">{new Date(course.startDate).toLocaleDateString()}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Available Spots</div>
                        <div className="font-medium flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {course.spots}
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-hero hover:shadow-warm transition-all">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="scholarships" className="space-y-6">
              {scholarships.map((scholarship) => (
                <Card key={scholarship.id} className="hover:shadow-warm transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{scholarship.title}</CardTitle>
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <span className="font-medium">{scholarship.provider}</span>
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            {scholarship.amount}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{scholarship.description}</p>
                    
                    <div>
                      <h4 className="font-medium mb-2">Eligibility:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {scholarship.eligibility.map((criteria, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full" />
                            {criteria}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Deadline: {new Date(scholarship.deadline).toLocaleDateString()}</span>
                      </div>
                      <Button className="bg-gradient-hero hover:shadow-warm transition-all">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;