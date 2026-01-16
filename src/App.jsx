import React from 'react'
import Card from './components/cards/Card.jsx'
import styles from './components/cards/Card.module.css'

function App() {
  const jobOpenings = [
    {
      logo : "https://www.pngplay.com/wp-content/uploads/3/Amazon-Logo-Transparent-PNG.png",
      companyName : "Amazon",
      designation : "Senior UI/UX Designer",
      roleType : "Part-time",
      jobLevel : "Senior level",
      pay : "$120/hr",
      location : "Mumbai, India"
    },
    {
      logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
      companyName : "Google",
      designation : "Junior DevOps Engineer",
      roleType : "Full-time",
      jobLevel : "Junior level",
      pay : "$130/hr",
      location : "Banglore, India"
    }
  ];
  console.log(jobOpenings);
  return (
    <div className={styles.parent}>
    {jobOpenings.map((elem, idx)=>{
      return <div key={idx}>
              <Card companyName = {elem.companyName} designation = {elem.designation} logo = {elem.logo}></Card>
      
      //tailwind test changes
      <div>
        <h1 className='bg-red-600'>tailwindcss</h1>
      </div>
    </div>  
    })}
    
    </div>  
  )
}

export default App