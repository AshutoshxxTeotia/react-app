import React from 'react'
import styles from './Card.module.css'
import { Bookmark } from 'lucide-react'

function Card(props) {
  return (
    <div className={styles.parent}>
      <div className={styles.card}>
        <div>
          <div className={styles.top}>
          <img className={styles.topImg1} src={props.logo} alt="" ></img>
          <button className={styles.topBtn1}>Save <Bookmark size={8}/></button>
        </div>
        <div className={styles.center}>
          <h3 className={styles.centerH3}>Amazon <span className={styles.centerH3Span}>5 days ago</span></h3>
          <h2 className={styles.centerH2}>{props.designation}</h2>
          <div className={styles.centerDiv}>
            <h4 className={styles.centerH4}>Part-time</h4>
            <h4 className={styles.centerH4}>Senior level</h4>
          </div>
        </div>  
        </div>
        <hr className={styles.hr}></hr> 
        <div className={styles.bottom}>
          <div className={styles.bottomDiv}>
            <h3 className={styles.bottomH3}>$120/hr</h3>
            <p className={styles.bottomP}>Mumbai, India</p>
          </div>
          <button className={styles.bottomBtn}>Apply now</button>
        </div>
      </div>
   
    </div>
  )
}

export default Card