import PropTypes from 'prop-types';
import s from './FriendsListItem.module.css'

const FriendsListItem = ({avatar, name, isOnline})=>{
        return (
      <li className={s.item}>
        <span className={isOnline? s.green: s.red}> {isOnline}</span>
        <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={s.name}>{name}</p>
      </li>  )
        }      
   
         FriendsListItem.propTypes={
avatar: PropTypes.string,
name: PropTypes.string,
isOnline: PropTypes.bool
         }
   
    export default FriendsListItem;

