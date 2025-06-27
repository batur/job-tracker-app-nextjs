interface Interview {
  id: string;
  company: string;
  position: string;
  type: 'phone' | 'video' | 'onsite' | 'technical';
  date: string;
  time: string;
  interviewer?: string;
}

interface UpcomingInterviewsProps {
  interviews?: Interview[];
}

const UpcomingInterviews = ({ interviews = [] }: UpcomingInterviewsProps) => {
  const mockInterviews: Interview[] = [
    {
      id: '1',
      company: 'TechCorp Inc.',
      position: 'Senior Software Engineer',
      type: 'video',
      date: '2025-06-28',
      time: '2:00 PM',
      interviewer: 'Sarah Johnson',
    },
    {
      id: '2',
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      type: 'technical',
      date: '2025-06-30',
      time: '10:00 AM',
      interviewer: 'Mike Chen',
    },
    {
      id: '3',
      company: 'BigTech Solutions',
      position: 'Frontend Developer',
      type: 'phone',
      date: '2025-07-02',
      time: '3:30 PM',
    },
  ];

  const displayInterviews = interviews.length > 0 ? interviews : mockInterviews;

  const getInterviewTypeConfig = (type: Interview['type']) => {
    const typeConfig = {
      phone: {
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        ),
        label: 'Phone',
        color: 'text-blue-600',
        bg: 'bg-blue-100 dark:bg-blue-900',
      },
      video: {
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        ),
        label: 'Video',
        color: 'text-green-600',
        bg: 'bg-green-100 dark:bg-green-900',
      },
      onsite: {
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        ),
        label: 'On-site',
        color: 'text-purple-600',
        bg: 'bg-purple-100 dark:bg-purple-900',
      },
      technical: {
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        ),
        label: 'Technical',
        color: 'text-orange-600',
        bg: 'bg-orange-100 dark:bg-orange-900',
      },
    };
    return typeConfig[type];
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      });
    }
  };

  const isToday = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Upcoming Interviews
          </h3>
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
            View calendar
          </button>
        </div>
      </div>

      <div className="p-6">
        {displayInterviews.length === 0 ? (
          <div className="text-center py-8">
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
                d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 9l4-4 4 4m-4-4v9"
              />
            </svg>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
              No upcoming interviews
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Schedule an interview to see it here.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {displayInterviews.map((interview) => {
              const typeConfig = getInterviewTypeConfig(interview.type);
              const todayInterview = isToday(interview.date);

              return (
                <div
                  key={interview.id}
                  className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${
                    todayInterview
                      ? 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-medium text-xs">
                            {interview.company.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            {interview.position}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                            {interview.company}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <div className={`w-6 h-6 rounded-full ${typeConfig.bg} ${typeConfig.color} flex items-center justify-center`}>
                            {typeConfig.icon}
                          </div>
                          <span className="text-gray-600 dark:text-gray-400">
                            {typeConfig.label}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 9l4-4 4 4m-4-4v9" />
                          </svg>
                          <span>{formatDate(interview.date)} at {interview.time}</span>
                        </div>
                      </div>

                      {interview.interviewer && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                          Interviewer: {interview.interviewer}
                        </p>
                      )}
                    </div>

                    {todayInterview && (
                      <div className="ml-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                          Today
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingInterviews;
