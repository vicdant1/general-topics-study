import React from 'react'

export default function InputField() {
  return (
    <>
      <form className='input'>
        <input type="input" placeholder="Enter a task" className='input__box'/>
        <button type="submit" className="input_submit">Go</button>
      </form>
    </>
  )
}
