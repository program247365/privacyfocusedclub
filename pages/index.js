import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Nav />

    <div className='hero'>
      <h1 className='title'>Privacy Focused Club</h1>
      <p className='description'>
      For those interested in finding privacy focused services and websites to use on the web.
      </p>
      <p className='description'>
      As the index gets built, here are some great privacy-focused products to get you started...
      </p>
      <div className='row'>
       <a href='https://simpleanalytics.com/' className='card'>
         <h3>Simple Analytics &rarr;</h3>
         <p> Simple, clean, and
         friendly analytics. We show you the essentials: page views, referrers, top pages, and screen sizes. We enrich this data with useful info like original Tweets. We don't use cookies or collect any personal data. So no cookie banners, GDPR, CCPA, or PECR to worry about.
         </p>
       </a>
       <a href='https://duckduckgo.com' className='card'>
         <h3>DuckDuckGo &rarr;</h3>
         <p>The search engine that doesn't track you. Our privacy policy is simple: we don’t collect
         or share any of your personal information. We don’t store your search history. We therefore have nothing
         to sell to advertisers that track you across the Internet. Other search engines track your searches even when you’re
         in private browsing mode. We don’t track you — period.</p>
       </a>
       <a
         href='https://www.mozilla.org/en-US/firefox/privacy/products/'
         className='card'
       >
         <h3>Firefox Browser &rarr;</h3>
         <p>

         Tracking has become an epidemic online: companies follow every move, click and purchase, collecting data to predict and influence what you’ll do next. We think that’s a gross invasion of your privacy. That’s why Firefox mobile and desktop browsers have Enhanced Tracking Protection on by default. </p>
       </a>
     </div>
   </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
