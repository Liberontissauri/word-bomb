import React from 'react'
import styles from "./style.module.scss"

function Button(props) {

    function computeStyle(size) {
        let style = styles.base + " "
        switch (size) {
            case "small":
                style += styles.small + " "
                break
            case "medium":
                style += styles.medium + " "
                break
            case "large":
                style += styles.large + " "
                break
            default:
                style += styles.medium + " "
                break
        }
        return style
    }
    return (
        <button className={computeStyle(props.size)}>{props.text}</button>
    )
}

export default Button