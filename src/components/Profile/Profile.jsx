import PropTypes from 'prop-types';
//import css from './Profile.module.css';
import {Card, Avatar, NameCard, StatsList, Description, Item} from './Profile.style';
const Profile = ({ avatar, username, tag, location, stats }) => {
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
            <span className="quantity">{stats.followers}</span>
          </Item>
          <Item>
            <span className="label">Views</span>
            <span className="quantity">{stats.views}</span>
          </Item>
          <Item>
            <span className="label">Likes</span>
            <span className="quantity">{stats.likes}</span>
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
  stats: PropTypes.object.isRequired,
};

Profile.defaultProps = {
  name: 'User name',
  tag: '@User tag',
  location: 'User location',
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg',
  stats: {
    followers: '0',
    views: '0',
    likes: '0',
  },
} 

export default Profile;