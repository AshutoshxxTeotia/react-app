import React from 'react'

function Products({a}) {
  return (
    <div className='text-white h-90 bg-zinc-900'>
        <h1 className= {`${a === false? "text-red-500" : "text-blue-400"}`}>
          {a === false? "hey" : "hello"}</h1>
    </div>
  )
}
export default Products