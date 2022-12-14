import PropTypes from "prop-types";
import { FriendListItem } from "./FriendListItem";
import { List } from './FriendList.style';

const FriendList = ({friends}) => {
  return (
    <List friends={friends}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          prop={friend}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}/>
      ))}  
    </List>     
  )
}


FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
}

export default FriendList;