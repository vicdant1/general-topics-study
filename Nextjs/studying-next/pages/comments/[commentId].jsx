import React from 'react'

export const getStaticPaths = async () => {
  const req = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await req.json();

  const paths = data.map(path => {
    return{
      params: {
        commentId: path.id.toString()
      }
    }
  });

  return{
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.commentId;
  const req = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
  const data = await req.json();

  return{
    props: {
      commentData: data
    }
  }
}

export default function CommentDetail({commentData}) {
  console.log(commentData)
  return (
    <>
      <h1>Comment N° {commentData.id}</h1>
      <p>{commentData.title}</p>
    </>
  )
}
