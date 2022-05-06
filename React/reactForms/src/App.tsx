import { KeyboardEventHandler, useState } from 'react'
import BasicForm from './components/BasicForm'

const App = () => {  
  return (
    <>
      <h4 className='text-center mt-2'>Estudando Formularios React</h4>
      <BasicForm email='abluble@abluble.com' password='123123123' brand='oracle' message='fonclbriscph' price={2}/>
      <br />
    </>
  )
}

export default App
