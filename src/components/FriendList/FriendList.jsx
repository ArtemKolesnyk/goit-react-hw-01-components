import PropTypes from "prop-types";
import { FriendListItem } from "./FriendListItem";
import { List } from './FriendList.style';

const FriendList = ({friends}) => {
return (
  <List>  
    <FriendListItem friends={friends}/>
  </List>     
)
}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })).isRequired,
}

export default FriendList;