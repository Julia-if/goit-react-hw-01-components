import PropTypes from 'prop-types';
import s from './Profile.module.css'

export const Profile = ({avatar,
  username,
  tag,
  location,
  stats}) => 
  {return (
<div className={s.profile}>   
<div> 
    <img className={s.img} src = {avatar} alt={username} ></img>
    <h2 className={s.name}>{username}</h2>
   <p className={s.tag}>@{tag}</p>
   <p className={s.location}>{location}</p>
   <div className={s.stats}>
   <p className={s.list_item}>Followers: {stats.followers}</p>
   <p className={s.list_item}>Views: {stats.views}</p>
   <p className={s.list_item}>Likes:{stats.likes}</p>
   </div>
   </div>
   </div>
    )}

Profile.propTypes={
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats:  PropTypes.arrayOf(PropTypes.number)
}
