import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Users, Mail, User, Phone, MapPin, Briefcase } from "lucide-react";

const JoinCommunity = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center shadow-warm mx-auto mb-4">
              <Users className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Join Our Community</h1>
            <p className="text-muted-foreground">
              Become part of the Bor Rising movement and help drive positive change
            </p>
          </div>

          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle className="text-center">Create Your Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      placeholder="Enter your phone number"
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    min="16"
                    max="35"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="location"
                    placeholder="e.g., Bor, South Sudan"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interests">Areas of Interest</Label>
                <Select>
                  <SelectTrigger>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <SelectValue placeholder="Select your main area of interest" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology & Innovation</SelectItem>
                    <SelectItem value="agriculture">Agriculture & Farming</SelectItem>
                    <SelectItem value="education">Education & Training</SelectItem>
                    <SelectItem value="healthcare">Healthcare & Wellness</SelectItem>
                    <SelectItem value="business">Business & Entrepreneurship</SelectItem>
                    <SelectItem value="arts">Arts & Culture</SelectItem>
                    <SelectItem value="environment">Environment & Sustainability</SelectItem>
                    <SelectItem value="community">Community Development</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Skills & Expertise</Label>
                <Input
                  id="skills"
                  placeholder="e.g., Web Development, Leadership, Photography (comma-separated)"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Tell us about yourself</Label>
                <Textarea
                  id="bio"
                  placeholder="Share your background, goals, and how you'd like to contribute to the community..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="motivation">Why do you want to join Bor Rising?</Label>
                <Textarea
                  id="motivation"
                  placeholder="What motivates you to be part of this community?"
                  rows={3}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="rounded"
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <a href="#" className="text-primary hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-primary hover:underline">
                      Privacy Policy
                    </a>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="rounded"
                  />
                  <Label htmlFor="newsletter" className="text-sm">
                    I'd like to receive community updates and opportunities via email
                  </Label>
                </div>
              </div>

              <Button className="w-full bg-gradient-hero hover:shadow-warm transition-all">
                Join the Community
              </Button>

              <div className="relative">
                <Separator />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-background px-2 text-muted-foreground text-sm">
                    or join with
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <Button variant="outline" className="w-full">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </Button>
                <Button variant="outline" className="w-full">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Continue with Facebook
                </Button>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <a href="/signin" className="text-primary hover:underline font-medium">
                  Sign in here
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;