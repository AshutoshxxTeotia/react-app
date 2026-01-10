import React from 'react'
import Card from './components/cards/Card.jsx'
import styles from './components/cards/Card.module.css'

function App() {
  const jobOpenings = [
    {
      logo : "https://www.pngplay.com/wp-content/uploads/3/Amazon-Logo-Transparent-PNG.png",
      comapanyName : "Amazon",
      designation : "Senior UI/UX Designer",
      roleType : "Part-time",
      jobLevel : "Senior level",
      pay : "$120/hr",
      location : "Mumbai, India"
    },
    {
      logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
      comapanyName : "Google",
      designation : "Junior DevOps EngineerFull-time",
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
              <Card designation = {elem.designation} logo = {elem.logo}></Card>
      </div>
    })}
    </div>  
  )
}

export default App