import { createClient } from "@supabase/supabase-js";

const URL = 'https://rrdjktgywyocaofjyqju.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyZGprdGd5d3lvY2FvZmp5cWp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODI0MTksImV4cCI6MjA2OTY1ODQxOX0.GKYxQf0_PLAoMEwgqf5UEjAm2zuREnPwx6TdAgqF8Q0';

export const supabase = createClient(URL, API_KEY);

