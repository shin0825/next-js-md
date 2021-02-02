import Head from 'next/head'

export default function Layout({ title, url="/" }) {
  return (
    <Head>
      <title>
        {title}
      </title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@s_nakamura_0913" />
      <meta name="twitter:creator" content="@s_nakamura_0913" />
      <meta property="og:url" content={"https://s-nakamura-portfolio.com" + url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content="S.Nakamura Portfolio" />
      <meta property="og:image" content="https://s-nakamura-portfolio.com/photo.jpg" />
    </Head>
  )
}
