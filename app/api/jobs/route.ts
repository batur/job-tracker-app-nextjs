import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/jobs - Fetch all job applications
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    const whereClause = userId ? { userId } : {};

    const jobs = await prisma.jobApplication.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
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
    const {
      jobUrl,
      company,
      position,
      status,
      workplaceType,
      description,
      salary,
      location,
      notes,
      userId,
    } = body;

    // Basic validation - jobUrl is now required, userId is required
    if (!jobUrl) {
      return NextResponse.json(
        { error: "Job URL is required" },
        { status: 400 }
      );
    }

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    // Validate enum values if provided
    const validStatuses = [
      "APPLIED",
      "PHONE_SCREEN",
      "INTERVIEW",
      "TECHNICAL_INTERVIEW",
      "FINAL_INTERVIEW",
      "OFFER",
      "ACCEPTED",
      "REJECTED",
      "WITHDRAWN",
    ];
    const validWorkplaceTypes = ["REMOTE", "HYBRID", "ONSITE"];

    if (status && !validStatuses.includes(status)) {
      return NextResponse.json(
        {
          error: `Invalid status. Must be one of: ${validStatuses.join(", ")}`,
        },
        { status: 400 }
      );
    }

    if (workplaceType && !validWorkplaceTypes.includes(workplaceType)) {
      return NextResponse.json(
        {
          error: `Invalid workplace type. Must be one of: ${validWorkplaceTypes.join(
            ", "
          )}`,
        },
        { status: 400 }
      );
    }

    const job = await prisma.jobApplication.create({
      data: {
        jobUrl,
        company,
        position,
        status: status || "APPLIED",
        workplaceType,
        description,
        salary,
        location,
        notes,
        userId,
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
