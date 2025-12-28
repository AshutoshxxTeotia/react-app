import React, { useState } from 'react'
function Products() {
  const [a,b] = useState(true);
  return (
    <div className='text-white h-90 bg-zinc-900'>
      <button className='px-3 py-1 bg-green-500 rounded-md text-xs' onClick={()=>b(!a)}>click</button>
        <h1 className= {`${a === false? "text-red-500" : "text-blue-400"}`}>
          {a === false? "hey" : "hello"}</h1>
    </div>
  )
}
export default Products