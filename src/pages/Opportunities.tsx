import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Clock, DollarSign, GraduationCap, Briefcase, Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  deadline: string;
  requirements: string[];
}

interface Training {
  id: string;
  title: string;
  provider: string;
  duration: string;
  start_date: string;
  cost: string;
  description: string;
  spots: number;
  level: string;
}

interface Scholarship {
  id: string;
  title: string;
  provider: string;
  amount: string;
  deadline: string;
  description: string;
  eligibility: string[];
}

const Opportunities = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [training, setTraining] = useState<Training[]>([]);
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const [jobsData, trainingData, scholarshipsData] = await Promise.all([
        (supabase as any).from('jobs').select('*').order('created_at', { ascending: false }),
        (supabase as any).from('training_programs').select('*').order('created_at', { ascending: false }),
        (supabase as any).from('scholarships').select('*').order('created_at', { ascending: false })
      ]);

      if (jobsData.error) throw jobsData.error;
      if (trainingData.error) throw trainingData.error;
      if (scholarshipsData.error) throw scholarshipsData.error;

      setJobs(jobsData.data as any || []);
      setTraining(trainingData.data as any || []);
      setScholarships(scholarshipsData.data as any || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast({
        title: "Error",
        description: "Failed to load opportunities. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading opportunities...</div>
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
                Jobs ({jobs.length})
              </TabsTrigger>
              <TabsTrigger value="training" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Training ({training.length})
              </TabsTrigger>
              <TabsTrigger value="scholarships" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Scholarships ({scholarships.length})
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
                    
                    {job.requirements && job.requirements.length > 0 && (
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
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Deadline: {job.deadline ? new Date(job.deadline).toLocaleDateString() : 'Not specified'}</span>
                      </div>
                      <Button className="bg-gradient-hero hover:shadow-warm transition-all">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {jobs.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No job opportunities available at the moment.</p>
                </div>
              )}
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
                        <div className="font-medium">
                          {course.start_date ? new Date(course.start_date).toLocaleDateString() : 'To be announced'}
                        </div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Available Spots</div>
                        <div className="font-medium flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {course.spots || 'Unlimited'}
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-hero hover:shadow-warm transition-all">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
              {training.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No training programs available at the moment.</p>
                </div>
              )}
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
                    
                    {scholarship.eligibility && scholarship.eligibility.length > 0 && (
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
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Deadline: {scholarship.deadline ? new Date(scholarship.deadline).toLocaleDateString() : 'Not specified'}</span>
                      </div>
                      <Button className="bg-gradient-hero hover:shadow-warm transition-all">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {scholarships.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No scholarships available at the moment.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;