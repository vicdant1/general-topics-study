import React from 'react'

export const getStaticPaths = async () => {
  const req = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await req.json();

  const paths = data.map(item => {
    return {
      params: {
        // same name as file does
        ninjaId: item.id.toString()
      }
    }
  });
  
  return{
    paths, // paths: paths => paths,
    fallback: false
  }
}


// it will work like a foreach here, using each param we had in routes to create html pages in build time. 
export const getStaticProps = async (context) => {
  const id = context.params.ninjaId;

  const req = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await req.json();

  return{
    props:{
      user: data
    }
  }

}

export default function Details({user}) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.website}</p>
      <p>{user.address.city}</p>
    </div>
  )
}
