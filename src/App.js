import Profile from './components/profile/Profile';
import user from './data/user.json';

import Statistics from './components/statistics/Statistics';
import data from './data/data.json';

import FriendList from './components/friendList/FriendList';
import friends from './data/friends.json';

import TransactionsHistory from './components/transactionsHistory/TransactionHistory';
import transactions from './data/transactions.json';


function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data}/>
      <FriendList friends={friends}/>
      <TransactionsHistory transactions={transactions}/>
    </div>
  );
}

export default App;
