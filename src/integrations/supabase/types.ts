export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      profiles: {
        Row: {
          achievements: string[] | null
          bio: string | null
          birthday: string | null
          community_roles: string[] | null
          created_at: string | null
          current_profession: string | null
          display_name: string | null
          education_level: Database["public"]["Enums"]["education_level"] | null
          email_public: string | null
          endorsements: number | null
          facebook_url: string | null
          field_of_study: string | null
          graduation_year: number | null
          id: string
          institution: string | null
          interests: string[] | null
          is_profile_complete: boolean | null
          is_verified: boolean | null
          languages: string[] | null
          legal_name: string | null
          linkedin_url: string | null
          location: string | null
          payam: Database["public"]["Enums"]["payam_type"] | null
          phone_number: string | null
          profile_picture_url: string | null
          profile_views: number | null
          sex: Database["public"]["Enums"]["sex_type"] | null
          show_age_publicly: boolean | null
          skills: string[] | null
          updated_at: string | null
          user_id: string
          volunteer_experience: Json | null
          website_url: string | null
          work_experience: Json | null
        }
        Insert: {
          achievements?: string[] | null
          bio?: string | null
          birthday?: string | null
          community_roles?: string[] | null
          created_at?: string | null
          current_profession?: string | null
          display_name?: string | null
          education_level?:
            | Database["public"]["Enums"]["education_level"]
            | null
          email_public?: string | null
          endorsements?: number | null
          facebook_url?: string | null
          field_of_study?: string | null
          graduation_year?: number | null
          id?: string
          institution?: string | null
          interests?: string[] | null
          is_profile_complete?: boolean | null
          is_verified?: boolean | null
          languages?: string[] | null
          legal_name?: string | null
          linkedin_url?: string | null
          location?: string | null
          payam?: Database["public"]["Enums"]["payam_type"] | null
          phone_number?: string | null
          profile_picture_url?: string | null
          profile_views?: number | null
          sex?: Database["public"]["Enums"]["sex_type"] | null
          show_age_publicly?: boolean | null
          skills?: string[] | null
          updated_at?: string | null
          user_id: string
          volunteer_experience?: Json | null
          website_url?: string | null
          work_experience?: Json | null
        }
        Update: {
          achievements?: string[] | null
          bio?: string | null
          birthday?: string | null
          community_roles?: string[] | null
          created_at?: string | null
          current_profession?: string | null
          display_name?: string | null
          education_level?:
            | Database["public"]["Enums"]["education_level"]
            | null
          email_public?: string | null
          endorsements?: number | null
          facebook_url?: string | null
          field_of_study?: string | null
          graduation_year?: number | null
          id?: string
          institution?: string | null
          interests?: string[] | null
          is_profile_complete?: boolean | null
          is_verified?: boolean | null
          languages?: string[] | null
          legal_name?: string | null
          linkedin_url?: string | null
          location?: string | null
          payam?: Database["public"]["Enums"]["payam_type"] | null
          phone_number?: string | null
          profile_picture_url?: string | null
          profile_views?: number | null
          sex?: Database["public"]["Enums"]["sex_type"] | null
          show_age_publicly?: boolean | null
          skills?: string[] | null
          updated_at?: string | null
          user_id?: string
          volunteer_experience?: Json | null
          website_url?: string | null
          work_experience?: Json | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      calculate_age: {
        Args: { birthday: string }
        Returns: number
      }
    }
    Enums: {
      education_level:
        | "Primary"
        | "Secondary"
        | "Diploma"
        | "Bachelor"
        | "Master"
        | "PhD"
        | "Other"
      payam_type: "Anyidi" | "Baidit" | "Jalle" | "Kolnyang" | "Makuach"
      sex_type: "Male" | "Female"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      education_level: [
        "Primary",
        "Secondary",
        "Diploma",
        "Bachelor",
        "Master",
        "PhD",
        "Other",
      ],
      payam_type: ["Anyidi", "Baidit", "Jalle", "Kolnyang", "Makuach"],
      sex_type: ["Male", "Female"],
    },
  },
} as const
