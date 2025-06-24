import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create sample users
  const user1 = await prisma.user.upsert({
    where: { email: "john.doe@example.com" },
    update: {},
    create: {
      email: "john.doe@example.com",
      firstName: "John",
      lastName: "Doe",
    },
  });

  // Create sample job applications with new schema
  const jobApp1 = await prisma.jobApplication.upsert({
    where: { id: "sample-job-1" },
    update: {},
    create: {
      id: "sample-job-1",
      jobUrl: "https://www.linkedin.com/jobs/view/3567890123/",
      company: "TechCorp Inc.",
      position: "Senior Frontend Developer",
      status: "INTERVIEW",
      workplaceType: "HYBRID",
      description: "Build amazing user interfaces with React and TypeScript",
      salary: "$120,000 - $150,000",
      location: "San Francisco, CA",
      notes: "Great company culture, interesting tech stack",
      userId: user1.id,
    },
  });

  const jobApp2 = await prisma.jobApplication.upsert({
    where: { id: "sample-job-2" },
    update: {},
    create: {
      id: "sample-job-2",
      jobUrl: "https://www.indeed.com/viewjob?jk=abc123def456",
      company: "StartupXYZ",
      position: "Full Stack Engineer",
      status: "APPLIED",
      workplaceType: "REMOTE",
      description: "Work on exciting new features across the full stack",
      salary: "$100,000 - $130,000",
      location: "Remote",
      notes: "Fast-growing startup, equity opportunity",
      userId: user1.id,
    },
  });

  const jobApp3 = await prisma.jobApplication.upsert({
    where: { id: "sample-job-3" },
    update: {},
    create: {
      id: "sample-job-3",
      jobUrl: "https://jobs.google.com/job/details/abc123",
      company: "Google",
      position: "Software Engineer",
      status: "PHONE_SCREEN",
      workplaceType: "ONSITE",
      description: "Work on cutting-edge technology at scale",
      salary: "$150,000 - $200,000",
      location: "Mountain View, CA",
      notes: "Dream job! Challenging technical questions expected",
      userId: user1.id,
    },
  });

  console.log("✅ Database seeded successfully!");
  console.log("Created:", { user1, jobApp1, jobApp2, jobApp3 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Error seeding database:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
