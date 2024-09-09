import React from "react";
// Utils
import Image from "next/image";
// Actions
import { getSkills } from "@/app/server/actions"
//  Types
import { Skills } from "@/app/lib/types/database";
// Components
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const calculateAge = (birthDate: string) => {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const m = today.getMonth() - birthDateObj.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }
  return age;
};

export default async function About() {
  const skills: Skills = await getSkills();
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="mb-8">
        <CardHeader className="text-center gap-4">
          <Avatar className="w-48 h-48 mx-auto">
            <AvatarImage src="/nils.png" alt="Nils headshot" />
          </Avatar>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-medium">Nils Westgårdh</h2>
            <p className="text-muted-foreground">Stockholm, Sweden • {calculateAge("1988-10-25")} yo</p>
          </div>
          <div className="flex flex-wrap justify-center gap-1 mt-4">
            {skills.map((skill) => (
              <TooltipProvider key={skill.id}>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge
                      variant="outline"
                      className="rounded-full" 
                    >
                      {skill.skill}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{skill.level}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardContent className="text-center space-y-4">
          <p className="text-xl font-semibold text-muted-foreground">
            A techno-optimistic Swedish army-knife, with a passion for gaming, and knack for creative problem-solving.
          </p>
          <Separator className="my-4" />
          <div className="space-y-4 text-sm">
            <p>
              I spent 10 years in San Francisco, where I graduated from Academy of Art University. I joined AKQA, and became an integral part of their creative team, working on many big-name brands like Activision Blizzard, NVIDIA, Audi, Levi's, Visa, Verizon, Apple, and more.
            </p>
            <p>
              After that I joined Lyft and their in-house agency, where I worked on everything from small and scrappy campaigns to nation-wide ones.
            </p>
            <p>
              Then, in 2020 I moved back to my native Sweden, and started studying game design. Eventually I quit to start my own marketing agency, which set me on the path of entrepreneurship.
            </p>
            <p>
              I'm currently bootstrapping my second startup attempt. That said, I'm open to new opportunities where my wide-ranging skill set can be of use. So don't hesitate to reach out if you need help!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}