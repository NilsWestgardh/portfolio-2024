import React from "react";
// Utils
import { unstable_cache } from 'next/cache';
import Image from "next/image";
import clsx from "clsx";
// Actions
import { getProjectById } from "@/app/server/actions";
// Types
import type { Project, Award } from "@/app/lib/types/database";
// Components
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
// Icons
import { MdOpenInNew } from "react-icons/md";

export default async function Project({ 
  params 
}: { 
  params: { project: string } 
}) {
  const cachedGetProjectById = unstable_cache(
    async (id: string) => getProjectById(id),
    ['project'],
    { revalidate: 60 }
  );

  const projectData: Project | null = await cachedGetProjectById(params.project);

  if (!projectData) return null;

  return (
    <>
      <Card
        className="
          w-full 
          max-w-4xl 
          mx-auto 
          shadow-none 
          rounded-none 
          border-0
          mb-16
        "
      >
        <CardHeader className="flex flex-row justify-between w-full">
          <div className="flex flex-col justify-start items-start w-full">
            <CardTitle className="text-3xl font-bold">{projectData.title}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{projectData.client}</span>
              <span>•</span>
              <span>{projectData.year}</span>
            </div>
          </div>
          {projectData.link && (
            <div className="flex justify-end">
              <Button variant="outline" asChild className="flex justify-center items-center gap-2">
                <a href={projectData.link} target="_blank" rel="noopener noreferrer">
                  View Project
                  <MdOpenInNew />
                </a>
              </Button>
            </div>
          )}
        </CardHeader>
        <CardContent className="space-y-6">
          {projectData.hero && (
            <Image
              src={projectData.hero}
              alt={projectData.title}
              width={1200}
              height={600}
              className="w-full rounded-lg object-cover"
            />
          )}
          
          <div className={clsx("grid gap-4 pb-4",
              {
                "grid-cols-3": projectData.skills && projectData.skills.length > 0,
                "grid-cols-2": !projectData.skills || projectData.skills.length === 0,
              }
            )}
          >
            <div>
              <h3 className="font-semibold mb-2">Product</h3>
              <p>{projectData.product}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Role</h3>
              <p>{projectData.role}</p>
            </div>
            {projectData.skills && projectData.skills.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Skills</h3>
                <div className="flex flex-wrap gap-1">
                  {projectData.skills.map((skill, index) => (
                    <Badge
                      key={index} 
                      variant="outline" 
                      className="rounded-full"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          {projectData.awards && projectData.awards.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2">Awards</h3>
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-2">
                {projectData.awards.map((
                  award: Award, 
                  index: number
                ) => (
                  <Card key={index} className="shadow-none">
                    <CardContent className="flex flex-row gap-4 px-4 pt-4 pb-6">
                      <div className="md:w-1/4 w-1/5">
                        <span className="md:text-lg text-sm font-semibold">{award.award}</span>
                      </div>
                      <div className="md:w-3/4 w-4/5">
                        <span className="md:text-lg text-sm font-medium mr-2">{award.show}</span>
                        <span className="md:text-lg text-sm font-light">{award.year}</span>
                        <p className="md:text-md text-xs text-muted-foreground md:mt-2 mt-1">{award.category}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {(projectData.problem 
            || projectData.solution 
            || projectData.insight 
            || projectData.audience 
            || projectData.description) 
              && !projectData.video 
              && (
            <Separator className="my-4" />
          )}

          {projectData.video && (
            <iframe
              src={projectData.video}
              className="w-full aspect-video rounded-lg"
              allowFullScreen
            ></iframe>
          )}

          {projectData.problem && (
            <div>
              <h3 className="font-semibold mb-2">Problem</h3>
              <p>{projectData.problem}</p>
            </div>
          )}

          {projectData.solution && (
            <div>
              <h3 className="font-semibold mb-2">Solution</h3>
              <p>{projectData.solution}</p>
            </div>
          )}

          {projectData.insight && (
            <div>
              <h3 className="font-semibold mb-2">Insight</h3>
              <p>{projectData.insight}</p>
            </div>
          )}

          {projectData.audience && (
            <div>
              <h3 className="font-semibold mb-2">Audience</h3>
              <p>{projectData.audience}</p>
            </div>
          )}

          {projectData.description && (
            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p>{projectData.description}</p>
            </div>
          )}

          {projectData.images && projectData.images.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {projectData.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Project image ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full rounded-lg object-cover"
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </>
  )
}