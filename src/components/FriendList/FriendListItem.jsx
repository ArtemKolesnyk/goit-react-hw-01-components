import React from "react";
import PropTypes from "prop-types";
import { Item, Avatar, Name, Status} from './FriendList.style';

export const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(friend => (
        <Item key={friend.id}>
          <Status isOnline={friend.isOnline}></Status>
          <Avatar src={friend.avatar} alt="User avatar" width="48" />
          <Name>{friend.name}</Name>
        </Item>
      ))}
    </>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })),
}
