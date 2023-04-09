import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import ironManStyles from '../styles/iron-man-styles.module.css'
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
      <section className={ironManStyles.hero}>
        <h1>Hero Section</h1>
        <p>
          lorem ipsum
        </p>
        <button>Bulma Button</button>
        <div className={ironManStyles.hero__triangle}></div>
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