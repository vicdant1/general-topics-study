import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ninjas | Homepage</title>
        <meta name='keywords' content='abluble' />        
      </Head>

      <h1 className={styles.title}>abluble</h1>
      <p  className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium porro blanditiis eaque repudiandae esse eius aut deserunt necessitatibus, nihil est, facere illum possimus corrupti architecto reiciendis impedit doloremque voluptatum ducimus pariatur suscipit incidunt! Iure, quod in. Harum voluptatibus perspiciatis excepturi.</p>
      <p  className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tempore incidunt pariatur, voluptas culpa consequuntur, modi recusandae facilis minima ea eaque consequatur, quam ducimus quae quis velit minus nesciunt in.</p>
      <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
    </div>
  )
}
