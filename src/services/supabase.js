import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://avfqylrmzbocupzefphb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2ZnF5bHJtemJvY3VwemVmcGhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc4NjMxMTAsImV4cCI6MjAzMzQzOTExMH0.jGkH35v-v1g6u2EFHSP_m0SXmh_r3M5hzsQzsOQJAQo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
