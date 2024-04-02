"use client";

import React from "react";
import Typography from "@mui/material/Typography";

type SkillProps = {
  skill: string;
  xpLevel: string;
};

export default function Skill({
  skill,
  xpLevel,
}: SkillProps) {

  return (
    <Typography
      variant="caption"
      component="span"
      className="
        text-center
        font-medium
        pl-1.5
        pr-0.5
        pt-1
        pb-0.5
        rounded-full
        border
        border-black/50
      "
    >
      {skill}
      <Typography
        variant="caption"
        className="
          text-center
          text-white
          bg-black
          px-2
          py-1
          rounded-full
          ml-1
        "
      >
        {xpLevel}
      </Typography>
    </Typography>
  )
}