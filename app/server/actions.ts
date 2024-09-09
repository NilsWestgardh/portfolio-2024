"use server"

import { createClient } from "@/app/utils/supabase/server";
import { cookies } from "next/headers";
import { Projects } from '@/app/lib/types/database'

export async function getProjects(): Promise<Projects> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
    
    if (error) {
      console.log("[Server] Error fetching projects. Response: ", error)
      return []
    }

    return data as Projects
  } catch (error) {
    console.log("[Server] Error fetching projects: ", error)
    return []
  }
}