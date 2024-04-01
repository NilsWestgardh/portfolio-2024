import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nils Westgardh Portfolio",
  description: "Nils Westgardh is a entrepreneur, advertising pro, experienced designer, novice web developer, and aspiring game developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box
          id="root"
          sx={{ top: 0, left: 0, right: 0, bottom: 0 }}
          className="
            flex
            flex-col
            items-center
            justify-start
            w-full
            bg-white
            text-black
            min-h-screen
          "
        >
          <Box
            id="header"
            className="
              flex
              flex-row
              items-center
              justify-between
              w-full
              py-2
              px-12
              bg-white
              sticky
              top-0
              z-10
            "
          >
            <Link href="/">
              <Image
                src="/images/nils64.png"
                alt="Nils Logo"
                width={60}
                height={50}
                className="
                  hover:opacity-80 
                  hover:cursor-pointer
                "
              />
            </Link>
            <Box
              id="navigation"
              className="
                flex
                flex-row
                items-center
                justify-center
                gap-4
              "
            >
              <Box
                id="main-nav"
                className="
                  flex
                  flex-row
                  items-center
                  justify-center
                  gap-2
                "
              >
                <Button
                  href="/"
                  color="primary"
                >
                  Projects
                </Button>
                <Button
                  href="/about"
                  color="primary"
                >
                  About
                </Button>
                <Button
                  href="/contact"
                  color="primary"
                >
                  Contact
                </Button>
              </Box>
              <Box
                id="social-nav"
                className="
                  flex
                  flex-row
                  items-center
                  justify-center
                  gap-2
                "
              >
                <Link
                  href="https://www.linkedin.com/in/nilswestgardh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon
                    className="
                      hover:opacity-80 
                      hover:cursor-pointer
                    "
                  />
                </Link>
                <Link
                  href="https://github.com/NilsWestgardh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon
                    className="
                      hover:opacity-80 
                      hover:cursor-pointer
                    " 
                  />
                </Link>
                <Link
                  href="https://twitter.com/NilsWestgardh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <XIcon className="
                    hover:opacity-80 
                    hover:cursor-pointer
                  " 
                />
                </Link>
              </Box>
            </Box>
          </Box>
          <Box
            id="content-container"
            className="
              flex
              flex-col
              items-center
              justify-center
              w-full
              h-full
              p-12
            "
          >
            <Box
              id="content"
              className="
                flex
                flex-col
                items-center
                justify-start
                w-full
                h-full
                py-8
              "
            >
              {children}
            </Box>
          </Box>
        </Box>
      </body>
    </html>
  );
}
