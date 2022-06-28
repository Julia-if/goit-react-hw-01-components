import FriendsListItem from "components/FriendsListItem/FriendsListItem";
import s from './FriendsList.module.css';
import PropTypes from 'prop-types';

export const FriendsList = ({friends})=>{
    return (<ul className={s.friends}>
        {friends.map(({avatar, name, isOnline, id})=>{ return(
            <FriendsListItem
             avatar={avatar}
            name={name}
            isOnline={isOnline} key={id}/>
        )})}
         
    </ul>
    )}
    FriendsList.prototype={
        friends: PropTypes.arrayOf(
            PropTypes.shape({
                avatar: PropTypes.string,
name: PropTypes.string,
isOnline: PropTypes.bool,
             } )
        )
    }
    // export default FriendsList;