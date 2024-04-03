"use client";

import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SkillsList from "@/app/components/SkillsList";

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
        max-w-screen-xl
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
        <SkillsList />
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
          I spent 10 years in San Francisco, where I graduated from Academy of Art University. I joined AKQA, and became an integral part of their creative team, working on many big-name brands like Activision Blizzard, NVIDIA, Audi, Levi&apos;s, Visa, Verizon, Apple, and more.
          <br/>
          <br/>After that I joined Lyft and their in-house agency, where I worked on everything from small and scrappy campaigns to nation-wide ones. 
          
          <br/>
          <br/>Then, in 2020 I moved back to my native Sweden, and started studying game design. Eventually I quit to start my own marketing agency, which set me on the path of entrepreneurship. 
          
          <br/>
          <br/>I&apos;m currently bootstrapping my second startup attempt. That said, I&apos;m open to new opportunities where my wide-ranging skill set can be of use. So don&apos;t hesitate to reach out if you need help!
        </Typography>
      </Box>
    </Box>
  );
}