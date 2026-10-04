
import { GitHubCalendar } from "react-github-calendar";


function Flex() {
  return (
    <section className="mx-auto mt-16 max-w-6xl px-4 py-8 sm:mt-24 sm:px-6 lg:mt-32">
      <h2 className="mb-8 pl-2 text-left text-3xl font-bitcount text-cyan-300 sm:pl-5 sm:text-4xl">
        Streaks
      </h2>

      <hr className="mb-10 border-cyan-300/30" />

      <div className="grid gap-6 sm:grid-cols-1">
        <img
          src="https://ghchart.rshah.org/208637/Varun2976"
          alt="GitHub Contribution Graph"
          className="w-full rounded-lg"
        />
      </div>

      <div className="mt-4 grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2 sm:gap-4">
        <div className="flex min-h-28 flex-col justify-center rounded-lg border border-white/30 bg-white/20 p-4 text-center sm:h-32 sm:min-h-0">
          <p className="flex items-center justify-center gap-2 text-base text-gray-300 sm:text-lg">
            CodeChef
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/ios-filled/50/codechef.png"
              alt="codechef"
            />
          </p>
          <p className="text-2xl font-semibold sm:text-3xl">2 ⭐</p>
        </div>

        <div className="flex min-h-28 flex-col justify-center rounded-lg border border-white/30 bg-white/20 p-4 text-center sm:h-32 sm:min-h-0">
          <p className="flex items-center justify-center gap-2 text-base text-gray-300 sm:text-lg">
            Codeforces
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/48/external-codeforces-programming-competitions-and-contests-programming-community-logo-filled-tal-revivo.png"
              alt="codeforces"
            />
          </p>
          <p className="text-2xl font-semibold sm:text-3xl">900+</p>
        </div>
      </div>
    </section>
  );
}

export default Flex;