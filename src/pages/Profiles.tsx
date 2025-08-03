import { useState } from "react";
import Header from "@/components/Header";
import YouthProfileCard from "@/components/YouthProfileCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MapPin, Users } from "lucide-react";

const mockProfiles = [
  {
    id: 1,
    name: "Akol Deng Majok",
    photo: undefined,
    age: 24,
    payam: "Anyidi",
    payamColor: "#E84142",
    profession: "Software Developer",
    education: "Computer Science - University of Juba",
    skills: ["React", "Python", "Mobile Development", "UI/UX Design"],
    bio: "Passionate about using technology to solve local problems. Currently working on a mobile app for farmers in Bor County.",
    isVerified: true,
    endorsements: 23,
    spotlightWeek: true
  },
  {
    id: 2,
    name: "Mary Nyankiir Garang",
    photo: undefined,
    age: 22,
    payam: "Kolnyang",
    payamColor: "#F39C12",
    profession: "Nurse",
    education: "Nursing - Juba College of Nursing",
    skills: ["Patient Care", "Emergency Response", "Community Health", "Medical Training"],
    bio: "Dedicated to improving healthcare in rural communities. Leading vaccination campaigns across Bor County.",
    isVerified: true,
    endorsements: 18,
  },
  {
    id: 3,
    name: "John Mabior Dut",
    photo: undefined,
    age: 26,
    payam: "Makuach",
    payamColor: "#27AE60",
    profession: "Agricultural Engineer",
    education: "Agricultural Engineering - Makerere University",
    skills: ["Irrigation Systems", "Crop Management", "Soil Analysis", "Farm Planning"],
    bio: "Working to modernize farming techniques in Bor. Introduced drought-resistant crops that increased yields by 40%.",
    isVerified: false,
    endorsements: 31,
  },
  {
    id: 4,
    name: "Grace Adut Kon",
    photo: undefined,
    age: 21,
    payam: "Jalle",
    payamColor: "#8E44AD",
    profession: "Teacher",
    education: "Education - University of Bahr el Ghazal",
    skills: ["Mathematics", "English Literature", "Curriculum Development", "Student Mentoring"],
    bio: "Teaching primary school students and developing educational materials in both Dinka and English.",
    isVerified: true,
    endorsements: 15,
  },
  {
    id: 5,
    name: "Peter Chol Mayik",
    photo: undefined,
    age: 25,
    payam: "Baidit",
    payamColor: "#3498DB",
    profession: "Business Owner",
    education: "Business Administration - Kenya Methodist University",
    skills: ["Entrepreneurship", "Financial Management", "Supply Chain", "Team Leadership"],
    bio: "Founded a successful logistics company connecting Bor to Juba. Creating jobs for local youth.",
    isVerified: true,
    endorsements: 28,
  },
  {
    id: 6,
    name: "Rebecca Aluel Mayen",
    photo: undefined,
    age: 23,
    payam: "Anyidi",
    payamColor: "#E84142",
    profession: "Environmental Scientist",
    education: "Environmental Science - University of Nairobi",
    skills: ["Climate Research", "Water Management", "Environmental Policy", "Data Analysis"],
    bio: "Researching climate adaptation strategies for South Sudanese communities. Published papers on water conservation.",
    isVerified: false,
    endorsements: 12,
  }
];

const payamOptions = [
  { value: "all", label: "All Payams", color: "#6B7280" },
  { value: "anyidi", label: "Anyidi", color: "#E84142" },
  { value: "baidit", label: "Baidit", color: "#3498DB" },
  { value: "jalle", label: "Jalle", color: "#8E44AD" },
  { value: "kolnyang", label: "Kolnyang", color: "#F39C12" },
  { value: "makuach", label: "Makuach", color: "#27AE60" }
];

const Profiles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPayam, setSelectedPayam] = useState("all");
  const [selectedSkill, setSelectedSkill] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const allSkills = Array.from(new Set(mockProfiles.flatMap(profile => profile.skills)));
  
  const filteredProfiles = mockProfiles.filter(profile => {
    const matchesSearch = profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         profile.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         profile.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesPayam = selectedPayam === "all" || 
                        profile.payam.toLowerCase() === selectedPayam;
    
    const matchesSkill = selectedSkill === "all" || !selectedSkill || 
                        profile.skills.some(skill => skill.toLowerCase().includes(selectedSkill.toLowerCase()));
    
    return matchesSearch && matchesPayam && matchesSkill;
  }).sort((a, b) => {
    switch (sortBy) {
      case "endorsements":
        return b.endorsements - a.endorsements;
      case "age":
        return a.age - b.age;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center shadow-warm">
              <Users className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Youth Profiles</h1>
              <p className="text-muted-foreground">Discover talented youth across Bor County</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{filteredProfiles.length} of {mockProfiles.length} profiles</span>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, profession, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="sm:w-auto">
              <Filter className="h-4 w-4 mr-2" />
              Advanced Filters
            </Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <Select value={selectedPayam} onValueChange={setSelectedPayam}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Payam" />
              </SelectTrigger>
              <SelectContent>
                {payamOptions.map(payam => (
                  <SelectItem key={payam.value} value={payam.value}>
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: payam.color }}
                      />
                      {payam.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedSkill} onValueChange={setSelectedSkill}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by skill" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Skills</SelectItem>
                {allSkills.map(skill => (
                  <SelectItem key={skill} value={skill.toLowerCase()}>
                    {skill}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name (A-Z)</SelectItem>
                <SelectItem value="endorsements">Most Endorsed</SelectItem>
                <SelectItem value="age">Age (Youngest)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2">
            {selectedPayam !== "all" && (
              <Badge variant="secondary" className="gap-1">
                <MapPin className="h-3 w-3" />
                {payamOptions.find(p => p.value === selectedPayam)?.label}
                <button 
                  onClick={() => setSelectedPayam("all")}
                  className="ml-1 hover:text-destructive"
                >
                  ×
                </button>
              </Badge>
            )}
            {selectedSkill && selectedSkill !== "all" && (
              <Badge variant="secondary" className="gap-1">
                {selectedSkill}
                <button 
                  onClick={() => setSelectedSkill("all")}
                  className="ml-1 hover:text-destructive"
                >
                  ×
                </button>
              </Badge>
            )}
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfiles.map(profile => (
            <YouthProfileCard key={profile.id} {...profile} />
          ))}
        </div>

        {filteredProfiles.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No profiles found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Profiles;