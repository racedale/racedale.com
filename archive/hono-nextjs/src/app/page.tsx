export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl md:text-5xl font-extrabold">
          Self-taught Full-Stack dev since 2015
        </h1>
        <ul className="list-inside text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            I specialize mostly in:
            <ul>
              <li>
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                  JavaScript (React, Node)
                </code>
              </li>
              <li>
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                  Serverless (Lambda, Fargate, Edge)
                </code>
              </li>
              <li>
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                  DevOps (Docker, Terraform, AWS)
                </code>
              </li>
            </ul>
          </li>
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://linkedin.com/in/racedale"
            target="_blank"
            rel="noopener noreferrer"
          >
            ✉️ Contact
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://github.com/racedale"
            target="_blank"
            rel="noopener noreferrer"
          >
            🐙 Github
          </a>
        </div>
      </main>
    </div>
  );
}
