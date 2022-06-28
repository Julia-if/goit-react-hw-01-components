import { Profile }  from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendsList } from "./FriendsList/FriendsList";
import  {TransactionHistory } from "./TransactionHistory/TransactionHistory";

import data from './jsoons/data.json';
import user from './jsoons/user.json'
import friends from './jsoons/friends.json'
import transactions from "./jsoons/transactions.json";

 export const App = () => {
  return (
    <div>
     <Profile
     avatar={user.avatar}
     username={user.username}
     tag={user.tag}
     location={user.location}
     followers={user.stats.followers}
     views={user.stats.views}
     likes={user.stats.likes}/>
     <Statistics title="Upload stats" stats={data} />
     <FriendsList friends={friends} />;
     <TransactionHistory items={transactions} />;
     </div>
  );
};

