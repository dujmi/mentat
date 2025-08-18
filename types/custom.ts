import { Database } from "./supabase";

export type Rating = Database["public"]["Tables"]["ratings"]["Row"]
