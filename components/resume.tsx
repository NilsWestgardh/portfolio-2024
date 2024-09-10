import React from "react";
// Component
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type JobExperience = {
  title: string;
  company: string;
  date: string;
  description: string;
};

type Education = {
  school: string;
  degree: string;
  date: string;
};

type Award = {
  title: string;
  organization: string;
  date: string;
};

const jobExperiences: JobExperience[] = [
  {
    title: "Founder, CEO & Game Designer",
    company: "Nexus TCG",
    date: "2024 - present",
    description: "Building a digital trading card game where players can create custom cards using AI technology.",
  },
  {
    title: "Founder & CEO",
    company: "Semble.gg",
    date: "2022 - 2023",
    description: "Founded a startup building a community and talent marketplace for the game industry. Led product design, marketing, go-to-market strategy, and investor relations.",
  },
  {
    title: "Senior Art Director",
    company: "Lyft",
    date: "2017 - 2020",
    description: "Developed creative marketing and advertising campaign concepts for Lyft, working on national and local campaigns across various media.",
  },
  {
    title: "Art Director",
    company: "AKQA",
    date: "2013 - 2017",
    description: "Created marketing campaign concepts for major brands including Activision Blizzard, Apple, Levi's, Audi, Verizon, and NVIDIA.",
  },
];

const educations: Education[] = [
  {
    school: "Academy of Arts University",
    degree: "Bachelor of Fine Arts, Advertising",
    date: "2011 - 2013",
  },
  {
    school: "Berghs School of Communication",
    degree: "Berghs Bachelor's",
    date: "2010",
  },
];

const awards: Award[] = [
  {
    title: "Gold - Cyber: Innovative Use of Social or Community",
    organization: "Cannes Lions",
    date: "2017",
  },
  {
    title: "Gold - Digital Experiences – Guerrilla/Stunts",
    organization: "Art Directors Club",
    date: "2017",
  },
  {
    title: "Winner - Best in Games in Social Media",
    organization: "The Shorty Awards",
    date: "2017",
  },
];

export default function Resume() {

  return (
    <Card className="mt-8">
      <CardContent className="space-y-6 pt-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Work Experience</h3>
          {jobExperiences.map((job, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-lg font-medium">{job.title}</h4>
              <p className="text-sm text-muted-foreground">
                {job.company} | {job.date}
              </p>
              <p className="mt-2">{job.description}</p>
            </div>
          ))}
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-3">Education</h3>
          {educations.map((edu, index) => (
            <div key={index} className="mb-2">
              <h4 className="text-lg font-medium">{edu.school}</h4>
              <p className="text-sm text-muted-foreground">
                {edu.degree} | {edu.date}
              </p>
            </div>
          ))}
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-3">Awards</h3>
          {awards.map((award, index) => (
            <div key={index} className="mb-2">
              <h4 className="text-base font-medium">{award.title}</h4>
              <p className="text-sm text-muted-foreground">
                {award.organization} | {award.date}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};