import React, { useState } from 'react'
import Products from './Products'

function App() {
  const [a,b] = useState(true);
  return (
    <div className="w-full h-screen bg-zinc-700">
      <button className='px-3 py-1 bg-green-500 rounded-md text-xs' onClick={()=>b(!a)}>click</button>
    </div>  
  )
}

export default App