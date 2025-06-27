export default async function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <main className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Job Tracker</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Track your job applications and manage your job search efficiently
          </p>
        </div>

        <div className="grid gap-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Recent Job Applications</h2>
            <div className="text-sm text-gray-500">
              {jobs.length} application{jobs.length !== 1 ? "s" : ""} found
            </div>
          </div>

          {jobs.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <p className="text-gray-500 mb-4">No job applications yet</p>
              <p className="text-sm text-gray-400">
                Start by adding your first job application!
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {job.position || "Position not specified"}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400">
                        {job.company || "Company not specified"}
                      </p>
                      {job.jobUrl && (
                        <a
                          href={job.jobUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          View Job Posting →
                        </a>
                      )}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          job.status === "INTERVIEW" ||
                          job.status === "PHONE_SCREEN" ||
                          job.status === "TECHNICAL_INTERVIEW" ||
                          job.status === "FINAL_INTERVIEW"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            : job.status === "OFFER" ||
                              job.status === "ACCEPTED"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : job.status === "REJECTED" ||
                              job.status === "WITHDRAWN"
                            ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
                        }`}
                      >
                        {job.status
                          .replace(/_/g, " ")
                          .toLowerCase()
                          .replace(/\b\w/g, (l) => l.toUpperCase())}
                      </span>
                      {job.workplaceType && (
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded text-xs font-medium">
                          {job.workplaceType
                            .toLowerCase()
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </span>
                      )}
                    </div>
                  </div>

                  {job.description && (
                    <p className="text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                      {job.description}
                    </p>
                  )}

                  {job.notes && (
                    <div className="mb-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-400">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Notes:</span> {job.notes}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    {job.location && (
                      <span className="flex items-center gap-1">
                        📍 {job.location}
                      </span>
                    )}
                    {job.salary && (
                      <span className="flex items-center gap-1">
                        💰 {job.salary}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      📅 Applied {new Date(job.appliedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4">
            💡 This is a development preview using SQLite with Prisma
          </p>
          <p className="text-xs text-gray-400">
            Database integration will be switched to Supabase in the next stage
          </p>
        </div>
      </main> */}
    </div>
  );
}
