// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://tkhgdgyqgsfcatyuwlyz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRraGdkZ3lxZ3NmY2F0eXV3bHl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1MDA4NjQsImV4cCI6MjA1NjA3Njg2NH0.Q1UzxN2yQecPzn0wFxqTtDTistlJrVlJrjD30Rb-VbI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);