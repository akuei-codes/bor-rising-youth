import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import YouthProfileCard from "./YouthProfileCard";
import { supabase } from "@/integrations/supabase/client";
import { Filter, Search, Grid, List } from "lucide-react";

const YouthShowcase = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterOpen, setFilterOpen] = useState(false);
  const [profiles, setProfiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('is_profile_complete', true)
        .order('created_at', { ascending: false })
        .limit(6);

      if (error) throw error;
      
      // Transform the data to match YouthProfileCard props
      const transformedProfiles = data?.map(profile => ({
        name: profile.display_name || 'Anonymous',
        age: profile.birthday ? calculateAge(profile.birthday) : null,
        payam: profile.payam || 'Unknown',
        payamColor: getPayamColor(profile.payam),
        profession: profile.current_profession || 'Not specified',
        education: profile.education_level ? `${profile.education_level}${profile.institution ? `, ${profile.institution}` : ''}` : 'Not specified',
        skills: profile.skills || [],
        bio: profile.bio || 'No bio available',
        isVerified: profile.is_verified || false,
        endorsements: profile.endorsements || 0,
        spotlightWeek: false, // This could be determined by some criteria
        photo: profile.profile_picture_url
      })) || [];

      setProfiles(transformedProfiles);
    } catch (error) {
      console.error('Error fetching profiles:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateAge = (birthday: string) => {
    if (!birthday) return null;
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const getPayamColor = (payam: string) => {
    const colors: { [key: string]: string } = {
      'Anyidi': '#D97706',
      'Baidit': '#2563EB', 
      'Jalle': '#059669',
      'Kolnyang': '#7C3AED',
      'Makuach': '#DC2626'
    };
    return colors[payam] || '#6B7280';
  };


  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Youth Profiles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the inspiring young people of Bor County who are making a difference 
            in their communities and beyond.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by name, skill, or profession..."
                className="pl-10 pr-4 py-2 w-80 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">View:</span>
            <div className="flex border border-border rounded-lg overflow-hidden">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Filter Panel */}
        {filterOpen && (
          <div className="bg-card border border-border rounded-lg p-6 mb-8 space-y-4">
            <h3 className="font-semibold text-foreground mb-4">Filter Options</h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Payam</label>
                <select className="w-full border border-border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option value="">All Payams</option>
                  <option value="anyidi">Anyidi</option>
                  <option value="baidit">Baidit</option>
                  <option value="jalle">Jalle</option>
                  <option value="kolnyang">Kolnyang</option>
                  <option value="makuach">Makuach</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Age Range</label>
                <select className="w-full border border-border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option value="">All Ages</option>
                  <option value="18-22">18-22</option>
                  <option value="23-27">23-27</option>
                  <option value="28-32">28-32</option>
                  <option value="33+">33+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Profession</label>
                <select className="w-full border border-border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option value="">All Professions</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="agriculture">Agriculture</option>
                  <option value="business">Business</option>
                  <option value="arts">Arts & Culture</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Verification</label>
                <select className="w-full border border-border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option value="">All Users</option>
                  <option value="verified">Verified Only</option>
                  <option value="unverified">Unverified</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-4 border-t border-border">
              <Button variant="outline" size="sm" onClick={() => setFilterOpen(false)}>
                Clear Filters
              </Button>
              <Button size="sm">
                Apply Filters
              </Button>
            </div>
          </div>
        )}

        {/* Youth Profiles Grid */}
        {loading ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Loading profiles...</p>
          </div>
        ) : (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'md:grid-cols-2 lg:grid-cols-3' 
              : 'max-w-4xl mx-auto'
          }`}>
            {profiles.length > 0 ? profiles.map((profile, index) => (
              <YouthProfileCard key={index} {...profile} />
            )) : (
              <div className="text-center py-12 col-span-full">
                <p className="text-muted-foreground">No youth profiles available yet.</p>
              </div>
            )}
          </div>
        )}

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            Load More Profiles
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Showing {profiles.length} youth profiles
          </p>
        </div>
      </div>
    </section>
  );
};

export default YouthShowcase;