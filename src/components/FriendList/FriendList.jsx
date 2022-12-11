import PropTypes from "prop-types";
import css from './FriendList.module.css';

const FriendList = ({friends}) => {
return (
  <ul className={css.friendlist}>  
    {friends.map(({id, isOnline, avatar, name}) => (
        <li className={css.item} key={id}>
            <span className={isOnline ? css.on : css.off}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    ))}
  </ul>     
)
}


FriendList.propTypes = {
<<<<<<< HEAD
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })),
}

export default FriendList;
=======
    friends: PropTypes.arrayOf({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }),
}
>>>>>>> 540aadb6a63f62964ec37d9991edc9fbaad2acd1
