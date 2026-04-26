

function Flex() {
    return(<section className="max-w-6xl mx-auto mt-32 px-6 py-8">
      <h2 className="text-left text-4xl font-bitcount text-cyan-300 mb-8 pl-5">
        Streaks
      </h2>

      <hr className="mb-10 border-cyan-300/30" />
        <div className="grid gap-6 sm:grid-cols-1 ">
        <img 
                                            src="https://ghchart.rshah.org/274e13/Varun2976"
                                            alt="GitHub Streak"
                                            className="rounded-lg w-full"
                                        />
      </div>
      
                                        <div className="mt-2 flex gap-4 items-stretch mt-4">
                                          <div className="flex-1 bg-white/20 border border-white/30 rounded-lg p-4 text-center h-32 flex flex-col justify-center">
                                            <p className="text-gray-300 text-lg flex items-center justify-center gap-2">
                                              CodeChef
                                              <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/codechef.png" alt="codechef"/>
                                            </p>
                                            <p className="font-semibold text-3xl">2⭐</p>
                                          </div>

                                          <div className="flex-1 bg-white/20 border border-white/30 rounded-lg p-4 text-center h-32 flex flex-col justify-center">
                                            <p className="text-gray-300 text-lg flex items-center justify-center gap-2">
                                              Codeforces
                                              <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/48/external-codeforces-programming-competitions-and-contests-programming-community-logo-filled-tal-revivo.png" alt="codeforces"/>
                                            </p>
                                            <p className="font-semibold text-3xl">900+</p>
                                          </div>
                                        </div>

      
    </section>);
}

export default Flex;