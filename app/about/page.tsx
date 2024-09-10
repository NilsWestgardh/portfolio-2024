import React from "react";
// Actions
import { getSkills } from "@/app/server/actions"
//  Types
import { Skills } from "@/app/lib/types/database";
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
  CardContent, 
  CardHeader 
} from "@/components/ui/card";
import { 
  Avatar, 
  AvatarImage 
} from "@/components/ui/avatar";
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

  const marketingSkills = skills.filter(skill => 
    ["Art Direction", "Copywriting", "Design", "Photoshop", "Creative Direction", 
     "Creative Strategy", "Illustrator", "Community Management", "Presentation", 
     "Figma", "After Effects", "Illustration"].includes(skill.skill)
  );
  
  const founderSkills = skills.filter(skill => 
    ["Entrepreneurship", "React", "TypeScript", "Tailwind CSS", "Supabase", 
     "Game Design", "Unity", "Blender", "C#"].includes(skill.skill)
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="mb-4 border-none shadow-none rounded-none p-0">
        <CardHeader className="text-center gap-4">
          <Avatar className="w-48 h-48 mx-auto">
            <AvatarImage src="/nils.png" alt="Nils headshot" />
          </Avatar>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-medium">Nils Westgårdh</h2>
            <p className="text-muted-foreground">Stockholm, Sweden • {calculateAge("1988-10-25")} yo</p>
          </div>
          <h1 className="text-lg font-medium max-w-xl mx-auto mb-4">
            I'm an ever-curious techno-optimistic Swedish army-knife, with a passion for gaming, and knack for creative problem-solving.
          </h1>
        </CardHeader>
      </Card>

      <Card className="px-1 pt-1">
        <Tabs defaultValue="marketer">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="marketer">Marketer Mode</TabsTrigger>
            <TabsTrigger value="founder">Founder Mode</TabsTrigger>
          </TabsList>
          <TabsContent value="marketer">
            
              <CardContent className="space-y-4 pt-6">
                <h3 className="text-xl font-semibold">Experienced Creative Marketer</h3>
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
                <Separator />
                <p>
                  With 10 years of experience in San Francisco, I've worked with big-name brands at AKQA and Lyft's in-house agency. My expertise spans from scrappy campaigns to nation-wide initiatives for clients like Activision Blizzard, NVIDIA, Audi, Levi's, Visa, Verizon, and Apple.
                </p>
              </CardContent>
          </TabsContent>
          <TabsContent value="founder">
              <CardContent className="space-y-4 pt-6">
                <h3 className="text-xl font-semibold">Aspiring Tech Entrepreneur</h3>
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
                <Separator />
                <p>
                  After moving back to Sweden in 2020, I studied game design and started my own marketing agency, setting me on the path of entrepreneurship. I'm currently bootstrapping my second startup attempt, leveraging my diverse skill set in technology and creative problem-solving.
                </p>
              </CardContent>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
  
  // return (
  //   <div className="container mx-auto px-4 py-8 max-w-4xl">
  //     <Card className="mb-8">
  //       <CardHeader className="text-center gap-4">
  //         <Avatar className="w-48 h-48 mx-auto">
  //           <AvatarImage src="/nils.png" alt="Nils headshot" />
  //         </Avatar>
  //         <div className="flex flex-col items-center">
  //           <h2 className="text-2xl font-medium">Nils Westgårdh</h2>
  //           <p className="text-muted-foreground">Stockholm, Sweden • {calculateAge("1988-10-25")} yo</p>
  //         </div>
  //         <div className="flex flex-wrap justify-center gap-1 mt-4">
  //           {skills.map((skill) => (
  //             <TooltipProvider key={skill.id}>
  //               <Tooltip>
  //                 <TooltipTrigger>
  //                   <Badge
  //                     variant="outline"
  //                     className="rounded-full" 
  //                   >
  //                     {skill.skill}
  //                   </Badge>
  //                 </TooltipTrigger>
  //                 <TooltipContent>
  //                   <p>{skill.level}</p>
  //                 </TooltipContent>
  //               </Tooltip>
  //             </TooltipProvider>
  //           ))}
  //         </div>
  //       </CardHeader>
  //     </Card>

  //     <Card>
  //       <CardContent className="text-center space-y-4">
  //         <p className="text-xl font-semibold text-muted-foreground">
  //           A techno-optimistic Swedish army-knife, with a passion for gaming, and knack for creative problem-solving.
  //         </p>
  //         <Separator className="my-4" />
  //         <div className="space-y-4 text-sm">
  //           <p>
  //             I spent 10 years in San Francisco, where I graduated from Academy of Art University. I joined AKQA, and became an integral part of their creative team, working on many big-name brands like Activision Blizzard, NVIDIA, Audi, Levi's, Visa, Verizon, Apple, and more.
  //           </p>
  //           <p>
  //             After that I joined Lyft and their in-house agency, where I worked on everything from small and scrappy campaigns to nation-wide ones.
  //           </p>
  //           <p>
  //             Then, in 2020 I moved back to my native Sweden, and started studying game design. Eventually I quit to start my own marketing agency, which set me on the path of entrepreneurship.
  //           </p>
  //           <p>
  //             I'm currently bootstrapping my second startup attempt. That said, I'm open to new opportunities where my wide-ranging skill set can be of use. So don't hesitate to reach out if you need help!
  //           </p>
  //         </div>
  //       </CardContent>
  //     </Card>
  //   </div>
  // );
}