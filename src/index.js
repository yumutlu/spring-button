import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}


export const Mybtn = (props)=>{
  console.log(props);
 return(
 <div>
    <button className={styles[props.type]} {...props}>{props.text}</button>

 </div>

  ) 
}

