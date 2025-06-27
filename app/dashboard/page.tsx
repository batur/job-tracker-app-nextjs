import { DashboardLayout } from "@/components";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="border-4 border-dashed border-gray-200 dark:border-gray-700 rounded-lg h-96 flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Welcome to your Job Tracker Dashboard
        </h1>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
