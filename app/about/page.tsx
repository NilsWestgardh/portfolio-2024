import React from "react";
// Utils
import Image from "next/image";
import { cookies } from "next/headers";
// Actions
import { getSkills, getClients } from "@/app/server/actions"
//  Types
import type { Skills, Client, Clients } from "@/app/lib/types/database";
// Components
import { 
  Tooltip, 
  TooltipProvider, 
  TooltipTrigger, 
  TooltipContent 
} from "@/components/ui/tooltip";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardTitle,
  CardDescription,
  CardContent, 
  CardHeader 
} from "@/components/ui/card";
import { 
  Avatar, 
  AvatarImage 
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
// Custom components
import Resume from "@/components/resume";

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
  const cookieStore = cookies();

  const clients: Clients = await getClients(cookieStore);
  const skills: Skills = await getSkills(cookieStore);

  const marketingSkills = skills.filter(skill => 
    [
      "Creative Direction",
      "Creative Strategy",
      "Art Direction",
      "Copywriting",
      "Photoshop",
      "Presentation",
      "Adobe Suite",
      "Graphic Design",
      "Community Management",
    ].includes(skill.skill)
  );
  
  const founderSkills = skills.filter(skill => 
    [
      "Generative AI",
      "Figma",
      "Next.js",
      "React",
      "TypeScript",
      "shadcn/ui",
      "Tailwind CSS",
      "Copywriting",
      "Supabase",
      "PostHog",
      "Presentation",
      "Game Design",
      "Graphic Design",
      "Community Management",
      "Unity",
      "Blender",
      "C#"
    ].includes(skill.skill)
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="mb-4 border-none shadow-none rounded-none p-0">
        <CardHeader className="text-center gap-4">
          <Avatar className="w-48 h-48 mx-auto">
            <AvatarImage src="/nils.png" alt="Nils headshot" />
          </Avatar>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-medium">
              Nils Westgårdh
            </h2>
            <p className="text-muted-foreground">
              Stockholm, Sweden • {calculateAge("1988-10-25")} yo
            </p>
          </div>
          <h1 className="text-lg font-medium max-w-xl mx-auto mb-4">
            I'm an ever-curious techno-optimistic Swedish army-knife,{" "}
            with a passion for gaming, and knack for creative problem-solving.
          </h1>
        </CardHeader>
      </Card>

      <Card className="px-1 pt-1 mb-8">
        <Tabs defaultValue="marketer">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="marketer">Marketer Mode</TabsTrigger>
            <TabsTrigger value="founder">Founder Mode</TabsTrigger>
          </TabsList>
          <TabsContent value="marketer">
            
              <CardContent className="space-y-4 pt-6">
                <h3 className="text-xl font-semibold">
                  Experienced Creative Marketer
                </h3>
                <div className="flex flex-wrap gap-1">
                  {marketingSkills.map((skill) => (
                    <TooltipProvider key={skill.id}>
                      <Tooltip>
                        <TooltipTrigger>
                          <Badge variant="outline" className="rounded-full">{skill.skill}</Badge>
                        </TooltipTrigger>
                        <TooltipContent><p>{skill.level}</p></TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
                <Separator className="my-4" />
                <p>
                  With 10 years of experience in San Francisco,{" "}
                  I've worked with big-name brands at AKQA and Lyft's in-house agency. 
                  My expertise spans from scrappy campaigns to nation-wide initiatives.
                  I like to craft and execute campaigns end-to-end. From strategy to delivery.
                  I've also helped win several new business pitches.
                </p>
              </CardContent>
          </TabsContent>
          <TabsContent value="founder">
              <CardContent className="space-y-4 pt-6">
                <h3 className="text-xl font-semibold">
                  Aspiring Tech Founder
                </h3>
                <div className="flex flex-wrap gap-1">
                  {founderSkills.map((skill) => (
                    <TooltipProvider key={skill.id}>
                      <Tooltip>
                        <TooltipTrigger>
                          <Badge variant="outline" className="rounded-full">{skill.skill}</Badge>
                        </TooltipTrigger>
                        <TooltipContent><p>{skill.level}</p></TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
                <Separator className="my-4" />
                <p>
                  After moving back to Sweden in 2020, I briefly studied game design before{" "}
                  starting my own marketing agency, setting me on the path of entrepreneurship.{" "}
                  In 2022 I founded Semble, a talent marketplace for game devs, which lasted a year.
                  After that, I started to learn to code, and in early 2024 I launched a web app for{" "}
                  Nexus TCG, the AI-powered digital card game I'm building.
                </p>
              </CardContent>
          </TabsContent>
        </Tabs>
      </Card>

      {clients && clients.length > 0 && (
        <Card className="px-1 pt-1">
          <CardContent className="space-y-4 pt-6">
            <CardTitle>Clients</CardTitle>
            <CardDescription>Companies I've had the pleasure to work with.</CardDescription>
            <div className="grid w-full md:grid-cols-5 grid-cols-3 md:gap-4 gap-2">
              {clients.map(( client: Client ) => (
                <a
                  key={client.id}
                  href={client.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="
                    md:w-[96px]
                    w-[60px]
                    md:h-[96px]
                    h-[60px]
                    relative
                    cursor-pointer
                    hover:scale-95
                    hover:opacity-80
                    transition-all
                    duration-300
                  "
                >   
                  <Image
                    src={client.logo}
                    alt={`${client.client} logo`}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Resume />
    </div>
  );
}