"use client";

interface QuickAction {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
  color: "blue" | "green" | "purple" | "orange";
}

const QuickActions = () => {
  const actions: QuickAction[] = [
    {
      title: "Add New Job",
      description: "Track a new job application",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
      onClick: () => {
        // Navigate to add job page
        console.log("Navigate to add job");
      },
      color: "blue",
    },
    {
      title: "Schedule Interview",
      description: "Add upcoming interview",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 9l4-4 4 4m-4-4v9"
          />
        </svg>
      ),
      onClick: () => {
        console.log("Schedule interview");
      },
      color: "green",
    },
    {
      title: "View Analytics",
      description: "See your application stats",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      onClick: () => {
        console.log("View analytics");
      },
      color: "purple",
    },
    {
      title: "Export Data",
      description: "Download your job data",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      onClick: () => {
        console.log("Export data");
      },
      color: "orange",
    },
  ];

  const getColorClasses = (color: QuickAction["color"]) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-500",
        hover: "hover:bg-blue-600",
        text: "text-blue-600",
      },
      green: {
        bg: "bg-green-500",
        hover: "hover:bg-green-600",
        text: "text-green-600",
      },
      purple: {
        bg: "bg-purple-500",
        hover: "hover:bg-purple-600",
        text: "text-purple-600",
      },
      orange: {
        bg: "bg-orange-500",
        hover: "hover:bg-orange-600",
        text: "text-orange-600",
      },
    };
    return colorMap[color];
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Quick Actions
        </h3>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {actions.map((action, index) => {
            const colors = getColorClasses(action.color);
            return (
              <button
                key={index}
                onClick={action.onClick}
                className="group p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 hover:shadow-md text-left"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 ${colors.bg} ${colors.hover} rounded-lg flex items-center justify-center text-white transition-colors group-hover:scale-110 transform duration-200`}
                  >
                    {action.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200">
                      {action.title}
                    </h4>
                    {/* <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {action.description}
                    </p> */}
                  </div>
                  <svg
                    className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
