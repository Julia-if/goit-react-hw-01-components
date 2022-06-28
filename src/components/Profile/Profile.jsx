import s from './Profile.module.css'
import PropTypes from 'prop-types';
export const Profile = ({avatar, username, tag, location, followers, views, likes}) => {return (
<div className={s.profile}>   
<div> 
    <img className={s.img} src = {avatar} alt={username} ></img>
    <h2 className={s.name}>{username}</h2>
   <p className={s.tag}>@{tag}</p>
   <p className={s.location}>{location}</p>
   <div className={s.stats}>
   <p className={s.list_item}>Followers: {followers}</p>
   <p className={s.list_item}>Views: {views}</p>
   <p className={s.list_item}>Likes:{likes}</p>
   </div>
   </div>
   </div>
    )}
Profile.prototype={
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    likes: PropTypes.number,
    views: PropTypes.number,
}
    // export default Profile;