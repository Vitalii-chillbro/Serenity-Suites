import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mrorbvrwisbndndxovet.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1yb3JidnJ3aXNibmRuZHhvdmV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0OTA2NjAsImV4cCI6MjAyMzA2NjY2MH0.OEmGGW-39oDMm_mZEHhyTEuL7i0oaoEYhkxBqyrco0c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
