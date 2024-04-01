"use client";

import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function About() {
  function calculateAge(birthDate: string) {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const m = today.getMonth() - birthDateObj.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    return age;
  }

  function calculateExperience(startAge: number) {
    const currentAge = calculateAge("1988-10-25");
    return currentAge - startAge;
  }

  return (
    <Box
      id="contact-container"
      className="
        flex
        flex-col
        items-center
        justify-start
        w-full
        h-full
        px-[5%]
        md:px-[10%]
        gap-24
      "
    >
      <Box
        id="header"
        className="
          flex
          flex-col
          items-center
          justify-start
          w-full
          gap-2
        "
      >
        <Image
          src="/images/nils.png"
          alt="Nils headshot"
          width={200}
          height={200}
          className="
            rounded-full
            mb-4
          "
        />
        <Typography
          variant="h4"
          className="
            font-bold
            text-center
          "
        >
          Nils Westgårdh
        </Typography>
        <Typography
          variant="subtitle2"
          className="
            font-medium
          "
        >
          Stockholm, Sweden • {calculateAge("1988-10-25")} yo
        </Typography>
        <Typography
          variant="body1"
          className="
            font-medium
            text-center
            text-black/80
            text-wrap
            px-[5%]
            md:px-[20%]
          "
        >
          Entrepreneur • Art Director • Copywriter • Designer • Web Developer • Game Designer
        </Typography>
        <Box
          id="skills"
          className="
            flex
            flex-row
            flex-wrap
            items-center
            justify-center
            w-full
            gap-2
            mt-4
          "
        >
          <Typography
            variant="caption"
            component="span"
            className="
              text-center
              font-medium
              pl-2
              pr-1
              py-1
              rounded-full
              border
              border-black
            "
          >
            Photoshop 
            <Typography
              variant="caption"
              className="
                text-center
                text-white
                bg-black
                px-2
                py-1
                rounded-full
                ml-2
              "
            >
              {calculateExperience(17)} years
            </Typography>
          </Typography>
          <Typography
            variant="caption"
            component="span"
            className="
              text-center
              font-medium
              pl-2
              pr-1
              py-1
              rounded-full
              border
              border-black/50
            "
          >
            Figma 
            <Typography
              variant="caption"
              className="
                text-center
                text-white
                bg-black
                px-2
                py-1
                rounded-full
                ml-2
              "
            >
              {calculateExperience(32)} years
            </Typography>
          </Typography>
          <Typography
            variant="caption"
            component="span"
            className="
              text-center
              font-medium
              pl-2
              pr-1
              py-1
              rounded-full
              border
              border-black/50
            "
          >
            Next.js 
            <Typography
              variant="caption"
              className="
                text-center
                text-white
                bg-black
                px-2
                py-1
                rounded-full
                ml-2
              "
            >
              {calculateExperience(35)} years
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Box
        id="about-content"
        className="
          flex
          flex-col
          items-center
          justify-start
          w-full
          gap-4
          px-[10%]
          md:px-[20%]
        "
      >
        <Typography
          variant="subtitle1"
          className="
            text-lg
            md:text-2xl
            font-semibold
            text-center
            text-black/80
          "
        >
          A techno-optimistic Swedish army-knife, with a passion for gaming, and knack for creative problem-solving.
        </Typography>
        <Typography
          variant="body1"
          className="
            font-medium
            text-center
            text-black/80
          "
        >
          Lorem ipsum dolor sit amet
        </Typography>
      </Box>
    </Box>
  );
}