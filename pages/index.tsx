import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'
import Hero from '../components/hero'
import Profile from '../components/profile'
import Comics from '../components/comics'
import { createHash } from 'crypto'
import { useEffect, useState } from 'react'

export default function Home() {
  const [heroDesc, setHeroDesc] = useState('');

  useEffect(() => {
    getHeroDescription();
  }, []);

  async function getHeroDescription() {
    const time = new Date();
    const pub = process.env.NEXT_PUBLIC_PUBLIC_API_KEY;
    const pri = process.env.NEXT_PUBLIC_PRIVATE_API_KEY;
    const hash = createHash('md5')
      .update(time + pri + pub)
      .digest('hex');
    const hero = await fetch(`https://gateway.marvel.com/v1/public/characters/1009368?ts=${time}&apikey=${pub}&hash=${hash}`)
      .then(response => response.json())
      .then(resp => setHeroDesc(resp.data.results[0].description));
  }

  return (
    <Layout home>
      <Head>
        <title>Iron Man Landing Page</title>
      </Head>
      <Hero heroDesc={heroDesc} />
      <Profile />
      <Comics />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}