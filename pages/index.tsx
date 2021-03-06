import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home: NextPage = () => {

  return (
    <div className="container" >
      <Head>
        <title>E-Commerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <Products />
    </div>
  )
}

export default Home
