import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  MessageSquare, 
  Heart, 
  Share2, 
  Plus,
  Calendar,
  MapPin,
  UserCheck,
  TrendingUp,
  BookOpen,
  Target
} from "lucide-react";
import { useState } from "react";

const communityProjects = [
  {
    id: 1,
    title: "Bor Youth Computer Lab",
    description: "Setting up a computer lab to teach coding and digital skills to local youth",
    organizer: "Peter Chol Mayik",
    organizerAvatar: undefined,
    payam: "Baidit",
    payamColor: "#3498DB",
    participants: 24,
    target: 50,
    deadline: "2024-10-30",
    category: "technology",
    tags: ["Education", "Technology", "Capacity Building"],
    status: "active",
    progress: 60
  },
  {
    id: 2,
    title: "Clean Water Initiative",
    description: "Building boreholes and water points across rural areas of Bor County",
    organizer: "Mary Nyankiir Garang",
    organizerAvatar: undefined,
    payam: "Kolnyang",
    payamColor: "#F39C12",
    participants: 31,
    target: 40,
    deadline: "2024-09-15",
    category: "infrastructure",
    tags: ["Water", "Health", "Community Development"],
    status: "urgent",
    progress: 75
  },
  {
    id: 3,
    title: "Youth Agricultural Cooperative",
    description: "Creating a cooperative to support young farmers with seeds, tools, and market access",
    organizer: "John Mabior Dut",
    organizerAvatar: undefined,
    payam: "Makuach",
    payamColor: "#27AE60",
    participants: 18,
    target: 25,
    deadline: "2024-11-20",
    category: "agriculture",
    tags: ["Agriculture", "Economic Development", "Food Security"],
    status: "active",
    progress: 40
  }
];

const discussions = [
  {
    id: 1,
    title: "How can we improve internet connectivity in Bor?",
    author: "Akol Deng Majok",
    authorAvatar: undefined,
    category: "technology",
    replies: 12,
    likes: 8,
    lastActivity: "2 hours ago",
    content: "Many young people are struggling with poor internet connectivity. What solutions can we implement locally?"
  },
  {
    id: 2,
    title: "Traditional medicine vs modern healthcare",
    author: "Grace Adut Kon",
    authorAvatar: undefined,
    category: "healthcare",
    replies: 15,
    likes: 11,
    lastActivity: "4 hours ago",
    content: "How can we better integrate traditional healing practices with modern medical care?"
  },
  {
    id: 3,
    title: "Youth representation in local government",
    author: "Rebecca Aluel Mayen",
    authorAvatar: undefined,
    category: "governance",
    replies: 8,
    likes: 14,
    lastActivity: "1 day ago",
    content: "We need more young voices in decision-making. How can we increase youth participation in governance?"
  }
];

const successStories = [
  {
    id: 1,
    title: "From Bor to Silicon Valley: My Tech Journey",
    author: "David Malong Awan",
    authorAvatar: undefined,
    category: "technology",
    readTime: "5 min read",
    likes: 45,
    shares: 12,
    publishedAt: "3 days ago",
    excerpt: "How I went from learning basic computer skills in Bor to working as a software engineer in California..."
  },
  {
    id: 2,
    title: "Building the First Female-Led Clinic in Rural Bor",
    author: "Dr. Angelina Kon Machar",
    authorAvatar: undefined,
    category: "healthcare",
    readTime: "7 min read",
    likes: 38,
    shares: 15,
    publishedAt: "1 week ago",
    excerpt: "The challenges and triumphs of establishing healthcare services in underserved communities..."
  },
  {
    id: 3,
    title: "How Our Agricultural Innovation Fed 500 Families",
    author: "Michael Deng Majok",
    authorAvatar: undefined,
    category: "agriculture",
    readTime: "6 min read",
    likes: 29,
    shares: 8,
    publishedAt: "2 weeks ago",
    excerpt: "Introducing drought-resistant crops and modern farming techniques to boost food security..."
  }
];

const Community = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [showNewProject, setShowNewProject] = useState(false);

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2);
  };

  const ProjectCard = ({ project }: { project: any }) => (
    <Card className="transition-all hover:shadow-warm">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
              <div className="flex items-center gap-1">
                <Avatar className="w-5 h-5">
                  <AvatarImage src={project.organizerAvatar} />
                  <AvatarFallback className="text-xs bg-gradient-hero text-primary-foreground">
                    {getInitials(project.organizer)}
                  </AvatarFallback>
                </Avatar>
                {project.organizer}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span style={{ color: project.payamColor }}>{project.payam}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Badge 
              variant={project.status === "urgent" ? "destructive" : "secondary"}
              className="capitalize"
            >
              {project.status}
            </Badge>
            <Badge variant="outline" className="capitalize">
              {project.category}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-1">
            {project.tags.map((tag: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Participants</span>
              <span className="font-medium">{project.participants}/{project.target}</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className="bg-gradient-hero h-2 rounded-full transition-all"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              Due {project.deadline}
            </div>
            <Button size="sm">
              Join Project
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const DiscussionCard = ({ discussion }: { discussion: any }) => (
    <Card className="transition-all hover:shadow-warm">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-medium text-foreground hover:text-primary cursor-pointer">
              {discussion.title}
            </h3>
            <Badge variant="outline" className="capitalize">
              {discussion.category}
            </Badge>
          </div>
          
          <p className="text-muted-foreground text-sm">{discussion.content}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Avatar className="w-6 h-6">
                  <AvatarImage src={discussion.authorAvatar} />
                  <AvatarFallback className="text-xs bg-gradient-hero text-primary-foreground">
                    {getInitials(discussion.author)}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">{discussion.author}</span>
              </div>
              <span className="text-xs text-muted-foreground">{discussion.lastActivity}</span>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <button className="flex items-center gap-1 hover:text-primary transition-colors">
                <Heart className="h-4 w-4" />
                {discussion.likes}
              </button>
              <button className="flex items-center gap-1 hover:text-accent transition-colors">
                <MessageSquare className="h-4 w-4" />
                {discussion.replies}
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const StoryCard = ({ story }: { story: any }) => (
    <Card className="transition-all hover:shadow-warm">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-foreground hover:text-primary cursor-pointer mb-2">
                {story.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-3">{story.excerpt}</p>
            </div>
            <Badge variant="outline" className="capitalize">
              {story.category}
            </Badge>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src={story.authorAvatar} />
                <AvatarFallback className="text-xs bg-gradient-hero text-primary-foreground">
                  {getInitials(story.author)}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-medium">{story.author}</div>
                <div className="text-xs text-muted-foreground">{story.publishedAt} • {story.readTime}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <button className="flex items-center gap-1 hover:text-primary transition-colors">
                <Heart className="h-4 w-4" />
                {story.likes}
              </button>
              <button className="flex items-center gap-1 hover:text-accent transition-colors">
                <Share2 className="h-4 w-4" />
                {story.shares}
              </button>
            </div>
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
              <Users className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Community</h1>
              <p className="text-muted-foreground">Connect, collaborate, and create positive change together</p>
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <Target className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{communityProjects.length}</div>
              <div className="text-xs text-muted-foreground">Active Projects</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <MessageSquare className="h-6 w-6 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{discussions.length}</div>
              <div className="text-xs text-muted-foreground">Discussions</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <BookOpen className="h-6 w-6 text-success mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{successStories.length}</div>
              <div className="text-xs text-muted-foreground">Success Stories</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-6 w-6 text-warning mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">73</div>
              <div className="text-xs text-muted-foreground">Total Participants</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="projects" className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                Projects
              </TabsTrigger>
              <TabsTrigger value="discussions" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Discussions
              </TabsTrigger>
              <TabsTrigger value="stories" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Stories
              </TabsTrigger>
            </TabsList>
            
            <Button 
              onClick={() => setShowNewProject(!showNewProject)}
              className="gap-2"
            >
              <Plus className="h-4 w-4" />
              Create New
            </Button>
          </div>

          <TabsContent value="projects" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {communityProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="discussions" className="space-y-6">
            <div className="space-y-4">
              {discussions.map(discussion => (
                <DiscussionCard key={discussion.id} discussion={discussion} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="stories" className="space-y-6">
            <div className="space-y-4">
              {successStories.map(story => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Create New Form (when shown) */}
        {showNewProject && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Create New {activeTab.slice(0, -1)}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Title" />
              <Textarea placeholder="Description" rows={4} />
              <div className="flex gap-4">
                <Button>Create</Button>
                <Button variant="outline" onClick={() => setShowNewProject(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Community;