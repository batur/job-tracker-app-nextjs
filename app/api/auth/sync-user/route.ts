import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { id, email, firstName, lastName } = await request.json();

    if (!id || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Upsert user in our database
    const user = await prisma.user.upsert({
      where: { id },
      update: {
        email,
        firstName: firstName || "",
        lastName: lastName || "",
      },
      create: {
        id,
        email,
        firstName: firstName || "",
        lastName: lastName || "",
      },
    });

    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error syncing user:", error);
    return NextResponse.json({ error: "Failed to sync user" }, { status: 500 });
  }
}
