import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/jobs - Fetch all job applications
export async function GET() {
  try {
    const jobs = await prisma.jobApplication.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ jobs, count: jobs.length });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json(
      { error: "Failed to fetch job applications" },
      { status: 500 }
    );
  }
}

// POST /api/jobs - Create a new job application
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { company, position, status, description, salary, location } = body;

    // Basic validation
    if (!company || !position) {
      return NextResponse.json(
        { error: "Company and position are required" },
        { status: 400 }
      );
    }

    const job = await prisma.jobApplication.create({
      data: {
        company,
        position,
        status: status || "applied",
        description,
        salary,
        location,
      },
    });

    return NextResponse.json(job, { status: 201 });
  } catch (error) {
    console.error("Error creating job:", error);
    return NextResponse.json(
      { error: "Failed to create job application" },
      { status: 500 }
    );
  }
}
