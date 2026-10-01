import { GitHubCalendar } from "react-github-calendar";

const GithubActivity = () => {
  return (
    <section className="mx-auto mt-12 mb-10 w-full max-w-5xl px-2 sm:mt-16 sm:px-4 md:px-6 lg:px-8">
      <div className="mb-5">
        <h2 className="text-xl font-medium tracking-tight text-[var(--foreground)] sm:text-2xl">
          GitHub Activity
        </h2>
      </div>

      <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-sm sm:p-5 md:p-6">
        <div className="w-full min-w-0 overflow-x-auto">
          <div className="flex min-w-max justify-center sm:min-w-0">
            <GitHubCalendar
              username="CSaumya"
              blockSize={14}
              blockMargin={3}
              fontSize={14}
              theme={{
                dark: [
                  "#14140f",
                  "#4a4220",
                  "#806d20",
                  "#c49a16",
                  "#f5c518",
                ],
                light: [
                  "#8A8875",
                  "#ead9a8",
                  "#d9ad52",
                  "#c47a00",
                  "#a86100",
                ],
              }}
              colorScheme="dark"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubActivity;
