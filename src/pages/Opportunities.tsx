import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Briefcase, 
  GraduationCap, 
  Users, 
  MapPin, 
  Calendar, 
  Search,
  ExternalLink,
  Building,
  DollarSign,
  Clock
} from "lucide-react";
import { useState } from "react";

const jobOpportunities = [
  {
    id: 1,
    title: "Junior Software Developer",
    company: "TechHub Juba",
    location: "Juba (Remote friendly)",
    type: "Full-time",
    salary: "$800-1200/month",
    deadline: "2024-09-15",
    description: "Looking for a passionate developer to join our team building solutions for South Sudan.",
    requirements: ["React/TypeScript", "1+ years experience", "Problem-solving skills"],
    category: "technology",
    isUrgent: false
  },
  {
    id: 2,
    title: "Community Health Worker",
    company: "Médecins Sans Frontières",
    location: "Bor County",
    type: "Contract",
    salary: "Competitive + Benefits",
    deadline: "2024-08-30",
    description: "Support healthcare delivery in rural communities across Bor County.",
    requirements: ["Healthcare background", "Community experience", "Dinka/English fluency"],
    category: "healthcare",
    isUrgent: true
  },
  {
    id: 3,
    title: "Agricultural Extension Officer",
    company: "FAO South Sudan",
    location: "Bor County",
    type: "Full-time",
    salary: "$1000-1500/month",
    deadline: "2024-09-10",
    description: "Work with farmers to improve agricultural practices and food security.",
    requirements: ["Agricultural degree", "Field experience", "Training skills"],
    category: "agriculture",
    isUrgent: false
  },
  {
    id: 4,
    title: "English Teacher",
    company: "Bor Secondary School",
    location: "Bor Town",
    type: "Full-time",
    salary: "SSP 50,000/month",
    deadline: "2024-08-25",
    description: "Teach English literature and language to secondary school students.",
    requirements: ["Education degree", "Teaching experience", "Lesson planning"],
    category: "education",
    isUrgent: true
  }
];

const scholarships = [
  {
    id: 1,
    title: "Mandela Washington Fellowship 2024",
    provider: "U.S. State Department",
    amount: "Full scholarship + stipend",
    deadline: "2024-09-30",
    description: "6-week leadership program in the United States for young African leaders.",
    eligibility: ["21-35 years", "Leadership experience", "English proficiency"],
    category: "leadership",
    location: "United States"
  },
  {
    id: 2,
    title: "UNICEF Innovation Lab Scholarship",
    provider: "UNICEF",
    amount: "$5,000 + mentorship",
    deadline: "2024-08-20",
    description: "Support innovative solutions addressing challenges facing children.",
    eligibility: ["18-30 years", "STEM background", "Innovation project"],
    category: "innovation",
    location: "Kenya/Virtual"
  },
  {
    id: 3,
    title: "African Leadership Academy",
    provider: "ALA",
    amount: "Full scholarship available",
    deadline: "2024-10-15",
    description: "Two-year program developing ethical, entrepreneurial leaders.",
    eligibility: ["16-19 years", "Academic excellence", "Leadership potential"],
    category: "education",
    location: "South Africa"
  }
];

const mentorshipPrograms = [
  {
    id: 1,
    title: "Tech Mentorship Program",
    mentor: "Diaspora Tech Professionals",
    duration: "6 months",
    description: "Get mentored by South Sudanese tech professionals in the diaspora.",
    spots: "15 available",
    nextCohort: "September 2024",
    category: "technology"
  },
  {
    id: 2,
    title: "Women in Leadership Circle",
    mentor: "Female Leaders Network",
    duration: "12 months",
    description: "Develop leadership skills with successful South Sudanese women.",
    spots: "20 available",
    nextCohort: "October 2024",
    category: "leadership"
  },
  {
    id: 3,
    title: "Entrepreneurship Bootcamp",
    mentor: "Business Leaders",
    duration: "3 months",
    description: "Learn to start and scale your business with experienced entrepreneurs.",
    spots: "8 available",
    nextCohort: "August 2024",
    category: "business"
  }
];

const Opportunities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeTab, setActiveTab] = useState("jobs");

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "technology", label: "Technology" },
    { value: "healthcare", label: "Healthcare" },
    { value: "education", label: "Education" },
    { value: "agriculture", label: "Agriculture" },
    { value: "business", label: "Business" },
    { value: "leadership", label: "Leadership" },
    { value: "innovation", label: "Innovation" }
  ];

  const filterItems = (items: any[]) => {
    return items.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  };

  const OpportunityCard = ({ item, type }: { item: any, type: string }) => (
    <Card className="transition-all hover:shadow-warm">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg mb-2 flex items-center gap-2">
              {item.title}
              {type === "job" && item.isUrgent && (
                <Badge variant="destructive" className="text-xs">URGENT</Badge>
              )}
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
              {type === "job" && (
                <>
                  <div className="flex items-center gap-1">
                    <Building className="h-4 w-4" />
                    {item.company}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {item.location}
                  </div>
                </>
              )}
              {type === "scholarship" && (
                <>
                  <div className="flex items-center gap-1">
                    <Building className="h-4 w-4" />
                    {item.provider}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {item.location}
                  </div>
                </>
              )}
              {type === "mentorship" && (
                <>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {item.mentor}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {item.duration}
                  </div>
                </>
              )}
            </div>
          </div>
          <Badge variant="outline" className="capitalize">
            {item.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{item.description}</p>
        
        <div className="space-y-3">
          {type === "job" && (
            <>
              <div className="flex items-center gap-2 text-sm">
                <DollarSign className="h-4 w-4 text-success" />
                <span>{item.salary}</span>
                <Badge variant="secondary" className="ml-auto">
                  {item.type}
                </Badge>
              </div>
              <div>
                <div className="text-sm font-medium mb-1">Requirements:</div>
                <div className="flex flex-wrap gap-1">
                  {item.requirements.map((req: string, index: number) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {req}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}
          
          {type === "scholarship" && (
            <>
              <div className="flex items-center gap-2 text-sm">
                <DollarSign className="h-4 w-4 text-success" />
                <span>{item.amount}</span>
              </div>
              <div>
                <div className="text-sm font-medium mb-1">Eligibility:</div>
                <div className="flex flex-wrap gap-1">
                  {item.eligibility.map((req: string, index: number) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {req}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}
          
          {type === "mentorship" && (
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Available spots:</span>
                <div className="font-medium">{item.spots}</div>
              </div>
              <div>
                <span className="text-muted-foreground">Next cohort:</span>
                <div className="font-medium">{item.nextCohort}</div>
              </div>
            </div>
          )}
          
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              Deadline: {type === "mentorship" ? item.nextCohort : item.deadline}
            </div>
            <Button size="sm" className="gap-1">
              Apply Now
              <ExternalLink className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center shadow-warm">
              <Briefcase className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Opportunities</h1>
              <p className="text-muted-foreground">Jobs, scholarships, and mentorship programs for Bor youth</p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search opportunities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="jobs" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Jobs ({filterItems(jobOpportunities).length})
            </TabsTrigger>
            <TabsTrigger value="scholarships" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Scholarships ({filterItems(scholarships).length})
            </TabsTrigger>
            <TabsTrigger value="mentorship" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Mentorship ({filterItems(mentorshipPrograms).length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="jobs" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filterItems(jobOpportunities).map(job => (
                <OpportunityCard key={job.id} item={job} type="job" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="scholarships" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filterItems(scholarships).map(scholarship => (
                <OpportunityCard key={scholarship.id} item={scholarship} type="scholarship" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mentorship" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filterItems(mentorshipPrograms).map(program => (
                <OpportunityCard key={program.id} item={program} type="mentorship" />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Empty State */}
        {((activeTab === "jobs" && filterItems(jobOpportunities).length === 0) ||
          (activeTab === "scholarships" && filterItems(scholarships).length === 0) ||
          (activeTab === "mentorship" && filterItems(mentorshipPrograms).length === 0)) && (
          <div className="text-center py-12">
            <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No opportunities found</h3>
            <p className="text-muted-foreground">Try adjusting your search or category filter</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Opportunities;