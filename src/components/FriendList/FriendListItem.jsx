import React from "react";
import PropTypes from "prop-types";
import { Card, Avatar, Name, Status} from './FriendList.style';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <Card key={id}>
        <Status isOnline={isOnline}></Status>
        <Avatar src={avatar} alt={name} width="48" />
        <Name>{name}</Name>
    </Card>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}

