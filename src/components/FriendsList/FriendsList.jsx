import PropTypes from 'prop-types';
import FriendsListItem from "components/FriendsList/FriendsListItem/FriendsListItem";
import s from './FriendsList.module.css';

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
    
    FriendsList.propTypes={
        friends: PropTypes.arrayOf(
            PropTypes.shape({
                avatar: PropTypes.string,
                name: PropTypes.string,
                isOnline: PropTypes.bool,
                } )
        )
    }
    