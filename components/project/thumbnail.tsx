import React from "react";
// Utils
import Link from "next/link";
import Image from "next/image";
// Types
import { Project } from "@/app/lib/types/database";
// Components
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

type ThumbnailProps = {
  project: Project;
}

export default function Thumbnail({ 
  project 
}: ThumbnailProps) {  return (
    <AspectRatio ratio={4 / 3}>
      <Link href={project.path}>
        <Card
          className="
            relative 
            overflow-hidden 
            w-full 
            h-full 
            group 
            border-none 
            shadow-none
          "
        >
          <Image
            src={project.hero}
            alt={`${project.title} thumbnail`}
            fill
            style={{ objectFit: "cover" }}
          />
          <div
            id={`${project.title}-thumbnail-overlay`}
            className="
              absolute 
              inset-0 
              bg-black 
              bg-opacity-60 
              opacity-0 
              group-hover:opacity-100 
              transition-opacity 
              duration-300
            "
          >
            <CardContent
              id={`${project.title}-thumbnail-content`}
              className="flex flex-col justify-end relative z-10 h-full p-4"
            >
              <CardHeader className="flex flex-col gap-2 w-full p-0">
                <div className="flex flex-col w-full">
                  <CardTitle className="text-xl font-medium text-white">
                    {project.title}
                  </CardTitle>
                  <small className="text-white/80">
                    {`${project.client} – ${project.year}`}
                  </small>
                </div>
                {project.skills && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.skills.slice(0, 5).map((tech) => (
                      <Badge
                        key={tech} 
                        variant="secondary"
                        className="rounded-full"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardHeader>
            </CardContent>
          </div>
        </Card>
      </Link>
    </AspectRatio>
  )
}