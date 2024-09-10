import React from "react";
// Components
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// TODO: Add metadata for this page

export default function Deal() {
  return (
    <Card
      className="
        flex 
        flex-col 
        justify-between 
        items-start 
        w-full 
        max-w-4xl 
        mx-auto 
        shadow-none 
        rounded-none 
        border-none
        mb-16x
        min-h-[90vh]
      "
    >
      <div className="flex flex-col justify-start items-start">
        <CardHeader className="flex flex-col justify-start items-start">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>              
                <Badge
                  variant="default"
                  className="
                    bg-orange-500 
                    hover:bg-orange-600 
                    rounded-full 
                    shadow-none 
                    font-medium
                    mb-2
                  "
                >GET 25% OFF</Badge>
              </TooltipTrigger>
              <TooltipContent side="right" align="start">
                <p>If you're a YC company.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="flex flex-col gap-2">
            <CardTitle className="md:text-6xl text-4xl font-bold">
              The <span className="line-through text-muted-foreground">non</span>standard YC deal*
            </CardTitle>
            <CardDescription>
              Y Combinator companies get 25% off my day rate.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">
            The greatest value is ones network
          </h1>
          <p>
            I'm a founder, who understands the value of a strong network (and a good deal).
            When it comes to startups, no network is more valuable than YC's.
            Therefore, to grow my own, while providing great services,{" "}
            I'm offering YC companies a special discounted day rate for freelance work.
          </p>
          <p className="text-muted-foreground">
            Email me at{" "}
            <a
              href="mailto:nils.westgardh@gmail.com"
              className="underline"
            >
              nils.westgardh@gmail.com
            </a>{" "}
            to claim the deal.
          </p>
          <Separator className="my-4" />
          <h2 className="text-lg font-medium">
            I can help with:
          </h2>
          <ul className="list-disc list-inside">
            <li className="ml-4">Copywriting & Marketing</li>
            <li className="ml-4">Product & Graphic Design</li>
            <li className="ml-4">Brand & Creative Strategy</li>
            <li className="ml-4">Front-end & Junior Dev</li>
            <li className="ml-4">Anything Gaming-related</li>
          </ul>
        </CardContent>
      </div>
      <CardFooter>
        <small
          className="
            text-muted-foreground 
            italic 
            opacity-60 
            hover:opacity-80 
            transition-opacity 
            duration-300
            cursor-default
            mt-16
          "
        >
          * Disclosure: 
          Y Combinator (YC) is a registered trademark of Y Combinator, Inc.
          I'm not partnered or affiliated with YC. 
          This offer is not approved or endorsed by YC.
          But the deal is real.
          And it's a good one.
        </small>
      </CardFooter>
    </Card>
  )
}