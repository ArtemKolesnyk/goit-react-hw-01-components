import PropTypes from "prop-types";
import s from './Friend.module.css';

export default function FriendList({friends}) {
    return (
        <ul className={s.list}>
            {friends.map(({id, isOnline, avatar, name}) => (
                <li className={s.item} key={id}>
                    <span className={isOnline ? s.on : s.off}>{isOnline}</span>
                    <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={s.name}>{name}</p>
                </li>
            ))}
        </ul>
    )
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }),
}
