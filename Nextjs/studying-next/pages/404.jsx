import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go()
      router.push('/');
    }, 3000);
  }, []);

  return (
    <>
      <h1>Azedou</h1>
      <p>Not Found</p>
    </>
  )
}
