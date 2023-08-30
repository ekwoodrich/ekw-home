import Head from 'next/head';

export default function Home() {
  return (
    
    <div className="flex items-center justify-center h-screen">
          <Head>
        <title>Eliot Woodrich - Full Stack Software Developer</title>
          <meta name="description" content="Personal home page for Eliot Woodrich" />
          <link rel="shortcut icon" href="/favicon.png" media="(prefers-color-scheme: dark)"/>
          <link rel="shortcut icon" href="/favicon.ico" media="(prefers-color-scheme: light)"/>
        </Head>
    <main>
      <h1 className="text-3xl font-bold">
      Eliot Woodrich
    </h1>
    <h2 className="text-2xl font-bold">
      Full Stack Software Developer
    </h2>
    <h3 className="text-1xl font-bold text-slate-500	mt-4">
      <a href="https://s3.amazonaws.com/ekwoodrich.com/Eliot_Woodrich_Resume_09_23.pdf">Resume</a>
    </h3>
    <h3 className="text-1xl font-bold text-slate-500" >
      <a href="https://www.linkedin.com/in/eliot-woodrich-a83459bb/">LinkedIn</a> 
    </h3>
    <h3 className="text-1xl font-bold text-slate-500	">
      <a href="https://github.com/ekwoodrich">GitHub</a> 
    </h3>
    <h3 className="text-1xl font-bold text-slate-500">
      <a href="mailto:ekwoodrich@gmail.com">Email</a>
    </h3>
    </main>
    </div>
  )
}
