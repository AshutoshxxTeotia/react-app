import React, { useState } from 'react'
import styles from'./Products.module.css'
import { Bookmark } from 'lucide-react';
function Products() {
  const [a,b] = useState(true);
  return (
    <div className={styles.container}>
    <div className = {styles.upper}>
      <div className={styles.banner}>
      </div>
    <img src="https://www.pngplay.com/wp-content/uploads/3/Amazon-Logo-Transparent-PNG.png" 
    style={{ width: '43px', height: '43px', borderRadius: '50%', objectFit :'cover'}}></img>
    
      <div className={styles.btnSbl}>
      <button className={styles.btn} >Save</button>
      <Bookmark style={{ marginBottom : "-3px", marginLeft : "-6px", color: "grey" }} size={15} /> 
      </div>
    
    </div>

    <div className = {styles.mid}>
    
      <button className={styles.btn} >..</button>
    
    </div>

    <div className = {styles.bottom}>
   
      <button className={styles.btn} >..</button>
    </div>

    </div>
  )
}
export default Products