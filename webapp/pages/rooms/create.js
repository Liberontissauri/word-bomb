import Button from '../../components/Button'
import styles from '../../styles/Create.module.scss'
import { useState } from 'react'

import Select from 'react-select'

export default function Rooms() {

  const available_languages = [
    {value: "en_uk", label: "English"},
    {value: "pt", label: "Portuguese"},
    
  ]

  return (
    <div className={styles.container}>
      <div className={styles.bgElements}>
        <div className={styles.bgElementMagenta}></div>
        <div className={styles.bgElementBlue}></div>
      </div>
      <div className={styles.settingsDiv}>
        <p className={styles.inputLabel}>Name</p>
        <p className={styles.inputLabel}>Password</p>
        <p className={styles.inputLabel}>Size</p>
        <p className={styles.inputLabel}>Language</p>

        <input className={`${styles.nameInput} ${styles.inputField}`} type="text" />
        <input className={`${styles.passwordInput} ${styles.inputField}`} type="text" placeholder="No Password" />
        <input className={`${styles.sizeInput} ${styles.inputField}`} type="text" />
        <Select styles={{
          container: (provided, state) => ({
            ...provided,
            width: "100%",
            height: "100%",
            margin: "auto"
          }),
          control: (provided, state) => ({
            ...provided,
            height: "100%",
            backgroundColor: "rgba(217, 217, 217, 0.33)",
            boxShadow: "0px 0px 21px rgba(157, 157, 157, 0.37)",
            border: "none",
            borderRadius: "13px"
          }),
          placeholder: (provided, state) => ({
            ...provided,
            color: "#dcdcdc",
            textAlign: "center"
          }),
          input: (provided, state) => ({
            ...provided,
            color: "#fff",
          }),
          singleValue: (provided, state) => ({
            ...provided,
            color: "#fff",
            textAlign: "center"
          }),
          menu: (provided, state) => ({
            ...provided,
            backgroundColor: "rgba(217, 217, 217, 0.33)",
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? "rgba(217, 217, 217, 0.33)" : "",
            cursor: state.isFocused ? "pointer" : ""
          })
        }} 
        options={available_languages}
        ></Select>
        
      </div>
      <Button text="Create Room"></Button>
    </div>
  )
}
