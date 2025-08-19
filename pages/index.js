import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello I am Rancis Santos. 20 years old 3rd Year Student from the University of the Assumption currently taking the Bachelor of Science in Information Technology. I am intereseted in the matters of geogpraphy and global demographics. I love watching movies and documentaries about history and wars. I see myself five years from now as a successful after graduating by pursuing software engineering and earning money. </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
