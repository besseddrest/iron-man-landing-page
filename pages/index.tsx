import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Iron Man Landing Page</title>
      </Head>
      <section className="hero">
        <div className="columns is-flex">
          <div className="column">
            <p className="hero__description">
              API Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.
            </p>
            <button className="button hero__button">Get Started</button>
          </div>
          <div className="column is-flex-shrink-1">
            <Image src="/images/hero-iron-man.png" width="410" height="559" alt="Iron Man Cartoon" />
          </div>
        </div>
      </section>
      <section className="profile">
        <h2>Profile Section</h2>
      </section>
      <section className="carousel">
        <p>image carousel goes here</p>
      </section>
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