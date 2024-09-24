import { getAllProjects } from "@/app/server/actions";
import { MetadataRoute } from 'next'
import { cookies } from 'next/headers'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  
  const cookieStore = cookies();

  // Get all projects
  const projects = await getAllProjects(cookieStore);

  // Create project URLs
  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Define static pages
  const staticPages = [
    "",
    "/about",
    "/connect",
    "/deal",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1,
  }));

  return [...staticPages, ...projectUrls];
}