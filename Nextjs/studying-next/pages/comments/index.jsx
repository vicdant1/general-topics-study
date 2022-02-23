import Link from 'next/link';
import React from 'react'
import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => { 
  const req = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await req.json();

  return{
    props: {
      comments: data
    }
  }
}

export default function Comments({comments}) {
  return (
    <>
      <h1>All comments</h1>
      {comments.map(comment => (
        <Link key={comment.id} href={`/comments/${comment.id}`}>
          <a className={styles.single}>
            <h3>{comment.title}</h3>
          </a>
        </Link>
      ))}
    </>
  )
}
