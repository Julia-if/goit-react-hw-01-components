import s from './FriendsListItem.module.css'
const FriendsListItem = ({avatar, name, isOnline})=>{
    const circle=[s.circle];
    if(isOnline){
        circle.push(s.isOnline)
    }
    return (
      <li className={s.item}>
        
          <span className={circle.join(" ")}>{isOnline}</span>
  <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={s.name}>{name}</p>
  </li>  )
        }
         
   
   
    export default FriendsListItem;

