import { 
  DashboardLayout, 
  DashboardStats, 
  RecentJobs, 
  QuickActions, 
  UpcomingInterviews,
  ApplicationProgress
} from "@/components";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Welcome back!
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Here&apos;s what&apos;s happening with your job search today.
          </p>
        </div>

        {/* Stats Cards */}
        <DashboardStats />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Larger components */}
          <div className="lg:col-span-2 space-y-8">
            <RecentJobs />
            <ApplicationProgress />
          </div>
          
          {/* Right Column - Sidebar components */}
          <div className="space-y-8">
            <QuickActions />
            <UpcomingInterviews />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
