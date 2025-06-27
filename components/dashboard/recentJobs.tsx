interface Job {
  id: string;
  company: string;
  position: string;
  status: 'applied' | 'interview' | 'offer' | 'rejected';
  appliedDate: string;
  salary?: string;
}

interface RecentJobsProps {
  jobs?: Job[];
}

const RecentJobs = ({ jobs = [] }: RecentJobsProps) => {
  const mockJobs: Job[] = [
    {
      id: '1',
      company: 'TechCorp Inc.',
      position: 'Senior Software Engineer',
      status: 'interview',
      appliedDate: '2025-06-25',
      salary: '$120,000',
    },
    {
      id: '2',
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      status: 'applied',
      appliedDate: '2025-06-24',
      salary: '$95,000',
    },
    {
      id: '3',
      company: 'BigTech Solutions',
      position: 'Frontend Developer',
      status: 'offer',
      appliedDate: '2025-06-22',
      salary: '$110,000',
    },
    {
      id: '4',
      company: 'Innovation Labs',
      position: 'React Developer',
      status: 'rejected',
      appliedDate: '2025-06-20',
      salary: '$85,000',
    },
    {
      id: '5',
      company: 'Cloud Systems',
      position: 'DevOps Engineer',
      status: 'applied',
      appliedDate: '2025-06-18',
      salary: '$130,000',
    },
  ];

  const displayJobs = jobs.length > 0 ? jobs : mockJobs;

  const getStatusBadge = (status: Job['status']) => {
    const statusConfig = {
      applied: {
        color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
        text: 'Applied',
      },
      interview: {
        color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
        text: 'Interview',
      },
      offer: {
        color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
        text: 'Offer',
      },
      rejected: {
        color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
        text: 'Rejected',
      },
    };

    const config = statusConfig[status];
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${config.color}`}>
        {config.text}
      </span>
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Recent Applications
          </h3>
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
            View all
          </button>
        </div>
      </div>
      
      <div className="overflow-hidden">
        {displayJobs.length === 0 ? (
          <div className="px-6 py-8 text-center">
            <svg
              className="w-12 h-12 mx-auto text-gray-400 dark:text-gray-600 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
              No applications yet
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Start tracking your job applications to see them here.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {displayJobs.map((job) => (
              <div key={job.id} className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-medium text-sm">
                          {job.company.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {job.position}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                          {job.company}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    {job.salary && (
                      <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {job.salary}
                        </p>
                      </div>
                    )}
                    <div className="text-right">
                      <div className="mb-1">
                        {getStatusBadge(job.status)}
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {formatDate(job.appliedDate)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentJobs;
