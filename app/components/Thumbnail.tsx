"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type ThumbnailProps = {
  projectHref: string;
  thumbnailHref: string;
  title: string;
  year: string;
  client?: string;
  skills?: string[];
};

export default function Thumbnail({
  projectHref,
  thumbnailHref,
  title,
  year,
  client,
  skills,  
}: ThumbnailProps) {
  return (
    <Link href={projectHref}>
      <Box
        id="thumbnail-container"
        sx={{
          position: "relative",
          overflow: "hidden",
          minHeight: 200,
          aspectRatio: "16 / 9",
        }}
        className="
          flex
          flex-col
          items-end
          justify-end
          w-full
          transition-all
          hover:rounded-md
          hover:shadow-xl
          hover:shadow-black/15
          hover:cursor-pointer
        "
      >
        <Box
          id="thumbnail-content-container"
          className="
            z-10
            flex
            flex-col
            items-start
            justify-end
            w-full
            h-full
            p-4
            md:p-6
            bg-black/80
            opacity-0
            hover:opacity-100
            transition-all
            transion-delay-200
            transition-duration-300
          "
        >
          <Box
            id="thumbnail-content"
            className="
              flex
              flex-col
              items-start
              justify-end
              w-full
            "
          >
            <Typography
              variant="h4"
              className="
                font-semibold
                text-white
                text-2xl
              "
            >
              {title}
            </Typography>
            
            <Box
              id="company-tech"
              className="
                flex
                flex-row
                items-baseline
                justify-start
                w-full
                gap-2
              "
            >
              <Typography
                variant="subtitle2"
                className="
                  font-medium
                  text-white
                "
              >
                {client}
              </Typography>
              <Typography
                variant="subtitle2"
                className="
                  font-medium
                  text-white/80
                "
              >
                {year}
              </Typography>
            </Box>
            {skills !== undefined && (
              <Box
                id="company-tech"
                className="
                  flex
                  flex-row
                  flex-wrap
                  items-start
                  justify-start
                  w-full
                  gap-1
                  mt-4
                "
              >
                {skills.map((tech) => (
                  <Typography
                    key={tech}
                    variant="caption"
                    className="
                      px-1.5
                      py-0.5
                      rounded-full
                      bg-white/60
                      text-black
                      font-medium
                      text-xs
                    "
                  >
                    {tech}
                  </Typography>
                ))}
              </Box>
            )}
          </Box>
        </Box>
        <Image
          src={thumbnailHref}
          alt={title + " Thumbnail"}
          fill
          style={{ 
            objectFit: "cover"
          }}
        />
      </Box>
    </Link>
  );
}