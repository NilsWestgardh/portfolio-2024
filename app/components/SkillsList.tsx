"use client";

import React from "react";
import Box from "@mui/material/Box";
import Skill from "@/app/components/Skill";
import { skillsData } from "@/app/utils/data/skillsData";

export default function SkillsList() {
  return (
    <Box
      id="skills-list"
      className="
        flex
        flex-row
        flex-wrap
        items-center
        justify-center
        w-full
        gap-1
        mt-4
      "
    >
      {skillsData.map((
        data, 
        index: number
      ) => (
        <Skill
          key={index}
          xpLevel={data.xpLevel}
          skill={data.skill} 
        />
      ))}
    </Box>
  );
};
