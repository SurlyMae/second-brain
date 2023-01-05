import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = ''
export const siteTitle = 'Ashly LaMarr'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="second brain"
        />
        <meta
          property="og:image"
          content="/images/Jurgen_tifo.png"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/Jurgen_tifo.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt="An artistic representation of LFC gaffer Jurgen Klopp"
              title='Credit: Tifo Football'
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/Jurgen_tifo.png"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt="An artistic representation of LFC gaffer Jurgen Klopp"
                  title='Credit: Tifo Football'
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
