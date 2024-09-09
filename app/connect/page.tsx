"use client"

import React, { useEffect } from "react";
// Components
import Cal, { getCalApi } from "@calcom/embed-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

export default function Connect() {

  useEffect(()=>{
	  (async function () {
      const cal = await getCalApi();
      cal("ui", {
        "theme": "light",
        "styles": {
          "branding": {
            "brandColor": "#000000"
          }
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
	  })();
	}, [])

  return (
      <Card
        className="
          w-full 
          max-w-4xl 
          mx-auto 
          shadow-none 
          rounded-none 
          border-0
          mb-16
        "
      >
        <CardHeader>
          <CardTitle>Connect</CardTitle>
          <CardDescription>Need a hand? Book a meeting at a time that suits you.</CardDescription>
        </CardHeader>
        <CardContent>
          <Cal 
            calLink="nilswestgardh/30min"
            style={{
              width:"100%",
              height:"100%",
              overflow:"scroll"
            }}
            config={{
              layout: 'month_view'
            }}
         />
      </CardContent>
    </Card>
  )
}