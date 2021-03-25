import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - IonicArgon</title>
      </Head>

      <div class="max-w-2xl bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg">
        <div id="header" class="flex"> 
          <img alt="mountain" class="w-60 h-60 rounded-md border-2 border-gray-300 object-cover" src="/square.jpg"/>
          <div id="body" class="flex flex-col ml-5">
            <h4 id="name" class="text-2xl font-semibold mb-2">ionicargon.vercel.app</h4>
            <h4 id="subtitle" class="text-xl text-gray-600 font-semibold mb-2">
              This website is under construction.
            </h4>
            <p id="job" class="text-gray-800 mt-2">
              I'm finally trying to learn web development.<br></br>
              This website <i>will</i> be made with Next.js and Tailwind CSS.<br></br>
              I look forward to showing you what I can do.
            </p>
            <div class="flex mt-5">
              <img alt="avatar" class="w-6 rounded-full border-2 border-gray-300" src="/profile-pic.png"/>
              <p class="ml-3">Marco Tan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
