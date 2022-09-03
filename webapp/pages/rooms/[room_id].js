import styles from "../../styles/Room.module.scss"
import { useRouter } from 'next/router'
import ItemList from "../../components/ItemList"
import Button from "../../components/Button"
import { useState } from 'react'
import ColoredTextSegment from "../../components/ColoredTextSegment"

function Room() {
    const router = useRouter()
    const [isOwner, setIsOwner] = useState(true)
    const [players, setPlayers] = useState([{name: "Player 1"}, {name: "Player 2"}, {name: "Player 3"}, {name: "Player 4"}, ])
    const [isGameStarted, setIsGameStarted] = useState(true)
    const [currentWord, setCurrentWord] = useState("Peanuts")
    const [currentLetterGroup, setCurrentLetterGroup] = useState("anu")
    return (
        <div className={styles.container}>
            <div className={styles.bgElements}>
                <div className={styles.bgElementMagenta}></div>
                <div className={styles.bgElementBlue}></div>
            </div>
            <div className={`${styles.waiting_room_div} ${isGameStarted ? styles.unactive : ""}`}>
                <h1>Waiting for Players...</h1>
                <div style={{marginBottom: "20px"}}>
                    <ItemList text="Current Players (4/4)" items={players.map(player => player.name)}></ItemList>
                </div>
                {isOwner ? <Button text="Start Game"></Button> : null}
            </div>
            <div className={`${styles.game_room_div} ${isGameStarted ? "" : styles.unactive}`}>
                <h1 className={styles.game_info}>It's Your Turn</h1>
                <div className={styles.turn_list} style={{marginBottom: "20px"}}>
                    <ItemList text="Next to play..." items={players.map(player => player.name)}></ItemList>
                </div>
                <ColoredTextSegment
                    divClassName={styles.current_input_word_div}
                    textClassName={styles.current_input_word}
                    highlightedClassName={styles.current_input_word_highlighted}
                    text="peanuts" segment="anu"
                />
                <div className={styles.input_div} >
                    <p className={styles.current_segment}>anu</p>
                    <input className={styles.input} type="text" placeholder="Enter your word here..."></input>
                    <Button text="Submit" size="small"></Button>
                </div>
            </div>

        </div>
    )
}

export default Room