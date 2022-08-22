import Button from '../../components/Button'
import styles from '../../styles/Rooms.module.scss'
import RoomList from '../../components/RoomList'
import { useState } from 'react'

export default function Rooms() {
  const [roomList, setRoomList] = useState([{
      id: 1,
      name: "Room 1",
      protected: false,
      max_players: 4,
      connected_players: 2,
    },{
      id: 1,
      name: "Room 2",
      protected: false,
      max_players: 2,
      connected_players: 1,
    },
    {
      id: 1,
      name: "Room 3",
      protected: true,
      max_players: 4,
      connected_players: 3,
    },
    {
      id: 1,
      name: "Room 4",
      protected: false,
      max_players: 3,
      connected_players: 1,
    },
    {
      id: 1,
      name: "Room 4",
      protected: false,
      max_players: 3,
      connected_players: 1,
    },
    {
      id: 1,
      name: "Room 4",
      protected: false,
      max_players: 3,
      connected_players: 1,
    },
    {
      id: 1,
      name: "Room 4",
      protected: false,
      max_players: 3,
      connected_players: 1,
    },
    {
      id: 1,
      name: "Room 4",
      protected: false,
      max_players: 3,
      connected_players: 1,
    },
    {
      id: 1,
      name: "Room 4",
      protected: false,
      max_players: 3,
      connected_players: 1,
    },
    {
      id: 1,
      name: "Room 4",
      protected: false,
      max_players: 3,
      connected_players: 1,
    },

  ])

  return (
    <div className={styles.container}>
      <div className={styles.bgElements}>
        <div className={styles.bgElementMagenta}></div>
        <div className={styles.bgElementBlue}></div>
      </div>
      <div className={styles.room_list_div}>
        <div className={styles.room_list_header}>
          <h3 className={styles.room_list_text}>Choose a room:</h3>
        </div>
        <RoomList onClick={(room)=>{}} rooms={roomList}></RoomList>
      </div>
      <div className={styles.button_div}>
        <Button text="Create a Room" size="medium" />
      </div>
    </div>
  )
}
