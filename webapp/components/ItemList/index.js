import React from 'react'
import styles from "./style.module.scss"

function ItemList(props) {
  return (
    <div className={styles.container}>
      <p>{props.text}</p>
      {props.items.map((item, index) => (
        <div key={index} className={styles.list_item}>{item}</div>
      ))}
    </div>
  )
}

export default ItemList