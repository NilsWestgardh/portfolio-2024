import { getAllProjects } from "@/app/server/actions";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const cookieStore = cookies();
    const projects = await getAllProjects(cookieStore);

    if (!projects) {
      console.log("[Server] No projects found")
      return NextResponse.json({ error: "No projects found" }, { status: 404 });
    }

    return NextResponse.json({
      status: "success",
      message: "Projects fetched successfully",
      count: projects.length,
    });
  } catch (error) {
    console.log("[Server] Error fetching projects:", error)
    return NextResponse.json({
      status: "error",
      message: "Error fetching projects",
    }, { status: 500 });
  }
}