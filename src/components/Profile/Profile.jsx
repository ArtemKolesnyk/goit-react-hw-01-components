import PropTypes from 'prop-types';
import { Card, Avatar, NameCard, StatsList, Description, Item } from './Profile.style';

const Profile = ({ avatar, username, tag, location, stats:{ followers, views, likes} }) => {
  return (
    <Card>
      <Description>
        <Avatar
          src={avatar}
          alt="User avatar"
          width='128'
          height='128'
        />
        <NameCard>{username}</NameCard>
        <p className='tag'>{tag}</p>
        <p className='location'>{location}</p>
        <StatsList>
          <Item >
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
          </Item>
          <Item>
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
          </Item>
          <Item>
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
          </Item>
        </StatsList>
      </Description>
    </Card>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }),
};
 

export default Profile;