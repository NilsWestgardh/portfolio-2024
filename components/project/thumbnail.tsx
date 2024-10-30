import React, { Suspense } from "react";
// Utils
import Link from "next/link";
import Image from "next/image";
// Types
import { Project } from "@/app/lib/types/database";
// Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

function ThumbnailSkeleton() {
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

type ThumbnailProps = {
  project: Project;
  priority?: boolean;
};

function ThumbnailContent({ project, priority = false }: ThumbnailProps) {
  return (
    <AspectRatio ratio={4 / 3}>
      <Link href={`/${project.id}`}>
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            priority={priority}
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
                    {`${project.client} - ${project.year}`}
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
  );
}

export default function Thumbnail({
  project,
  priority = false,
}: ThumbnailProps) {
  return (
    <Suspense fallback={<ThumbnailSkeleton />}>
      <ThumbnailContent project={project} priority={priority} />
    </Suspense>
  );
}
