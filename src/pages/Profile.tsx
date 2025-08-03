import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Star, 
  Heart, 
  MessageCircle,
  Phone,
  Mail,
  Globe,
  Calendar,
  Award,
  Users,
  Target,
  BookOpen
} from "lucide-react";

// Mock data - in real app this would come from API based on params.id
const profileData = {
  id: 1,
  name: "Akol Deng Majok",
  photo: undefined,
  age: 24,
  payam: "Anyidi",
  payamColor: "#E84142",
  profession: "Software Developer",
  education: "Computer Science - University of Juba",
  skills: ["React", "Python", "Mobile Development", "UI/UX Design", "Django", "TypeScript", "Git", "Agile"],
  bio: "Passionate about using technology to solve local problems. Currently working on a mobile app for farmers in Bor County. I believe in the power of technology to transform our community and create opportunities for our youth.",
  isVerified: true,
  endorsements: 23,
  spotlightWeek: true,
  contact: {
    phone: "+211 912 345 678",
    email: "akol.deng@email.com",
    website: "https://akoldeng.dev"
  },
  experience: [
    {
      title: "Software Developer",
      company: "TechHub Juba",
      period: "2023 - Present",
      description: "Developing web and mobile applications for local businesses and NGOs"
    },
    {
      title: "IT Support Specialist",
      company: "Bor County Office",
      period: "2022 - 2023",
      description: "Maintained computer systems and trained staff on digital tools"
    }
  ],
  projects: [
    {
      title: "Bor Youth Computer Lab",
      role: "Technical Lead",
      status: "Active",
      description: "Setting up coding education for local youth"
    },
    {
      title: "FarmConnect Mobile App",
      role: "Lead Developer",
      status: "In Development",
      description: "Connecting farmers with markets and agricultural information"
    }
  ],
  achievements: [
    {
      title: "Youth Innovation Award",
      issuer: "South Sudan Ministry of Youth",
      year: "2023",
      description: "For outstanding contribution to youth technology education"
    },
    {
      title: "Community Leader Certificate",
      issuer: "Anyidi Payam Council",
      year: "2023",
      description: "Recognition for community development initiatives"
    }
  ],
  languages: ["Dinka", "English", "Arabic"],
  joinedDate: "March 2023"
};

const Profile = () => {
  const { id } = useParams();
  const profile = profileData; // In real app: fetch profile by id
  
  const initials = profile.name.split(' ').map(n => n[0]).join('').substring(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Avatar and Basic Info */}
              <div className="flex flex-col items-center md:items-start">
                <div className="relative mb-4">
                  <Avatar className="w-32 h-32 border-4 border-primary/10">
                    <AvatarImage src={profile.photo} alt={profile.name} />
                    <AvatarFallback className="bg-gradient-hero text-primary-foreground text-2xl font-bold">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  {profile.isVerified && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center border-4 border-background">
                      <Star className="h-4 w-4 text-success-foreground fill-current" />
                    </div>
                  )}
                  {profile.spotlightWeek && (
                    <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-hero text-primary-foreground">
                      <Star className="h-3 w-3 mr-1" />
                      Spotlight
                    </Badge>
                  )}
                </div>
                
                <div className="text-center md:text-left">
                  <h1 className="text-3xl font-bold text-foreground mb-2">{profile.name}</h1>
                  <p className="text-lg text-muted-foreground mb-2">Age {profile.age}</p>
                  <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span style={{ color: profile.payamColor }} className="font-medium">
                      {profile.payam} Payam
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 justify-center md:justify-start">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{profile.endorsements} endorsements</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Member since {profile.joinedDate}
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Info */}
              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-2">About</h2>
                  <p className="text-muted-foreground leading-relaxed">{profile.bio}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-foreground mb-3 flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-accent" />
                      Current Role
                    </h3>
                    <p className="text-muted-foreground">{profile.profession}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-foreground mb-3 flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-success" />
                      Education
                    </h3>
                    <p className="text-muted-foreground">{profile.education}</p>
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="font-medium text-foreground mb-3">Contact Information</h3>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={`tel:${profile.contact.phone}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      {profile.contact.phone}
                    </a>
                    <a 
                      href={`mailto:${profile.contact.email}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      {profile.contact.email}
                    </a>
                    <a 
                      href={profile.contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Globe className="h-4 w-4" />
                      Portfolio
                    </a>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button className="bg-gradient-hero hover:shadow-warm transition-all">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Connect
                  </Button>
                  <Button variant="outline">
                    <Heart className="h-4 w-4 mr-2" />
                    Endorse
                  </Button>
                  <Button variant="outline">
                    Share Profile
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="skills" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="skills">Skills & Languages</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="skills" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.languages.map((language, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience" className="space-y-4">
            {profile.experience.map((exp, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="projects" className="space-y-4">
            {profile.projects.map((project, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                      <p className="text-accent font-medium">{project.role}</p>
                    </div>
                    <Badge 
                      variant={project.status === "Active" ? "default" : "secondary"}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="achievements" className="space-y-4">
            {profile.achievements.map((achievement, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center shadow-warm">
                      <Award className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{achievement.title}</h3>
                        <Badge variant="outline">{achievement.year}</Badge>
                      </div>
                      <p className="text-accent font-medium mb-2">{achievement.issuer}</p>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Profile;