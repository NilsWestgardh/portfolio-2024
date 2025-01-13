import React from "react";
// Utils
import { unstable_cache } from "next/cache";
import { cookies } from "next/headers";
import dynamic from "next/dynamic";
// Actions
import { getAllProjects } from "@/app/server/actions";
// Types
import { Project, Projects } from "@/app/lib/types/database";
// Custom components
const Thumbnail = dynamic(() => import("@/components/project/thumbnail"), {
  loading: () => null,
});

export default async function Gallery() {
  const cookieStore = cookies();

  const cachedGetAllProjects = unstable_cache(
    async () => getAllProjects(cookieStore),
    ["all-projects"],
    { revalidate: 3600 }
  );

  const projects: Projects = await cachedGetAllProjects();

  console.log("Projects fetched:", projects.length);

  return (
    <div
      id="project-gallery"
      data-testid="projects-grid"
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
      {projects.map((project: Project, index: number) => (
        <Thumbnail key={project.id} project={project} priority={index < 6} />
      ))}
    </div>
  );
}
