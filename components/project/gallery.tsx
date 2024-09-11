import React, { Suspense } from "react";
// Actions
import { getAllProjects } from "@/app/server/actions";
// Types
import { Projects } from "@/app/lib/types/database";
// Components
import { Skeleton } from "@/components/ui/skeleton";
import { AspectRatio } from "@/components/ui/aspect-ratio";
// Custom components
import Thumbnail from "@/components/project/thumbnail";

export default async function Gallery() {
  function SkeletonCards() {
    return (
      <>
        {[...Array(6)].map((_, i) => (
          <AspectRatio key={i} ratio={4 / 3}>
            <Skeleton className="w-full h-full" />
          </AspectRatio>
        ))}
      </>
    );
  }
  
  async function ProjectList() {
    const projects: Projects = await getAllProjects();
    const sortedProjects = projects.sort((a, b) => b.year - a.year);
  
    const excludedProjectIds = [
      "nordheim", 
      "swimmers-lounge", 
      "glow-mode", 
      "taco-mode"
    ];
    
    const filteredProjects = sortedProjects.filter(project => !excludedProjectIds.includes(project.id));
  
    return (
      <>
        {filteredProjects.map((project) => (
          <Thumbnail key={project.id} project={project} />
        ))}
      </>
    );
  }

  return (
    <div
      id="project-gallery"
      className="
        grid 
        grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-3 
        gap-4 
        w-full
        mt-4
      "
    >
      <Suspense fallback={<SkeletonCards />}>
        <ProjectList />
      </Suspense>
    </div>
  )
}