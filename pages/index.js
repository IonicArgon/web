import Head from "next/head";

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center">
      <Head>
        <title>IonicArgon</title>
      </Head>

      <figure className="md:flex md:w-auto bg-gray-100 rounded-xl overflow-hidden shadow-xl">
        <img className="w-60 md:w-60 md:h-auto md:rounded-none rounded-full object-cover" src="/square.jpg" alt=""/>
        <div className="md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <h4 id="name" className="text-2xl font-semibold mb-2">ionicargon.vercel.app</h4>
            <h4 id="subtitle" className="text-xl text-gray-500 font-medium mb-2">This website is under construction.</h4>
            <br></br>
            <p className="text-base font-normal">
              I'm finally starting to learn web development. Once I know what I'm doing, I'll turn this into a proper website.<br></br>
              Gonna make it using Next.js and Tailwind CSS.
            </p>
          </blockquote>
          <figcaption>
            <div className="text-red-600 font-medium">Marco Tan</div>
            <div className="text-gray-500 font-medium text-sm">IonicArgon</div>
            <br></br>
            <div className="space-x-2">
              <a href="https://github.com/IonicArgon">
                <button className="bg-black py-1 px-2 rounded-full text-white text-sm hover:text-gray-300 transform hover:scale-110 hover:-translate-y-1 transition duration-300 ease-in-out">
                  <span>GitHub</span>
                </button>
              </a>
              <a href="https://www.instagram.com/marco_tan_04/">
                <button className="bg-yellow-700 py-1 px-2 rounded-full text-white text-sm hover:bg-yellow-800 transform hover:scale-110 hover:-translate-y-1 transition duration-300 ease-in-out">
                  <span>Instagram</span>
                </button>
              </a>
              <a href="https://www.linkedin.com/in/marco-tan-9191021a3/">
                <button className="bg-blue-500 py-1 px-2 rounded-full text-white text-sm hover:bg-blue-600 transform hover:scale-110 hover:-translate-y-1 transition duration-300 ease-in-out">
                  <span>LinkedIn</span>
                </button>
              </a>
              <a href="mailto:marco.tan.200405@gmail.com">
                <button className="bg-red-500 py-1 px-2 rounded-full text-white text-sm hover:bg-red-600 transform hover:scale-110 hover:-translate-y-1 transition duration-300 ease-in-out">
                  <span>Email</span>
                </button>
              </a>
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
