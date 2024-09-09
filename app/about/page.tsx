import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const SkillsList = () => (
  <div className="flex flex-wrap justify-center gap-2 mt-4">
    {["Entrepreneur", "Art Director", "Copywriter", "Designer", "Web Developer", "Game Designer"].map((skill) => (
      <Badge key={skill} variant="secondary">{skill}</Badge>
    ))}
  </div>
);

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

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="mb-8">
        <CardHeader className="text-center">
          <Avatar className="w-48 h-48 mx-auto mb-4">
            <AvatarImage src="/images/nils.png" alt="Nils headshot" />
          </Avatar>
          <h2 className="text-2xl font-bold">Nils Westgårdh</h2>
          <p className="text-muted-foreground">Stockholm, Sweden • {calculateAge("1988-10-25")} yo</p>
          <SkillsList />
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