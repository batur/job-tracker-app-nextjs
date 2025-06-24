# Job Tracker App

A comprehensive application for tracking job applications to help job seekers organize and manage their job search process efficiently.

## Overview

This Job Tracker App allows users to:

- Track job applications across different companies and positions
- Monitor application statuses (Applied, Phone Screen, Interview, Offer, Rejected, etc.)
- Store important details about each application (job description, salary, location, etc.)
- Set reminders for follow-ups and interviews
- Visualize job search progress through intuitive dashboards

## Tech Stack

This project is built with modern web technologies:

### Frontend

- **TypeScript** - Type-safe JavaScript
- **Next.js 15** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - High-quality UI components built with Radix UI and Tailwind
- **TanStack Query** - Data fetching and state management
- **TanStack Table** - Headless UI for building powerful tables

### Backend & Database

- **Prisma** - Type-safe ORM for database access
- **Supabase** - Backend-as-a-Service with PostgreSQL database

### Testing

- **Vitest** - Unit and snapshot testing
- **Playwright** - End-to-end testing

## Getting Started

### Prerequisites

- Node.js (v20 or newer)
- npm, yarn, pnpm, or bun

### Setup and Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/job-tracker-app-nextjs.git
cd job-tracker-app-nextjs
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Then edit the `.env.local` file with your Supabase credentials and other configuration.

4. Run database migrations:

```bash
npx prisma migrate dev
```

5. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Development

### Database Schema Management

```bash
# Generate Prisma client after schema changes
npx prisma generate

# Apply migrations to your development database
npx prisma migrate dev

# Open Prisma Studio to view/edit data
npx prisma studio
```

### Testing

```bash
# Run unit tests
npm run test

# Run end-to-end tests
npm run test:e2e
```

## Deployment

The application can be deployed on Vercel for optimal performance with Next.js:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fjob-tracker-app-nextjs)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
