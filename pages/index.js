import Head from 'next/head'

import Game from '../components/Game'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Circle Game Test - Sign on Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <span className="text-3xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-purple-500">
            Circle Game
          </span>
        </h1>
        <Game />
      </main>
    </div>
  )
}
