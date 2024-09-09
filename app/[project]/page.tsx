import React from "react";
// Actions
import { getProjectById } from "@/app/server/actions";
// Types
import type { Project } from "@/app/lib/types/database";

export default async function Project({ 
  params 
}: { 
  params: { project: string } 
}) {
  const projectData: Project | null = await getProjectById(params.project);

  if (!projectData) return null;

  return (
    <div>
      <h1>{projectData.id}</h1>
    </div>
  )
}