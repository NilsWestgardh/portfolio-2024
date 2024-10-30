"use server"

import { createClient } from "@/app/utils/supabase/server";
import { cookies } from "next/headers";
import { 
  Project, 
  Projects, 
  Skills,
  Clients, 
} from '@/app/lib/types/database'

export async function getAllProjects(
  cookieStore: ReturnType<typeof cookies>
): Promise<Projects> {
  console.log("[Server] Starting getAllProjects function")

  const supabase = createClient(cookieStore);

  try {
    const { data, error } = await supabase
      .from('nils_projects')
      .select()
      .not('id', 'in', '(nordheim,swimmers-lounge,glow-mode,taco-mode)')
    
    if (error) {
      console.log("[Server] Error fetching projects. Response:", error)
      return []
    }

    console.log("[Server] Projects fetched:", data.length)
    if (data.length > 0) {
      console.log("[Server] Projects fetched (sample):", JSON.stringify(data[0], null, 2))
    }

    return data as Projects
  } catch (error) {
    console.log("[Server] Error fetching projects:", error)
    return []
  }
}

export async function getProjectById(
  cookieStore: ReturnType<typeof cookies>,
  projectId: string
): Promise<Project | null> {
  const supabase = createClient(cookieStore);

  try {
    const { data, error } = await supabase
      .from('nils_projects')
      .select('*')
      .eq('id', projectId)
      .single()
    
    if (error) {
      console.log(`[Server] Error fetching project ${projectId}. Response:`, error)
      return null
    }

    return data as Project
  } catch (error) {
    console.log(`[Server] Error fetching project ${projectId}:`, error)
    return null
  }
}

export async function getSkills(
  cookieStore: ReturnType<typeof cookies>,
): Promise<Skills> {
  const supabase = createClient(cookieStore);

  try {
    const { data, error } = await supabase
      .from('nils_skills')
      .select('*')

    if (error) {
      console.log("[Server] Error fetching skills. Response: ", error)
      return []
    }

    return data as Skills
  } catch (error) {
    console.log("[Server] Error fetching skills: ", error)
    return []
  }
}

export async function getClients(
  cookieStore: ReturnType<typeof cookies>,
): Promise<Clients> {
  const supabase = createClient(cookieStore);

  try {
    const { data, error } = await supabase
      .from('nils_clients')
      .select('*')

    if (error) {
      console.log("[Server] Error fetching clients. Response: ", error)
      return []
    }

    return data as Clients
  } catch (error) {
    console.log("[Server] Error fetching clients: ", error)
    return []
  }
}