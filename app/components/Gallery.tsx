"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import Thumbnail from "@/app/components/Thumbnail";
import { Projects } from "@/app/utils/data/projectsData";

export default function Gallery() {
  return (
    <Grid container spacing={2}>
      {Projects.map((project) => (
        <Grid item lg={4} md={6} xs={12} key={project.id}>
          <Thumbnail
            projectHref={project.path}
            thumbnailHref={project.hero}
            title={project.title}
            year={project.year}
            client={project.client}
            skills={project.skills.slice(0, 5)}
          />
        </Grid>
      ))}
    </Grid>
  );
}