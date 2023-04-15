import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'
import Hero from '../components/hero'
import Profile from '../components/profile'
import Comics from '../components/comics'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Iron Man Landing Page</title>
      </Head>
      <Hero />
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