"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Projects } from "@/app/utils/data/projectsData";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Project({
   params 
}: { 
  params: { 
    project: string 
  }
}) {
  
  const project = Projects.find(
      project => project.id === params.project
    );
  if (!project) {
    throw new Response("Not Found", { 
      status: 404 
    });
  }

  return project ? (
    <Box
      id="project-container"
      className="
        flex
        flex-col
        items-center
        justify-start
        w-full
        h-full
        gap-12
        px-[5%]
        md:px-[10%]
        max-w-screen-2xl
      "
    >
      <Box
        id="project-header"
        className="
          flex
          flex-col
          items-center
          justify-start
          w-full
          gap-2
        "
      >
        <Typography
          variant="h1"
          className="
            text-6xl
            font-bold
            text-black
            mb-2
          "
        >
          {project?.title}
        </Typography>
        {project?.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography
              variant="body2"
              className="
                text-black
                hover:opacity-80
                -mt-2
                mb-2
              "
            >
              www.{project.link.toString().replace(/(^\w+:|^)\/\//, "")}
            </Typography>
          </a>
        )}
        {project?.product && (
          <Typography
            variant="h4"
            className="
              text-2xl
              font-semibold
            "
          >
            {project.product}
          </Typography>
        )}
        <Box
          id="client-year"
          className="
            flex
            flex-col
            items-center
            justify-start
            w-full
            gap-1
          "
        >
          <Typography
            variant="subtitle1"
            className="
              text-md
              font-medium
              text-black
            "
          >
            {project?.role} • {project?.client} • {project.year}
          </Typography>
        </Box>
        <Box
          id="client-year"
          className="
            flex
            flex-row
            flex-wrap
            items-center
            justify-center
            w-full
            gap-1
            md:gap-2
            mt-2
            px-[5%]
            md:px-[10%]
          "
        >
          {project.skills.map((skill, index) => (
            <Typography
              key={index}
              variant="caption"
              className="
                text-xs
                text-black/60
                bg-black/10
                px-2
                py-1
                rounded-full
              "
            >
              {skill}
            </Typography>
          ))}
        </Box>
      </Box>
      {project?.video && (
        <div className="relative w-full overflow-hidden pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={project.video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
      )}
      <Box
        id="project-content-container"
        className="
          flex
          flex-col
          items-center
          justify-start
          w-full
          gap-12
        "
      >
        {project?.description && (
          <Typography
            variant="body2"
            className="
              font-medium
              text-black
              text-center
            "
          >
            {project.description}
          </Typography>
        )}
        
        {project?.problem && (
          <Box
            id="project-problem"
            className="
              flex
              flex-col
              items-center
              justify-start
              w-full
              gap-12
            "
          >
            {/* Problem */}
            {project?.problem && (
              <Typography
                variant="h4"
                component="span"
                className="
                  text-2xl
                  font-semibold
                  text-black
                  text-center
                "
              >
                Problem
                <Typography
                  variant="subtitle1"
                  className="
                    font-medium
                    text-black
                  "
                >
                  {project.problem}
                </Typography>
              </Typography>
            )}
            {/* Insight */}
            {project?.insight && (
              <Typography
                variant="h4"
                component="span"
                className="
                  text-2xl
                  font-semibold
                  text-black
                  text-center
                "
              >
                Insight
                <Typography
                  variant="subtitle1"
                  className="
                    font-medium
                    text-black
                  "
                >
                  {project.insight}
                </Typography>
              </Typography>
            )}
            {/* Solution */}
            {project?.solution && (
              <Typography
                variant="h4"
                component="span"
                className="
                  text-2xl
                  font-semibold
                  text-black
                  text-center
                "
              >
                Solution
                <Typography
                  variant="subtitle1"
                  className="
                    font-medium
                    text-black
                  "
                >
                  {project.solution}
                </Typography>
              </Typography>
            )}
          </Box>
        )}
        {/* Awards */}
        {project?.awards.length > 0 && (
          <Typography
            variant="h4"
            className="
              text-2xl
              font-semibold
              text-black
              text-center
            "
          >
            Awards
            <Box
              id="project-awards"
              className="
                flex 
                flex-col 
                items-center 
                justify-center
              "
            >
              {project.awards?.map((awardItem, index) => (
                <Typography
                  key={index}
                  variant="subtitle1"
                  className="font-medium text-black"
                >
                  {`${awardItem.award} - ${awardItem.category} - ${awardItem.show} - ${awardItem.year}`}
                </Typography>
              ))}
            </Box>
          </Typography>
        )}
        {project?.images.length > 0 && (
          <Box
            id="project-images"
            className="
              flex
              flex-col
              items-center
              justify-start
              w-full
              gap-4
            "
          >
            {project.images !== undefined && 
              project?.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={project.title}
                width={1280}
                height={720}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  ) : null;
}