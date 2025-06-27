"use client";

interface ApplicationProgressProps {
  data?: {
    applied: number;
    screening: number;
    interview: number;
    offer: number;
    rejected: number;
  };
}

const ApplicationProgress = ({ data }: ApplicationProgressProps) => {
  const defaultData = {
    applied: 24,
    screening: 12,
    interview: 6,
    offer: 2,
    rejected: 14,
  };

  const progressData = data || defaultData;
  const total = Object.values(progressData).reduce((sum, value) => sum + value, 0);

  const getPercentage = (value: number) => {
    return total > 0 ? Math.round((value / total) * 100) : 0;
  };

  const stages = [
    {
      key: 'applied',
      label: 'Applied',
      value: progressData.applied,
      color: 'bg-blue-500',
      lightColor: 'bg-blue-100 dark:bg-blue-900',
    },
    {
      key: 'screening',
      label: 'Screening',
      value: progressData.screening,
      color: 'bg-yellow-500',
      lightColor: 'bg-yellow-100 dark:bg-yellow-900',
    },
    {
      key: 'interview',
      label: 'Interview',
      value: progressData.interview,
      color: 'bg-purple-500',
      lightColor: 'bg-purple-100 dark:bg-purple-900',
    },
    {
      key: 'offer',
      label: 'Offer',
      value: progressData.offer,
      color: 'bg-green-500',
      lightColor: 'bg-green-100 dark:bg-green-900',
    },
    {
      key: 'rejected',
      label: 'Rejected',
      value: progressData.rejected,
      color: 'bg-red-500',
      lightColor: 'bg-red-100 dark:bg-red-900',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Application Progress
        </h3>
      </div>

      <div className="p-6">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>Progress Pipeline</span>
            <span>{total} total applications</span>
          </div>
          
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
            <div className="h-full flex">
              {stages.map((stage, index) => {
                const percentage = getPercentage(stage.value);
                return percentage > 0 ? (
                  <div
                    key={stage.key}
                    className={`${stage.color} ${index === 0 ? 'rounded-l-full' : ''} ${
                      index === stages.length - 1 ? 'rounded-r-full' : ''
                    }`}
                    style={{ width: `${percentage}%` }}
                    title={`${stage.label}: ${stage.value} (${percentage}%)`}
                  />
                ) : null;
              })}
            </div>
          </div>
        </div>

        {/* Stage Details */}
        <div className="grid grid-cols-2 gap-4">
          {stages.map((stage) => (
            <div key={stage.key} className="flex items-center space-x-3">
              <div className={`w-3 h-3 ${stage.color} rounded-full`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {stage.label}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {stage.value}
                  </span>
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500">
                  {getPercentage(stage.value)}% of total
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Rate */}
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-lg font-semibold text-green-600 dark:text-green-400">
                {total > 0 ? Math.round((progressData.offer / total) * 100) : 0}%
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Offer Rate
              </div>
            </div>
            <div>
              <div className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                {total > 0 ? Math.round(((progressData.interview + progressData.offer) / total) * 100) : 0}%
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Interview Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationProgress;
