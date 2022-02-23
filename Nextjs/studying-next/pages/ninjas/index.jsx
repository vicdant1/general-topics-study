import Link from 'next/link';
import React from 'react'
import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {
  const req = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await req.json();

  return {
    props: {
      ninjas: data
    }
  }
}

export default function Ninjas({ninjas}) {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  )
}
