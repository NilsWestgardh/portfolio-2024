"use client";

import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Contact() {
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
    <Box
      id="contact-container"
      className="
        flex
        flex-col
        items-center
        justify-start
        w-full
        h-full
        gap-6
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
        <Typography
          variant="h4"
          className="
            font-bold
            text-center
          "
        >
          Contact
        </Typography>
        <Typography
          variant="subtitle2"
          className="
            font-medium
          "
        >
          nils.westgardh@gmail.com • <Link href="https://www.linkedin.com/in/nilswestgardh/" className="text-black no-underline hover:opacity-80">linkedin.com/in/nilswestgardh</Link>
        </Typography>
      </Box>
      <Box
        id="contact-calendar"
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
      </Box>
    </Box>
  );
}