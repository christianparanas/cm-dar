import Head from 'next/head'
import { useState, useEffect } from 'react'


// compoenents
import Nav from '../components/Nav'


export default function Home() {


  return (
    <div className="container">
      <Head>
        <title>Daryl</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="main">
        <Nav />
        <h1><span>Daryl </span><span> AlVAREZ</span></h1>
        <h2>From BSIT 2E</h2>
      </main>
    </div>
  )
}
