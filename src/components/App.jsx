import { Profile }  from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendsList } from "./FriendsList/FriendsList";
import {TransactionHistory } from "./TransactionHistory/TransactionHistory";

import data from '../data/data.json';
import user from '../data/user.json'
import friends from '../data/friends.json'
import transactions from "../data/transactions.json";

 export const App = () => {
  return (
    <div>
     <Profile
     avatar={user.avatar}
     username={user.username}
     tag={user.tag}
     location={user.location}
     stats={user.stats}/>
     <Statistics title="Upload stats" stats={data} />
     <FriendsList friends={friends} />;
     <TransactionHistory items={transactions} />;
     </div>
  );
};

