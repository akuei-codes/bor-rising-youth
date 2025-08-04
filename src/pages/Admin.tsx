import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Users, 
  Briefcase, 
  GraduationCap, 
  DollarSign, 
  MapPin,
  FolderKanban,
  Settings,
  BarChart3
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(false);

  // Data states
  const [jobs, setJobs] = useState<any[]>([]);
  const [trainings, setTrainings] = useState<any[]>([]);
  const [scholarships, setScholarships] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [locations, setLocations] = useState<any[]>([]);
  const [profiles, setProfiles] = useState<any[]>([]);

  // Form states
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [currentForm, setCurrentForm] = useState<string>("");
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/signin');
      return;
    }
    
    if (user) {
      fetchAllData();
    }
  }, [user, authLoading, navigate]);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [jobsRes, trainingsRes, scholarshipsRes, projectsRes, locationsRes, profilesRes] = await Promise.all([
        (supabase as any).from('jobs').select('*').order('created_at', { ascending: false }),
        (supabase as any).from('training_programs').select('*').order('created_at', { ascending: false }),
        (supabase as any).from('scholarships').select('*').order('created_at', { ascending: false }),
        (supabase as any).from('projects').select('*').order('created_at', { ascending: false }),
        (supabase as any).from('community_locations').select('*').order('created_at', { ascending: false }),
        supabase.from('profiles').select('*').order('created_at', { ascending: false })
      ]);

      setJobs(jobsRes.data || []);
      setTrainings(trainingsRes.data || []);
      setScholarships(scholarshipsRes.data || []);
      setProjects(projectsRes.data || []);
      setLocations(locationsRes.data || []);
      setProfiles(profilesRes.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast({
        title: "Error",
        description: "Failed to fetch data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (table: string, data: any) => {
    try {
      const { error } = await (supabase as any)
        .from(table)
        .insert([{ ...data, created_by: user?.id }]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Item created successfully",
      });

      setIsCreateDialogOpen(false);
      setFormData({});
      fetchAllData();
    } catch (error) {
      console.error('Error creating item:', error);
      toast({
        title: "Error",
        description: "Failed to create item",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (table: string, id: string) => {
    try {
      const { error } = await (supabase as any)
        .from(table)
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Item deleted successfully",
      });

      fetchAllData();
    } catch (error) {
      console.error('Error deleting item:', error);
      toast({
        title: "Error",
        description: "Failed to delete item",
        variant: "destructive",
      });
    }
  };

  const openCreateDialog = (formType: string) => {
    setCurrentForm(formType);
    setFormData({});
    setIsCreateDialogOpen(true);
  };

  const renderCreateForm = () => {
    switch (currentForm) {
      case 'job':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Job Title</Label>
              <Input
                id="title"
                value={formData.title || ''}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder="Enter job title"
              />
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                value={formData.company || ''}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                placeholder="Enter company name"
              />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location || ''}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                placeholder="Enter location"
              />
            </div>
            <div>
              <Label htmlFor="type">Job Type</Label>
              <Select onValueChange={(value) => setFormData({...formData, type: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select job type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Part-time">Part-time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                  <SelectItem value="Internship">Internship</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="salary">Salary</Label>
              <Input
                id="salary"
                value={formData.salary || ''}
                onChange={(e) => setFormData({...formData, salary: e.target.value})}
                placeholder="Enter salary range"
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description || ''}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Enter job description"
              />
            </div>
            <div>
              <Label htmlFor="deadline">Application Deadline</Label>
              <Input
                id="deadline"
                type="date"
                value={formData.deadline || ''}
                onChange={(e) => setFormData({...formData, deadline: e.target.value})}
              />
            </div>
            <Button onClick={() => handleCreate('jobs', formData)} className="w-full">
              Create Job
            </Button>
          </div>
        );

      case 'training':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Training Title</Label>
              <Input
                id="title"
                value={formData.title || ''}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder="Enter training title"
              />
            </div>
            <div>
              <Label htmlFor="provider">Provider</Label>
              <Input
                id="provider"
                value={formData.provider || ''}
                onChange={(e) => setFormData({...formData, provider: e.target.value})}
                placeholder="Enter provider name"
              />
            </div>
            <div>
              <Label htmlFor="duration">Duration</Label>
              <Input
                id="duration"
                value={formData.duration || ''}
                onChange={(e) => setFormData({...formData, duration: e.target.value})}
                placeholder="e.g., 6 weeks"
              />
            </div>
            <div>
              <Label htmlFor="level">Level</Label>
              <Select onValueChange={(value) => setFormData({...formData, level: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="cost">Cost</Label>
              <Input
                id="cost"
                value={formData.cost || ''}
                onChange={(e) => setFormData({...formData, cost: e.target.value})}
                placeholder="Enter cost or 'Free'"
              />
            </div>
            <div>
              <Label htmlFor="spots">Available Spots</Label>
              <Input
                id="spots"
                type="number"
                value={formData.spots || ''}
                onChange={(e) => setFormData({...formData, spots: parseInt(e.target.value)})}
                placeholder="Enter number of spots"
              />
            </div>
            <div>
              <Label htmlFor="start_date">Start Date</Label>
              <Input
                id="start_date"
                type="date"
                value={formData.start_date || ''}
                onChange={(e) => setFormData({...formData, start_date: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description || ''}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Enter training description"
              />
            </div>
            <Button onClick={() => handleCreate('training_programs', formData)} className="w-full">
              Create Training Program
            </Button>
          </div>
        );

      case 'scholarship':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Scholarship Title</Label>
              <Input
                id="title"
                value={formData.title || ''}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder="Enter scholarship title"
              />
            </div>
            <div>
              <Label htmlFor="provider">Provider</Label>
              <Input
                id="provider"
                value={formData.provider || ''}
                onChange={(e) => setFormData({...formData, provider: e.target.value})}
                placeholder="Enter provider name"
              />
            </div>
            <div>
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                value={formData.amount || ''}
                onChange={(e) => setFormData({...formData, amount: e.target.value})}
                placeholder="Enter scholarship amount"
              />
            </div>
            <div>
              <Label htmlFor="deadline">Application Deadline</Label>
              <Input
                id="deadline"
                type="date"
                value={formData.deadline || ''}
                onChange={(e) => setFormData({...formData, deadline: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description || ''}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Enter scholarship description"
              />
            </div>
            <Button onClick={() => handleCreate('scholarships', formData)} className="w-full">
              Create Scholarship
            </Button>
          </div>
        );

      case 'project':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Project Title</Label>
              <Input
                id="title"
                value={formData.title || ''}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder="Enter project title"
              />
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
              <Select onValueChange={(value) => setFormData({...formData, category: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="Agriculture">Agriculture</SelectItem>
                  <SelectItem value="Environment">Environment</SelectItem>
                  <SelectItem value="Community">Community</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="status">Status</Label>
              <Select onValueChange={(value) => setFormData({...formData, status: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Planning">Planning</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                  <SelectItem value="On Hold">On Hold</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="lead_name">Project Lead</Label>
              <Input
                id="lead_name"
                value={formData.lead_name || ''}
                onChange={(e) => setFormData({...formData, lead_name: e.target.value})}
                placeholder="Enter project lead name"
              />
            </div>
            <div>
              <Label htmlFor="goal">Goal</Label>
              <Input
                id="goal"
                value={formData.goal || ''}
                onChange={(e) => setFormData({...formData, goal: e.target.value})}
                placeholder="Enter project goal"
              />
            </div>
            <div>
              <Label htmlFor="start_date">Start Date</Label>
              <Input
                id="start_date"
                type="date"
                value={formData.start_date || ''}
                onChange={(e) => setFormData({...formData, start_date: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description || ''}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Enter project description"
              />
            </div>
            <Button onClick={() => handleCreate('projects', formData)} className="w-full">
              Create Project
            </Button>
          </div>
        );

      case 'location':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Location Name</Label>
              <Input
                id="name"
                value={formData.name || ''}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Enter location name"
              />
            </div>
            <div>
              <Label htmlFor="type">Type</Label>
              <Select onValueChange={(value) => setFormData({...formData, type: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Community Center">Community Center</SelectItem>
                  <SelectItem value="School">School</SelectItem>
                  <SelectItem value="Health Center">Health Center</SelectItem>
                  <SelectItem value="Market">Market</SelectItem>
                  <SelectItem value="Government Office">Government Office</SelectItem>
                  <SelectItem value="NGO Office">NGO Office</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="location">Address</Label>
              <Input
                id="location"
                value={formData.location || ''}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                placeholder="Enter address"
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description || ''}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Enter location description"
              />
            </div>
            <Button onClick={() => handleCreate('community_locations', formData)} className="w-full">
              Create Location
            </Button>
          </div>
        );

      default:
        return <div>Select a form type</div>;
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading admin dashboard...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage all platform content and users</p>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="jobs" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Jobs ({jobs.length})
              </TabsTrigger>
              <TabsTrigger value="training" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Training ({trainings.length})
              </TabsTrigger>
              <TabsTrigger value="scholarships" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Scholarships ({scholarships.length})
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex items-center gap-2">
                <FolderKanban className="h-4 w-4" />
                Projects ({projects.length})
              </TabsTrigger>
              <TabsTrigger value="locations" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Locations ({locations.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{profiles.length}</div>
                    <p className="text-xs text-muted-foreground">Registered profiles</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{jobs.length}</div>
                    <p className="text-xs text-muted-foreground">Job opportunities</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Training Programs</CardTitle>
                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{trainings.length}</div>
                    <p className="text-xs text-muted-foreground">Available programs</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Projects</CardTitle>
                    <FolderKanban className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{projects.length}</div>
                    <p className="text-xs text-muted-foreground">Community projects</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="jobs" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Job Management</h2>
                <Button onClick={() => openCreateDialog('job')} className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Job
                </Button>
              </div>
              <div className="grid gap-4">
                {jobs.map((job) => (
                  <Card key={job.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{job.title}</CardTitle>
                          <p className="text-muted-foreground">{job.company} • {job.location}</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="secondary">{job.type}</Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete('jobs', job.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{job.description}</p>
                      <div className="mt-2 text-xs text-muted-foreground">
                        Deadline: {job.deadline ? new Date(job.deadline).toLocaleDateString() : 'Not set'}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="training" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Training Program Management</h2>
                <Button onClick={() => openCreateDialog('training')} className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Training
                </Button>
              </div>
              <div className="grid gap-4">
                {trainings.map((training) => (
                  <Card key={training.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{training.title}</CardTitle>
                          <p className="text-muted-foreground">{training.provider} • {training.duration}</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="secondary">{training.level}</Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete('training_programs', training.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{training.description}</p>
                      <div className="mt-2 text-xs text-muted-foreground">
                        Start: {training.start_date ? new Date(training.start_date).toLocaleDateString() : 'TBA'} • 
                        Spots: {training.spots || 'Unlimited'}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="scholarships" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Scholarship Management</h2>
                <Button onClick={() => openCreateDialog('scholarship')} className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Scholarship
                </Button>
              </div>
              <div className="grid gap-4">
                {scholarships.map((scholarship) => (
                  <Card key={scholarship.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{scholarship.title}</CardTitle>
                          <p className="text-muted-foreground">{scholarship.provider}</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            {scholarship.amount}
                          </Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete('scholarships', scholarship.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{scholarship.description}</p>
                      <div className="mt-2 text-xs text-muted-foreground">
                        Deadline: {scholarship.deadline ? new Date(scholarship.deadline).toLocaleDateString() : 'Not set'}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Project Management</h2>
                <Button onClick={() => openCreateDialog('project')} className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Project
                </Button>
              </div>
              <div className="grid gap-4">
                {projects.map((project) => (
                  <Card key={project.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{project.title}</CardTitle>
                          <p className="text-muted-foreground">Lead: {project.lead_name}</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="secondary">{project.status}</Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete('projects', project.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                      <div className="mt-2 text-xs text-muted-foreground">
                        Category: {project.category} • Participants: {project.participants || 0}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="locations" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Location Management</h2>
                <Button onClick={() => openCreateDialog('location')} className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Location
                </Button>
              </div>
              <div className="grid gap-4">
                {locations.map((location) => (
                  <Card key={location.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{location.name}</CardTitle>
                          <p className="text-muted-foreground">{location.type} • {location.location}</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="secondary">
                            {location.members || 0} members
                          </Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete('community_locations', location.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{location.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Create New {currentForm}</DialogTitle>
          </DialogHeader>
          {renderCreateForm()}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;