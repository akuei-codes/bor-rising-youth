-- Create enum for payams
CREATE TYPE public.payam_type AS ENUM ('Anyidi', 'Baidit', 'Jalle', 'Kolnyang', 'Makuach');

-- Create enum for sex
CREATE TYPE public.sex_type AS ENUM ('Male', 'Female');

-- Create enum for education levels
CREATE TYPE public.education_level AS ENUM ('Primary', 'Secondary', 'Diploma', 'Bachelor', 'Master', 'PhD', 'Other');

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  
  -- Basic Information
  legal_name TEXT,
  display_name TEXT,
  bio TEXT,
  profile_picture_url TEXT,
  
  -- Demographics
  birthday DATE,
  sex sex_type,
  payam payam_type,
  location TEXT,
  show_age_publicly BOOLEAN DEFAULT false,
  
  -- Professional Information
  current_profession TEXT,
  education_level education_level,
  institution TEXT,
  graduation_year INTEGER,
  field_of_study TEXT,
  
  -- Work Experience
  work_experience JSONB DEFAULT '[]'::jsonb, -- Array of work experience objects
  skills TEXT[] DEFAULT '{}',
  languages TEXT[] DEFAULT '{}',
  
  -- Community & Personal
  interests TEXT[] DEFAULT '{}',
  achievements TEXT[] DEFAULT '{}',
  community_roles TEXT[] DEFAULT '{}',
  volunteer_experience JSONB DEFAULT '[]'::jsonb,
  
  -- Contact & Social
  phone_number TEXT,
  email_public TEXT,
  linkedin_url TEXT,
  facebook_url TEXT,
  website_url TEXT,
  
  -- Status & Verification
  is_verified BOOLEAN DEFAULT false,
  is_profile_complete BOOLEAN DEFAULT false,
  endorsements INTEGER DEFAULT 0,
  profile_views INTEGER DEFAULT 0,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view complete profiles" 
ON public.profiles 
FOR SELECT 
USING (is_profile_complete = true);

CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Create function to calculate age
CREATE OR REPLACE FUNCTION public.calculate_age(birthday DATE)
RETURNS INTEGER AS $$
BEGIN
  RETURN EXTRACT(YEAR FROM AGE(birthday));
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (
    user_id,
    display_name,
    email_public
  )
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data ->> 'name', NEW.raw_user_meta_data ->> 'full_name'),
    NEW.email
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for automatic profile creation
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE FUNCTION public.handle_new_user();