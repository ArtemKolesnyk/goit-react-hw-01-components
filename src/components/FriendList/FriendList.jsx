import PropTypes from "prop-types";
import s from './Friend.module.css';

export default function FriendList({friends}) {
    return (
        <ul className={s.list}>
            {friends.map(friend => (
                <li className={s.item} key={friend.id}>
                    <span className={friend.isOnline ? s.on : s.off}>{friend.isOnline}</span>
                    <img className={s.avatar} src={friend.avatar} alt="User avatar" width="48" />
                    <p className={s.name}>{friend.name}</p>
                </li>
            ))}
        </ul>
    )
}


FriendList.propTypes = {
    frends: PropTypes.arrayOf({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }),
}