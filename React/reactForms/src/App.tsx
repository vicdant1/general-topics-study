import { KeyboardEventHandler, useState } from 'react'
import BasicForm from './components/BasicForm'

const App = () => {  
  return (
    <>
      <h4 className='text-center mt-2'>Estudando Formularios React</h4>
      <BasicForm/>
      <br />

      <BasicForm email='abluble@abluble.com' password='1234556'/>
      <BasicForm email='abluble@abluble.com' password='1234556' message='abluble'/>

    </>
  )
}

export default App
