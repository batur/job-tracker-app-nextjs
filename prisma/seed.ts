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
      name: "John Doe",
    },
  });

  // Create sample job applications
  const jobApp1 = await prisma.jobApplication.upsert({
    where: { id: "sample-job-1" },
    update: {},
    create: {
      id: "sample-job-1",
      company: "TechCorp Inc.",
      position: "Senior Frontend Developer",
      status: "interview",
      description: "Build amazing user interfaces with React and TypeScript",
      salary: "$120,000 - $150,000",
      location: "San Francisco, CA",
    },
  });

  const jobApp2 = await prisma.jobApplication.upsert({
    where: { id: "sample-job-2" },
    update: {},
    create: {
      id: "sample-job-2",
      company: "StartupXYZ",
      position: "Full Stack Engineer",
      status: "applied",
      description: "Work on exciting new features across the full stack",
      salary: "$100,000 - $130,000",
      location: "Remote",
    },
  });

  console.log("✅ Database seeded successfully!");
  console.log("Created:", { user1, jobApp1, jobApp2 });
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
