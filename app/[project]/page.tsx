import React from "react";
import { getProjectById } from "@/app/server/actions";
import type { Project, Award } from "@/app/lib/types/database";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function Project({ 
  params 
}: { 
  params: { project: string } 
}) {
  const projectData: Project | null = await getProjectById(params.project);

  if (!projectData) return null;

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-none rounded-none border-0">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">{projectData.title}</CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{projectData.client}</span>
          <span>•</span>
          <span>{projectData.year}</span>
        </div>
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
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Product</h3>
            <p>{projectData.product}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Role</h3>
            <p>{projectData.role}</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Problem</h3>
          <p>{projectData.problem}</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Solution</h3>
          <p>{projectData.solution}</p>
        </div>

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

        <div>
          <h3 className="font-semibold mb-2">Description</h3>
          <p>{projectData.description}</p>
        </div>

        {projectData.images && projectData.images.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">Images</h3>
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
          </div>
        )}

        {projectData.video && (
          <div>
            <h3 className="font-semibold mb-2">Video</h3>
            <iframe
              src={projectData.video}
              className="w-full aspect-video rounded-lg"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {projectData.awards && projectData.awards.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2">Awards</h3>
            <ul className="space-y-2">
              {projectData.awards.map((award: Award, index: number) => (
                <li key={index} className="flex items-start">
                  <Badge variant="outline" className="mr-2">{award.award}</Badge>
                  <div>
                    <span className="font-medium">{award.show}</span>
                    <span className="text-sm text-muted-foreground"> • {award.year}</span>
                    <p className="text-sm">{award.category}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {projectData.skills && projectData.skills.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {projectData.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
        )}

        {projectData.link && (
          <Button asChild className="w-full">
            <a href={projectData.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}