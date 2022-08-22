import styles from './style.module.scss'

function RoomList(props) {
  return (
    <div className={styles.container}>
        <p className={styles.header_name}>Name</p>
        <p className={styles.header_protected}>Protected</p>
        <p className={styles.header_players}>Players</p>
        <div className={styles.room_item_container}>
          {props.rooms.map(room => (
            <div onClick={() => props.onClick(room)} className={styles.room_item} key={room.id}>
              <p className={styles.room_name}>{room.name}</p>
              <p className={styles.room_protected}>{room.protected ? 'Password' : 'Public'}</p>
              <p className={styles.room_players}>{room.connected_players}/{room.max_players}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default RoomList