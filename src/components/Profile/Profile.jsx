import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <div className={css.profile}>
      <div className='description' >
        <img
          src={avatar}
          alt="User avatar"
          className={css.avatar}
          width='128'
          height='128'
        />
        <p className={css.name}>{username}</p>
        <p className='tag'>{tag}</p>
        <p className='location'>{location}</p>
        <ul className={css.stats}>
          <li className={css.item}>
            <span className="label">Followers</span>
            <span className="quantity">{stats.followers}</span>
          </li>
          <li className={css.item}>
            <span className="label">Views</span>
            <span className="quantity">{stats.views}</span>
          </li>
          <li className={css.item}>
            <span className="label">Likes</span>
            <span className="quantity">{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
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