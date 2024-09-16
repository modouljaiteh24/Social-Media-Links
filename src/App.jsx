import profile from "./assets/profile.png";
function App() {
  return (
    <>
      <div>
        <div className="lg:w-[400px] lg:h-[300px] mx-auto mt-[rem] p-4">
          <div className="bg-slate-800 rounded-md lg:p-6 p-8">
            <div className="flex justify-center items-center ">
              <img
                src={profile}
                alt="profile"
                className="w-[8rem] rounded-[50%]"
              />
            </div>
            <div className="text-center ">
              <h1 className="mt-5 text-[1.5rem]">Modou Lamin Jaiteh</h1>
              <h2 className="te text-orange-500">
                Graphix Designer || Developer
              </h2>
              <div className="mt-5">
                <q>I am a designer and a developer</q>
              </div>
            </div>

            <div className="mt-5 text-center space-y-4 text-[2rem] lg:text-[1rem]">
              <div className="bg-slate-700 rounded-md lg:p-2 p-7 text-white hover:bg-orange-600">
                <a href="">Githup</a>
              </div>
              <div className="bg-slate-700 rounded-md lg:p-2 p-7 text-white hover:bg-orange-600">
                <a href="">Facebook</a>
              </div>
              <div className="bg-slate-700 rounded-md lg:p-2 p-7 text-white hover:bg-orange-600">
                <a href="">Twitter</a>
              </div>
              <div className="bg-slate-700 rounded-md lg:p-2 p-7 text-white hover:bg-orange-600">
                <a href="">LinkedIn</a>
              </div>
              <div className="bg-slate-700 rounded-md lg:p-2 p-7 text-white hover:bg-orange-600">
                <a href="https://modou-jaiteh.vercel.app/">Portfolio</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="lg:mt-[20rem] mb-3 text-center text-white">
        <p className="text-center text-white text-xs">
          Made with ❤️ by Modou Lamin Jaiteh
        </p>
      </footer>
    </>
  );
}

export default App;
